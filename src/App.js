import { Navbar, Footer } from "./components/index";
import { Landingpage, Helppage } from "./pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/theme.css";
import { Screen } from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Connection from "./pages/Connection/Connection";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Screen>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landingpage />
            </Route>
            <Route exact path="/help">
              <Helppage />
            </Route>
            <Route exact path="/connect">
              <Connection />
            </Route>
          </Switch>
        </Screen>
      </ChakraProvider>
    </Router>
  );
}

export default App;
