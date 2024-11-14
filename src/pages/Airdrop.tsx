import { useEffect, useState } from "react";
// import React from 'react'

// import { TonConnectButton } from '@tonconnect/ui-react';
// import { useTonConnect } from '@/hooks/useTonConnect.ts';
// import { useCounterContract } from '@/hooks/useCounterContract';
export default function Airdrop() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if the Telegram Web App object is available
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      // Retrieve the user's real Telegram username
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      if (user) {
        setUsername(user.username || `${user.first_name} ${user.last_name}`);
      }
    }
  }, []);

  return (
    <div className='lmlm'>
        {/* Airdrop */}
        
        {/* <TonConnectButton/> */}
        <div className='pp'>G</div>
        <p>{username ? username : "Guest"}</p>
        {/* <p>Task Completed  <code>-</code></p> */}
        {/* <p>Invites <code>-</code></p> */}
        <div className="leader_list">

        <p className='mll'>Soon</p>
        </div>
        </div>
  )
}
