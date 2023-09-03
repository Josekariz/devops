import React, { useEffect, useState } from "react";
import {
  FaJava,
  FaPython,
  FaDatabase,
  FaCloud,
  FaServer,
  FaLock,
  FaMoneyBillAlt,
  FaChartBar,
} from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const [animated, setAnimated] = useState(false);

  // Define the skills data
  const skillsData = [
    {
      name: "Java",
      percentage: 95,
      icon: <FaJava size={48} color="#007BFF" />,
    },
    {
      name: "Python",
      percentage: 95,
      icon: <FaPython size={48} color="#F7B05B" />,
    },
    {
      name: "DB Management",
      percentage: 95,
      icon: <FaDatabase size={48} color="#17A2B8" />,
    },
    {
      name: "Cloud Computing",
      percentage: 90,
      icon: <FaCloud size={48} color="#61DAFB" />,
    },
    {
      name: "Infrastructure as Code",
      percentage: 90,
      icon: <FaServer size={48} color="#6F42C1" />,
    },
    {
      name: "Networking Security",
      percentage: 90,
      icon: <FaLock size={48} color="#28A745" />,
    },
    {
      name: "Cloud Cost Management",
      percentage: 90,
      icon: <FaMoneyBillAlt size={48} color="#FFC107" />,
    },
    {
      name: "Scalability and Performance",
      percentage: 90,
      icon: <FaChartBar size={48} color="#DC3545" />,
    },
  ];

  useEffect(() => {
    // Add an animation class after a delay to trigger the animation
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-10 bg-gray-100" id="skills">
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skillsData.map((skill, index) => (
            <div key={index} className={`bg-white p-4 rounded-lg shadow-md`}>
              {skill.icon}
              <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
              <div className="flex items-center mt-2">
                {/* Add the percentage bar with animation */}
                <div className="percentage-container">
                  <div
                    className={`percentage-bar ${
                      animated ? "animate-percentage" : ""
                    } percentage-bar-${skill.percentage}`}
                  >
                    <span className="percentage-text">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
