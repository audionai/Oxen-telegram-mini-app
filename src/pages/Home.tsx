import { TonConnectButton } from '@tonconnect/ui-react'
// import React from 'react'
import '@/App.css';
// import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '@/hooks/useTonConnect.ts';
import { useCounterContract } from '@/hooks/useCounterContract';
import Header from '@/components/Header';
export default function Home() {
    const { connected } = useTonConnect();
    const { value, address, sendIncrement } = useCounterContract();
  
  return (
    <div className='Container'>





        
      <Header/>
    <div></div>

    <div className='oxens_'>
      <img src="./Group.jpg" alt="" />
      <p>0 OXEN</p>
      <div className='oxens_val'>
        <div>
            <button>Rewards</button>
            <p>0</p>
        </div>
        <div>
            <button>Tasks</button>
            <p>0</p>
        </div>
        <div>
            <button>Invites</button>
            <p>0</p>
        </div>
      </div>
    </div>
    
    <TonConnectButton />

    {/* <div className='Card'>
      <b>Counter Address</b>
      <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
    </div> */}

    {/* <div className='Card'>
      <b>Counter Value</b>
      <div>{value ?? 'Loading...'}</div>
    </div>

    <a
      className={`Button ${connected ? 'Active' : 'Disabled'}`}
      onClick={() => {
        sendIncrement();
      }}
    >
      Increment
    </a> */}
  </div>
  )
}
