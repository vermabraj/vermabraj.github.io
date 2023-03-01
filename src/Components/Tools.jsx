import React from "react";
import { AiFillGithub } from "react-icons/ai";
 import { SiVisualstudio,SiNetlify, SiPostman } from 'react-icons/si';
 import { TbBrandVercel } from 'react-icons/tb'; 
import { BsSlack } from 'react-icons/bs'; 
import { DiGit } from "react-icons/di";


const Skills = () => {
  const skills = [
    {
      logo: <BsSlack />,
      name: "Netlify",
    },
    {
      logo: <SiVisualstudio />,
      name: "VS Code",
    },
    {
      logo: <AiFillGithub />,
      name: "Github",
    },
    {
      logo: <DiGit />,
      name: "Github",
    },
    {
      logo: <SiPostman />,
      name: "Postman",
    },
    {
      logo: <TbBrandVercel />,
      name: "Vercel",
    },
    {
      logo: <SiNetlify />,
      name: "Netlify",
    },
  ];
  return (
    <section id="tools" className="py-10  relative">
      <div className="mt-8  text-center ">
      <div className="text-center">
      <h3 className="text-4xl font-semibold">
        My <span className="text-blue-400">Tools</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">working on...</p>
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
