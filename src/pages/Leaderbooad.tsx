// import React from 'react'
import { useEffect } from 'react'
export default function Leaderbooad() {
    useEffect(() => {
        // Check if the Telegram WebApp object is available
        if (window.Telegram?.WebApp) {
          const tg = window.Telegram.WebApp;
      
          // Initialize the Telegram Web App
          tg.ready();
          tg.BackButton.show();
      
          // Set a custom header
        //   tg.expand();
        //   tg.MainButton.setText('Custom Header');
        //   tg.MainButton.show();
        //   tg.setHeaderColor('red'); // Use 'bg_color' or a hex code like '#ffffff'
      
          // Example: Button click handling
          tg.MainButton.onClick(() => {
            alert('Main button clicked!');
          });
        }
      }, []);
  return (
    <div>Leaderbooad</div>
  )
}
