import React, { useState } from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "liliankariuki958@gmail.com";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Display the notification for 2 seconds
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data:", formData);
  };

  return (
    <div className="bg-gray-100 p-4 text-center" id="contact-me">
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
      <p className="font-bold my-2 text-lg">Or</p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-2/3 bg-white p-4 rounded-lg shadow-md text-left"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
              className="appearance-none block w-full bg-white text-gray-700 border focus:border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="firstName"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="appearance-none block w-full bg-white text-gray-700 border focus:border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="lastName"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="appearance-none block w-full bg-white text-gray-700 border focus:border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ask anything "
              className="no-resize appearance-none block w-full bg-white text-gray-700 border focus:border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:items-center">
          <div className="md:w-full sm:w-full w-full mx-auto">
            <button
              className="shadow bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md w-full"
              type="submit"
            >
              Go for It
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
