import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { IoCopyOutline } from "react-icons/io5";
function TelegramBotLink() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedLink = localStorage.getItem("telegramBotLink");

    if (savedLink) {
      // Use saved link if it exists in local storage
      setLink(savedLink);
      setLoading(false);
    } else {
      // Generate new link and save it if not found in local storage
      const generateLink = () => {
        const randomId = Math.floor(100000000 + Math.random() * 900000000); // 9-digit number
        const baseURL = "https://t.me/oxen_land_bot?startapp=command&mode=compact";
        const uniqueLink = `${baseURL}${randomId}`;
        setLink(uniqueLink);
        localStorage.setItem("telegramBotLink", uniqueLink); // Save to local storage
        setLoading(false);
      };
      generateLink();
    }
  }, []);

  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
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
