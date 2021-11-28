import { ethers } from "ethers";

export * from "./raisyCampaigns";

export const getSigner = async () => {
	await window.ethereum.enable();
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	return signer;
};
