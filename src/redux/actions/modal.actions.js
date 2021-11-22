import ModalConstants from "../../constants/modal.constants";

const ModalActions = {
	showConnectWalletModal,
	hideConnectWalletModal,
};

function showConnectWalletModal() {
	return (dispatch) => {
		dispatch(_showConnectWalletModal());
	};
}

const _showConnectWalletModal = () => {
	return {
		type: ModalConstants.SHOW_CONNECT_WALLET_MODAL,
	};
};

function hideConnectWalletModal() {
	return (dispatch) => {
		dispatch(_hideConnectWalletModal());
	};
}

const _hideConnectWalletModal = () => {
	return {
		type: ModalConstants.HIDE_CONNECT_WALLET_MODAL,
	};
};

export default ModalActions;
