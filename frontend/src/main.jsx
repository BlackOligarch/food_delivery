import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  
    
  <BrowserRouter>
    <StoreContextProvider>
    <ToastContainer/>
      <App />
    </StoreContextProvider>
  </BrowserRouter>

);
