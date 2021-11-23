import { Navbar, Footer } from "./components/index";
import { Landingpage, Helppage, Helpcreator, Helpdonor, Explorepage } from "./pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/theme.css";
import { Screen } from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route exact path='/donor'>
              <Helpdonor />
          </Route>
          <Route exact path='/creator'>
              <Helpcreator />
          </Route>
          <Route exact path='/explore'>
              <Explorepage />
          </Route>
          </Switch>
        
       
      </ChakraProvider>
      </Router>
  );
}

export default App;
