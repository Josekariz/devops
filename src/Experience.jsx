import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaMoneyBillAlt,
  FaCloud,
  FaCogs,
  FaDesktop,
} from "react-icons/fa";
import "./Experience.css"; // Create a CSS file for styling

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      {[
        {
          icon: <FaCode className="text-blue-500 inline-block text-4xl" />,
          title: "Programming Languages",
          description:
            "I possess expertise in a variety of programming languages, including Java, Python, C++, and JavaScript. 🚀 My foundation in coding principles enables me to craft clean, efficient, and maintainable code.",
        },
        {
          icon: <FaShieldAlt className="text-blue-500 inline-block text-4xl" />,
          title: "Networking and Security",
          description:
            "I grasp cloud networking concepts, encompassing virtual private clouds (VPCs), subnets, security groups, and the configuration of network connectivity. 🛡️ My proficiency extends to implementing cloud security best practices and enforcing appropriate security measures.",
        },
        {
          icon: (
            <FaMoneyBillAlt className="text-blue-500 inline-block text-4xl" />
          ),
          title: "Cloud Cost Management",
          description:
            "I possess a thorough understanding of cloud pricing models, employ cost optimization techniques, and utilize tools to effectively monitor and manage cloud expenditures. 💡",
        },
        {
          icon: <FaCloud className="text-blue-500 inline-block text-4xl" />,
          title: "Cloud Computing Platforms",
          description:
            "I am well-versed in cloud service providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). I navigate their offerings, infrastructure, and services with proficiency. 🌐",
        },
        {
          icon: <FaCogs className="text-blue-500 inline-block text-4xl" />,
          title: "Infrastructure as Code (IaC)",
          description:
            "I demonstrate proficiency in tools such as AWS CloudFormation, Azure Resource Manager, and Terraform. I leverage these tools to automate the provisioning and management of cloud resources through code. 💻",
        },
        {
          icon: <FaDesktop className="text-blue-500 inline-block text-4xl" />,
          title: "Navigate the AWS Console",
          description:
            "I effortlessly navigate the AWS management console, adeptly interacting with AWS services through the web-based interface. 🖥️",
        },
      ].map((item, index) => (
        <div key={index} className="mb-6">
          <div className="bg-white text-center p-4 rounded-lg shadow-md">
            {item.icon}
            <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
            <p className="text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
