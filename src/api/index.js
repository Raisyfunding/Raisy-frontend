import { ChainId } from "@sushiswap/sdk";
import axios from "axios";
import { EXPLORER_URL } from "../constants/network";

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === "MAINNET";

export const useApi = () => {
	const explorerUrl =
		EXPLORER_URL[isMainnet ? ChainId.MATIC : ChainId.MATIC_TESTNET];

	const apiUrl = isMainnet
		? "https://api.raisyfunding.com"
		: "https://raisy-api.herokuapp.com";

	const getNonce = async (address, authToken) => {
		const res = await axios({
			method: "get",
			url: `${apiUrl}/account/nonce/${address}`,
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});
		return res.data;
	};

	const getAuthToken = async (address) => {
		let result = await axios({
			method: "post",
			url: `${apiUrl}/auth/getToken`,
			data: JSON.stringify({ address: address }),
			headers: { "Content-Type": "application/json" },
		});
		if (result.data.status == "success") {
			let token = result.data.token;
			return token;
		}
		return null;
	};

	const getAccountDetails = async (authToken) => {
		const res = await axios({
			method: "get",
			url: `${apiUrl}/account/getaccountinfo`,
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});

		return res.data;
	};

	return { getNonce, getAuthToken, getAccountDetails };
};
