import React, { useState } from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Display the notification for 2 seconds
  };

  const email = "liliankariuki958@gmail.com"; // Your email address

  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 my-4">
          <div className="w-3/5 flex justify-center space-x-4">
            {/* Phone Icon */}
            <a href="tel:+254713600213" rel="noreferrer">
              <FaPhone style={{ color: "#0077B5" }} className="text-4xl" />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: "#0077B5" }} className="text-4xl" />
            </a>
            {/* Gmail Icon */}
            <CopyToClipboard text={email} onCopy={handleCopy}>
              <div className="relative">
                {copied && (
                  <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Email copied!
                  </div>
                )}
                <FaEnvelope
                  style={{ color: "#D14836" }}
                  className="text-4xl cursor-pointer"
                />
              </div>
            </CopyToClipboard>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/lily_kariuki"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram style={{ color: "#C13584" }} className="text-4xl" />
            </a>
          </div>
        </div>
        <p className="text-lg">Contact: 0713600213 or 0788857471</p>
        <p className="text-sm">&copy; {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
