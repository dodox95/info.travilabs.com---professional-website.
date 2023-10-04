import React, { useState } from "react";
import {
  FaHtml5,
  FaReact,
  FaRobot,
  FaMobile,
  FaEthereum,
  FaFileContract,
  FaImage,
} 
from "react-icons/fa";
import Image from 'next/image';



//  data
export const aboutData = [
  {
    title: 'Our Offer',
    info: [
      {
        icons: [<FaHtml5 key="html5-icon" />],
        title: 'Web Development, E-Commerce Stores, Websites',
        description: 'Crafting interactive digital experiences tailored to your audience.'
      },
      {
        icons: [<FaRobot key="robot-icon" />],
        title: 'Automation Processes, API and Bots',
        description: 'Optimizing workflows with cutting-edge automation.'
      },
      {
        icons: [<FaMobile key="mobile-icon" />],
        title: 'Mobile Apps',
        description: 'Developing sleek, user-friendly mobile apps for both platforms.'
      },
      {
        icons: [<FaEthereum key="ethereum-icon"/>],
        title: 'Web3 Apps',
        description: 'Delivering decentralized applications using Web3.'
      },
      {
        icons: [<FaFileContract key="filecontract-icon" />],
        title: 'Smart Contracts',
        description: 'Implementing secure smart contracts on the blockchain.'
      },
      {
        icons: [<FaImage key="image-icon" />],
        title: 'Graphic Design',
        description: 'Crafting compelling visual designs for your brand.'
      },
      {
        icons: [<FaReact key="react-icon" />],
        title: 'And More',
        description: 'Solutions tailored to your digital needs.'
      }
    ],
  },
  {
    title: 'Team',
    info: [
      {
        title: 'Dorian Szafranski',
        position: 'TRAVILABS CEO, FULLSTACK developer',
        img: '/odod1.png',
        link: 'https://www.linkedin.com/in/dorian-szafranski-4527a8180/',
      },
      {
        title: 'Patryk Szafranski',
        position: 'TRAVILABS CEO, Backend developer',
        img: '/patryk.jpg',
        link: 'https://www.linkedin.com/in/patryk-szafra%C5%84ski-b08623219/',
      },
    ],
},

{
  title: 'Portfolio',
  info: [
    {
      title: 'Github',
      link: 'https://github.com/travilabs'
    },
    {
      title: 'For Customers',
      link: '/work'
    },
  ]
}

,
{
  title: 'Content',
  info: [
    {
      title: 'Articles',
      link: '/articles'
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/@travilabs/'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/travilabs_/'
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/travilabs'
    },
  ],
},

];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2"
          >
            Explore <span className="text-accent">Travilabs</span> and learn about our capabilities.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            We pride ourselves on our commitment to excellence and our ability to adapt to the ever-evolving landscape of the technology industry. By staying current with the latest trends and techniques, we are able to provide our clients with the best possible solutions for their unique needs.
          </motion.p>
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            {/* Your counters code */}
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex}
                  className={`${
                    index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=> setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
  if (aboutData[index].title === 'Team') {
    return (
      <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 mb-4">
<Image 
    src={item.img} 
    alt={item.title} 
    width={128}  // You need to specify a width 
    height={128} // and a height
    className="rounded-full shadow-lg mb-4"
/>
        <div className="font-light text-center">{item.title}</div>
        <div className="text-xs text-white/70">{item.position}</div> {/* Dodane pole "position" */}
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-accent px-4 py-2 rounded-md text-white hover:bg-opacity-90 transition">
          CONNECT
        </a>
      </div>
    );
  } else if (aboutData[index].title === 'Our Offer') {
    return (
      <div key={itemIndex} className="flex flex-row flex-wrap gap-4 items-start text-white/60 mb-4 w-full p-2 border rounded"> 
        <div className="flex-shrink-0 flex flex-col gap-2 items-center">
          {item.icons?.map((icon, iconIndex) => (
            <div key={iconIndex} className="text-xl text-white mb-2">{icon}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          <div className="font-bold text-white mb-2 text-xs">{item.title}</div>
          <div className="font-light text-xs">{item.description}</div>
        </div>
      </div>
    );
  } else if (aboutData[index].title === 'Portfolio') {
    return (
      <div key={itemIndex} className="flex-1 flex flex-col gap-2 items-center text-white/60 mb-4">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-light text-center hover:text-accent transition">
          {item.title}
        </a>
      </div>
    );
  } else if (aboutData[index].title === 'Content') {
    return (
      <div key={itemIndex} className="flex-1 flex flex-col gap-2 items-center text-white/60 mb-4">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-light text-center hover:text-accent transition">
          {item.title}
        </a>
      </div>
    );
  } else {
    return (
      <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">{item.title}</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">{item.stage}</div>
      </div>
    );
  }
})}

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
