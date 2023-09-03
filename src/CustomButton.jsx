import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children }) => {
  return <button className="glow-on-hover my-4">{children}</button>;
};

export default CustomButton;
