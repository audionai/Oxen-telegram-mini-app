import './App.css';
// import { TonConnectButton } from '@tonconnect/ui-react';
// import { useTonConnect } from './hooks/useTonConnect.ts';
// import { useCounterContract } from './hooks/useCounterContract';
// import Header from './components/Header.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Leaderboard from './pages/Leaderbooad.tsx';
import Friends from './pages/Friends.tsx';
import Airdrop from './pages/Airdrop.tsx';
import { useEffect } from 'react';
import Analytics from './Analytics';
function App() {
  useEffect(() => {
    // Check if the Telegram WebApp object is available
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
  
      // Initialize the Telegram Web App
      tg.ready();
  
      // Set a custom header
      tg.expand();
      tg.MainButton.setText('Custom Header');
      tg.MainButton.show();
      tg.setHeaderColor('red'); // Use 'bg_color' or a hex code like '#ffffff'
  
      // Example: Button click handling
      tg.MainButton.onClick(() => {
        alert('Main button clicked!');
      });
    }
  }, []);
  // const { connected } = useTonConnect();
  // const { value, address, sendIncrement } = useCounterContract();

  return (
<>
    <Analytics />
    <div className='App'>
      <Routes>
        <Route path="/tma/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/friend" element={<Friends />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </Routes>

    </div>
    </>,
  document.getElementById("root")
  );
}

export default App