// import { TonConnectButton } from '@tonconnect/ui-react'
// import React from 'react'
import '@/App.css';
// import { TonConnectButton } from '@tonconnect/ui-react';
import Header from '@/components/Header';
// import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import { TonConnectButton } from '@tonconnect/ui-react';
export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [verifiedTasks, setVerifiedTasks] = useState<{ [key: string]: boolean }>({});
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('verifiedTasks') || '{}');
    const storedPoints = parseInt(localStorage.getItem('totalPoints') || '0', 10);
    setVerifiedTasks(storedTasks);
    setTotalPoints(storedPoints);
  }, []);

  function handleTaskClick(taskName: string, url: string) {
    if (!verifiedTasks[taskName]) {
      // Redirect to the URL
      window.open(url, '_blank');

      // Wait for 6 seconds before verifying the task
      setTimeout(() => {
        const updatedVerifiedTasks = { ...verifiedTasks, [taskName]: true };
        setVerifiedTasks(updatedVerifiedTasks);
        setTasks(prevTasks => [...prevTasks, taskName]);
        setTotalPoints(prevPoints => prevPoints + 1500); // Add points for verification

        // Update local storage
        localStorage.setItem('verifiedTasks', JSON.stringify(updatedVerifiedTasks));
        localStorage.setItem('totalPoints', (totalPoints + 1500).toString());
      }, 6000);
    }
  }

  return (
    <div className='Container'>





        
      <Header/>
    <div></div>

    <div className='oxens_'>
      <img src="./Group.jpg" alt="" />
      <p className='mainmain'>{totalPoints} <span className='spn'>OXEN</span></p>
      
      <TonConnectButton/>
      <div className='oxens_val'>
        {/* <div>
            <button>Rewards</button>
            <p>0</p>
        </div> */}
        <div>
            <button>Tasks</button>
            <p>0</p>
        </div>
        <div>
            <button>Invites</button>
            <p>0</p>
        </div>
      </div>
      {/* </div> */}
      </div>
        <p className='tasks_pp'>Tasks</p>
    {/* <Drawer> */}
    <Button className='maints' variant="default" onClick={() => handleTaskClick('Watch YouTube Video', 'https://www.youtube.com')}>
          <IoLogoYoutube className='logots' /> Go to YouTube
          <div></div>
        {verifiedTasks['Watch YouTube Video'] && (
          <FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
        )}
        </Button>
    <Button className='maints'  variant="default" onClick={() => handleTaskClick('Join the chnnel', 'https:/t.me/oxen_land')}>
          <FaTelegram className='logots' /> Go to YouTube
          <div></div>
        {verifiedTasks['Join the chnnel'] && (
          <FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
        )}
        </Button>
    <Button className='maints'  variant="default" onClick={() => handleTaskClick('on x post', 'https://www.x.com')}>
          <FaXTwitter className='logots' /> Go to YouTube
        <div></div>
        {verifiedTasks['on x post'] && (
          <FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
        )}
        </Button>
         <h3>Completed Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
 
  </div>
  )
}