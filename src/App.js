import { Navbar, Footer } from "./components/index";
import {
	Landingpage,
	Helppage,
	Helpcreator,
	Helpdonor,
	Explorepage,
	Projectpage,
} from "./pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Submit from "./pages/Submit/Submit";
import { PROJECTS } from "./Projects";

function App() {
	return (
		<Router>
			<ChakraProvider>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Landingpage />
					</Route>
					<Route exact path='/help'>
						<Helppage />
					</Route>
					<Route exact path='/submit'>
						<Submit />
					</Route>

					<Route exact path='/donor'>
						<Helpdonor />
					</Route>
					<Route exact path='/creator'>
						<Helpcreator />
					</Route>
					<Route exact path='/explore'>
						<Explorepage />
					</Route>
					{PROJECTS.map((project) => (
						<Route exact path={project.url} key={project}>
							<Projectpage currentProject={project} />
						</Route>
					))}
				</Switch>
				<Footer />
			</ChakraProvider>
		</Router>
	);
}

export default App;
