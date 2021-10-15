import './App.css';
import {Navbar,Footer} from './components/index';
import { Landingpage } from './pages/index';
import { ChakraProvider } from '@chakra-ui/react';
import "./styles/theme.css"
import { Screen } from './styles/globalStyles';

function App() {
  return (
    <ChakraProvider>
      <Screen>
      <Navbar/>
      <Landingpage/>
      <Footer/>
      </Screen>
    </ChakraProvider>
  );
}

export default App;
