import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/stores/mainStore";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { NetworkContextName } from "./constants";
import Web3ReactManager from "./components/Web3ReactManager";
import getLibrary from "./utils/getLibrary";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

ReactDOM.render(
	<Provider store={store}>
		<Web3ReactProvider getLibrary={getLibrary}>
			<Web3ProviderNetwork getLibrary={getLibrary}>
				<Web3ReactManager>
					<App fullscreen />
				</Web3ReactManager>
			</Web3ProviderNetwork>
		</Web3ReactProvider>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
