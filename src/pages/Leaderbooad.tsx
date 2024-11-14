// import React from 'react'
import './main.css'
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
          tg.expand();
          tg.MainButton.setText('Custom Header');
          tg.MainButton.show();
          tg.setHeaderColor('red'); // Use 'bg_color' or a hex code like '#ffffff'
      
          // Example: Button click handling
          tg.MainButton.onClick(() => {
            alert('Main button clicked!');
          });
          window.Telegram.WebApp.setHeaderColor("#FF5733"); // Example: Red color
        }
      }, []);
  return (
    <main className='leader'>
      <p className='inv'>LeaderBoard</p>
      <h6>this leder bord table is displaay in dec</h6>
      {/* <div className='leader_me'>
        <div>
          <img src="./Group.jpg" alt=""  />
          </div>
        <div>
          <p className='tag '>#9</p>
        <p className='name'>Mikiyas Zenebe</p></div> */}
      {/* </div> */}
        <div className='leader_list '>
          {/* <p className=''>Top list</p> */}
          {/* <div className='leader_li'>
            <div className='m_l'>
              <img src="./Group.jpg" alt="" />
            <div className='ml'>
              <p className='tag'>#1</p>
              <p className='name'>Mikiyas Zenebe</p>
            </div>
            </div>

          </div> */}
          <p className='mll'>Soon</p>
      </div>
    </main>
    // <div>Leaderbooad</div>
  )
}
