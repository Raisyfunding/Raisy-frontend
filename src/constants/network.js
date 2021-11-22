import { ChainId } from "@sushiswap/sdk";

export const NETWORK_LABEL = {
	[ChainId.MAINNET]: "Ethereum",
	[ChainId.RINKEBY]: "Rinkeby",
	[ChainId.ROPSTEN]: "Ropsten",
	[ChainId.GÖRLI]: "Görli",
	[ChainId.KOVAN]: "Kovan",
	[ChainId.FANTOM]: "Fantom",
	[ChainId.FANTOM_TESTNET]: "Fantom Testnet",
	[ChainId.MATIC]: "Matic",
	[ChainId.MATIC_TESTNET]: "Matic Testnet",
	[ChainId.XDAI]: "xDai",
	[ChainId.BSC]: "BSC",
	[ChainId.BSC_TESTNET]: "BSC Testnet",
	[ChainId.MOONBASE]: "Moonbase",
	[ChainId.AVALANCHE]: "Avalanche",
	[ChainId.FUJI]: "Fuji",
	[ChainId.HECO]: "HECO",
	[ChainId.HECO_TESTNET]: "HECO Testnet",
	[ChainId.HARMONY]: "Harmony",
	[ChainId.HARMONY_TESTNET]: "Harmony Testnet",
};

export const Contracts = {
	[ChainId.MATIC]: {
		raisyChef: "",
		raisyCampaigns: "", // Proxy Address
		raisyNFT: "",
		raisyPriceFeed: "",
		raisyToken: "",
		raisyTokenRegistry: "",
		raisyAddressRegistry: "",
	},
	[ChainId.MATIC_TESTNET]: {
		raisyChef: "",
		raisyCampaigns: "", // Proxy Address
		raisyNFT: "",
		raisyPriceFeed: "",
		raisyToken: "",
		raisyTokenRegistry: "",
		raisyAddressRegistry: "",
	},
};

export const EXPLORER_URL = {
	[ChainId.MATIC]: "https://polygonscan.com/",
	[ChainId.MATIC_TESTNET]: "https://mumbai.polygonscan.com/",
};

export const RPC_URL = {
	[ChainId.MATIC]:
		"https://polygon-mainnet.g.alchemy.com/v2/aPcjgj5fHH3dxdhQFiqsm4ROAKa8oTIt",
	[ChainId.MATIC_TESTNET]:
		"https://polygon-mumbai.g.alchemy.com/v2/inzj9DkLzLHU_ufVjmpOgjRamnhKGuTL",
};
