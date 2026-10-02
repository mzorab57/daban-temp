const fs = require('fs');

let content = fs.readFileSync('src/pages/ServicesPage.jsx', 'utf8');

const newSections = `const sections = [
    {
      id: 1,
      title: "01 Construction",
      description: "Turn-key construction contracts alongside infrastructure development and supply of building materials across Kurdistan and Iraq.",
      imageUrl: "/case/Trading.webp",
      reverse: false,
    },
    {
      id: 2,
      title: "02 Robot Trading",
      description: "Supply and distribution of advanced robotic technologies for diverse industries.",
      imageUrl: "/case/Robot.webp",
      reverse: true,
    },
    {
      id: 3,
      title: "03 Robotics",
      description: "Integration of robotics and automation systems for modern industrial and commercial operations.",
      imageUrl: "/case/Robot.webp",
      reverse: false,
    },
    {
      id: 4,
      title: "04 Drone Equipment",
      description: "Advanced aerial platforms for inspection, monitoring, and diverse industrial applications.",
      imageUrl: "/case/Firefighting.webp",
      reverse: true,
    },
    {
      id: 5,
      title: "05 Small Aircraft",
      description: "Specialized small aircraft solutions for logistics, survey, and transport missions.",
      imageUrl: "/case/Firefighting.webp",
      reverse: false,
    },
    {
      id: 6,
      title: "06 Firefighting Equipment",
      description: "Fire protection systems, equipment supply and safety solutions for industrial, commercial and public facilities.",
      imageUrl: "/case/Firefighting.webp",
      reverse: true,
    },
    {
      id: 7,
      title: "07 Security Solutions",
      description: "State-of-the-art security systems and barriers for public and private infrastructure.",
      imageUrl: "/case/Trading.webp",
      reverse: false,
    },
    {
      id: 8,
      title: "08 General Trading",
      description: "Comprehensive import, export, and supply network fulfilling diverse commercial needs.",
      imageUrl: "/case/Trading.webp",
      reverse: true,
    },
    {
      id: 9,
      title: "09 Dealerships",
      description: "Official dealerships representing major global brands and providing specialized local support.",
      imageUrl: "/case/Cooperations.jpeg",
      reverse: false,
    },
    {
      id: 10,
      title: "10 Government Partnerships",
      description: "Strategic cooperations and joint ventures with foreign and local partners to deliver large-scale infrastructure.",
      imageUrl: "/case/Cooperations.jpeg",
      reverse: true,
    },
  ];`;

content = content.replace(/const sections = \[\s*\{[\s\S]*?\}\s*\];/m, newSections);

// Replace "Four practices" texts
content = content.replace(/Four practices under one roof/g, 'Ten practices under one roof');
content = content.replace(/construction, firefighting, robotics and cooperations/g, 'Construction, Robot Trading, Robotics, Drone Equipment, Small Aircraft, Firefighting Equipment, Security Solutions, General Trading, Dealerships, and Government Partnerships');
content = content.replace(/Daban Holding operates through specialised divisions — construction, firefighting, robotics and cooperations — each with its own equipment, engineers and playbook./g, 'Daban Holding operates through specialized divisions — including Construction, Robot Trading, Robotics, Drone Equipment, Small Aircraft, Firefighting Equipment, Security Solutions, General Trading, Dealerships, and Government Partnerships — each with its own expertise and playbook.');

fs.writeFileSync('src/pages/ServicesPage.jsx', content);
