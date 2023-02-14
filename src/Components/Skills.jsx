import React from "react";
import { AiOutlineHtml5,AiFillGithub } from "react-icons/ai";
 import { IoLogoCss3,IoLogoJavascript,IoLogoNodejs } from 'react-icons/io';
 import { FaReact } from 'react-icons/fa';
 import { SiRedux,SiTypescript,SiVisualstudio,SiNetlify,SiChakraui,SiMongodb,SiTailwindcss } from 'react-icons/si';
 import { TbBrandNextjs,TbBrandVercel } from 'react-icons/tb';
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      logo: <AiOutlineHtml5/>,
      name:"HTML"
    
    },
    {
      logo: <IoLogoCss3/>,
      name:"CSS"
     
    },
    {
      logo: <IoLogoJavascript/>,
      name:"JavaScript"
     
    },
    {
      logo: <FaReact/>,
      name:"React"
     
    },
    {
      logo: <SiRedux/>,
      name:"Redux"
     
    },
    {
      logo: <SiTypescript/>,
      name:"Typescript"
     
    },
    {
      logo: <TbBrandNextjs/>,
      name:"Next.js"
     
    },
    {
      logo: <IoLogoNodejs/>,
      name:"Nodejs"
     
    },
    {
      logo: <SiMongodb/>,
      name:"MongoDB"
     
    },
    {
      logo: <SiChakraui/>,
      name:"Chakra-UI"
     
    },
    {
      logo: <SiTailwindcss/>,
      name:"Tailwind CSS"
     
    },
   
     {
      logo: <AiFillGithub/>,
      name:"Github"
     
    },
    {
      logo: <SiVisualstudio/>,
      name:"VS Code"
     
    },
    {
      logo: <TbBrandVercel/>,
      name:"Vercel"
     
    },
    {
      logo: <SiNetlify/>,
      name:"Netlify"
     
    },
   
  ];
  return (
    <section id="skills" className="py-10  relative">
      <div className="mt-8  text-center ">
      <div className="text-center">
      <h3 className="text-4xl font-semibold">
        My <span className="text-blue-400">skills</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
    </div>
        
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-blue-300 relative min-w-[10rem] max-w-[16rem]  p-2 rounded-xl shadow-xl shadow-blue-800"
            >
              <div
             
                className=" flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28   rounded-full flex items-center justify-center group-hover:text-blue-400">
                 {skill.logo}
                </div>
                
              </div>
              <b className="group-hover:text-blue-400">{skill.name}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
