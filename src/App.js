import './App.css';
import WithSubnavigation from './components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
          
      <WithSubnavigation/>
      <Footer/>
    
    </div>
    </ChakraProvider>
  );
}

export default App;
