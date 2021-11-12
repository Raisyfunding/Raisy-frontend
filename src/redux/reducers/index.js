import { combineReducers } from "redux";

import { ConnectWallet } from "./connectwallet.reducers";

const rootReducer = combineReducers({
	ConnectWallet,
});

export default rootReducer;
