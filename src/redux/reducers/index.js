import { combineReducers } from "redux";

import { ConnectWallet } from "./connectwallet.reducers";
import { Modal } from "./modal.reducer";
import { Auth } from "./auth.reducers";
import { Campaigns } from "./campaigns.reducers";

const rootReducer = combineReducers({
	Auth,
	ConnectWallet,
	Modal,
	Campaigns,
});

export default rootReducer;
