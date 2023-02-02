import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Youtube from "../assets/Youtube.png"
import Hotstar from "../assets/Hotstar.png"
import Quicksell from "../assets/Quicksell.png"

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [ 
    {
      img: Quicksell,
      name: "Quicksell(Olx-Clone)",
      github_link: "https://github.com/vermabraj/loving-train-3153/tree/main/olx-clone",
      live_link: "https://quicksell-by-brajverma1.netlify.app/",
    },
    {
      img: Youtube,
      name: "YouTube",
      github_link:
        "https://github.com/vermabraj/My-Projects/tree/main/My-Projects/Youtube",
      live_link: "https://sage-chaja-176d17.netlify.app/",
    },
    {
      img: Hotstar,
      name: "Hotstar",
      github_link: "https://github.com/vermabraj/My-Projects/tree/main/My-Projects/Hotstar",
      live_link: "https://spectacular-paprenjak-657ada.netlify.app/",
    },
  ];
  
  return (
    <section id="projects" className="py-10 text-white border-red">
      <div className="text-center border-black">
        <h3 className="text-4xl font-semibold border-black"> 
          My <span className="text-blue-400">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg mx-auto">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-5xl gap-6 px-5 mx-auto items-center relative"> 
        <div className="lg:w-2/3 w-full mx-auto">
          <Swiper
            slidesPeview={2}
            spaceBetween={20}
            breakpoints={{
              1068: {
                slidesPreView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-blue-400 rounded-xl ">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-2xl my-4 ">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-blue-400 bg-gray-800 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-blue-400 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>
    </section>
  );
};

export default Project;
