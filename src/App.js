import { Navbar } from './components/index';
import {
  Landingpage,
  Helppage,
  Helpcreator,
  Helpdonor,
  Explorepage,
  User,
  Projectpage,
} from './pages/index';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/theme.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Submit from './pages/Submit/Submit';
import Donate from './pages/Donate/Donate';
import './App.css';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" style={{ overflow: 'hidden' }}>
            <Landingpage />
          </Route>
          <Route exact path="/help">
            <Helppage />
          </Route>
          <Route exact path="/submit">
            <Submit />
          </Route>

          <Route exact path="/donor">
            <Helpdonor />
          </Route>
          <Route exact path="/creator">
            <Helpcreator />
          </Route>
          <Route exact path="/explore">
            <Explorepage />
          </Route>
          <Route exact path="/campaign/:campaignId">
            <Projectpage />
          </Route>
          <Route exact path="/campaign/:campaignId/donate">
            <Donate />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </ChakraProvider>
    </Router>
  );
}

export default App;
