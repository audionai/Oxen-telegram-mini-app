import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import '@fontsource/poppins'; // Defaults to weight 400
// import '@fontsource/noto-emoji'; // Import the Noto Emoji font
import '@fontsource/noto-emoji'; // Import the Noto Emoji font
import Footer from './components/Footer';
// import '@fontsource/noto-emoji'; // Import Noto Emoji font
// import '@fontsource/noto-emoji'; // Import Noto Emoji font
import { BrowserRouter } from 'react-router-dom';
// this manifest is used temporarily for development purposes
import React from 'react';
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
      <React.StrictMode>

        <BrowserRouter>
    <App />
    <Footer/>
        </BrowserRouter>
      </React.StrictMode>
  </TonConnectUIProvider>,
)