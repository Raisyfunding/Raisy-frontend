import React, { useEffect } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { SUPPORTED_WALLETS } from "../../constants/wallet";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Modal from "../Modal";
import { Image } from "@chakra-ui/image";
import usePrevious from "../../hooks/usePrevious";

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === "MAINNET";

const Option = ({ onClick = null, header, icon, active = false }) => {
	return (
		<Flex
			onClick={onClick}
			alignItems='center'
			gridGap='25px'
			paddingBottom='20px'
			cursor='pointer'>
			<Image src={icon} boxSize='25px' />
			<Box>{header}</Box>
		</Flex>
	);
};

const ConnectWalletModal = ({ visible, onClose }) => {
	const { activate, active, connector, error, deactivate } = useWeb3React();

	// close modal when a connection is successful
	const activePrevious = usePrevious(active);
	const connectorPrevious = usePrevious(connector);
	useEffect(() => {
		if (
			visible &&
			((active && !activePrevious) ||
				(connector && connector !== connectorPrevious && !error))
		) {
			onClose();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active, error, connector, visible, activePrevious, connectorPrevious]);

	const tryActivation = async (connector) => {
		let conn = typeof connector === "function" ? await connector() : connector;

		Object.keys(SUPPORTED_WALLETS).map((key) => {
			if (connector === SUPPORTED_WALLETS[key].connector) {
				return SUPPORTED_WALLETS[key].name;
			}
			return true;
		});

		conn &&
			activate(conn, undefined, true).catch((error) => {
				if (error instanceof UnsupportedChainIdError) {
					activate(conn); // a little janky...can't use setError because the connector isn't set
				}
			});
	};

	const getOptions = () => {
		return Object.keys(SUPPORTED_WALLETS).map((key) => {
			const option = SUPPORTED_WALLETS[key];

			return (
				<Option
					onClick={() => {
						// eslint-disable-next-line no-unused-expressions
						option.connector === connector
							? null
							: tryActivation(option.connector);
					}}
					key={key}
					active={option.connector === connector}
					header={option.name}
					icon={option.icon}
				/>
			);
		});
	};

	const getModalContent = () => {
		if (error instanceof UnsupportedChainIdError) {
			return (
				<Box>
					<Text>
						Please connect to the{" "}
						{isMainnet ? "Polygon Mainnet" : "Rinkeby Network"}.
					</Text>
					<Button onClick={deactivate}>Disconnect</Button>
				</Box>
			);
		}
		return getOptions();
	};

	return (
		<Modal
			visible={visible}
			title={
				error instanceof UnsupportedChainIdError
					? "Wrong Network"
					: "Connect to a wallet"
			}
			onClose={onClose}
			small>
			{getModalContent()}
		</Modal>
	);
};

export default ConnectWalletModal;
