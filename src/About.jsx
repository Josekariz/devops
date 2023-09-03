import React from 'react';
import { AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

function About() {
  return (
    <div className="w-full bg-gray-100 p-1" id='about-me'>
      <div className="container mx-auto p-4">
        <div className="max-w-xlg mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">About Lilian Nyambura Kariuki</h2>
          <p className="text-lg leading-relaxed mb-4">
            I am a Sysops/DevOps engineer, Cloud Architect, and Database Manager. I'm passionate about
            solving complex problems and thrive on challenges that others may find daunting. My expertise
            lies in cloud infrastructure, system operations, and managing databases to ensure seamless
            business operations. With years of experience in the industry, I have successfully tackled a
            wide range of technical challenges and implemented solutions that drive efficiency and
            innovation.
          </p>
          <div className="mb-4 flex items-center space-x-4">
            <a
              href="https://www.instagram.com/lily_kariuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <AiOutlineInstagram size={24} />
            </a>
           
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-900"
            >
              <AiOutlineLinkedin size={24} />
            </a>
          </div>
          <p className="text-lg">
            Feel free to reach out to me at:
            <br />
            <a href="#" className="text-blue-600 hover:text-blue-800">
              liliankariuki958@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
