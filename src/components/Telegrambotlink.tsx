import { useState, useEffect } from "react";
// import React from 'react'
// import { FaCopy } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoCopyOutline } from "react-icons/io5";
function TelegramBotLink() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Generate a 9-digit unique identifier
  useEffect(() => {
    const generateLink = () => {
      const randomId = Math.floor(100000000 + Math.random() * 900000000); // generates a 9-digit number
      const baseURL = "https://t.me/botusername?startapp=command&mode=compact";
      const uniqueLink = `${baseURL}${randomId}`;
      setLink(uniqueLink);
      setLoading(false); // turn off loading once link is generated
    };
    generateLink();
  }, []);

  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset copied status after 2 seconds
    });
  };

  return (
    //   <div>
          <div className="copy">
      {loading ? (
          <div>Loading...</div> // Display a loading icon or text here
      ) : (
        //   <div>
            <div className="copy">
          {/* <p>Your Unique Link:</p> */}
          {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
            <p>
              {link}
              </p>
          {/* </a> */}
      <Button onClick={copyToClipboard}>
          {/* <FaCopy/> */}
          <IoCopyOutline/>
      </Button>
      
          {copied && ""}
        </div>
      )}
      {/* <p>https://www.t.me/oxen_land/</p> */}

      {/* </div> */}
    </div>
  );
}

export default TelegramBotLink;
