import { TonConnectButton } from '@tonconnect/ui-react'
// import React from 'react'
import '@/App.css';
// import { TonConnectButton } from '@tonconnect/ui-react';
import Header from '@/components/Header';
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
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
      <p>{totalPoints}OXEN</p>
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
      {/* </div> */}
      </div>
        <p>Tasks</p>
    {/* <Drawer> */}
    <Button variant="default" onClick={() => handleTaskClick('Watch YouTube Video', 'https://www.youtube.com')}>
          <IoLogoYoutube /> Go to YouTube
        </Button>
        {verifiedTasks['Watch YouTube Video'] && (
          <FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
        )}
    <Button variant="default" onClick={() => handleTaskClick('Join the chnnel', 'https:/t.me/oxen_land')}>
          <FaTelegram /> Go to YouTube
        </Button>
        {verifiedTasks['Watch YouTube Video'] && (
          <FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
        )}
    <Button variant="default" onClick={() => handleTaskClick('Watch YouTube Video', 'https://www.youtube.com')}>
          <FaXTwitter /> Go to YouTube
        </Button>
        {verifiedTasks['Watch YouTube Video'] && (
          <FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
        )}
         <h3>Completed Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
 
  </div>
  )
}