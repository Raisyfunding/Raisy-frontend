import { combineReducers } from "redux";

import { ConnectWallet } from "./connectwallet.reducers";
import { Modal } from "./modal.reducer";

const rootReducer = combineReducers({
	ConnectWallet,
	Modal,
});

export default rootReducer;
