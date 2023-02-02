import React from "react";
import heroImage from "../assets/images/heroImage.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white ">
      <div className="text-center mt-6 bg-slate-400">
        <h3 className="text-4xl font-semibold pt-4 ">
          About <span className="text-yellow-500">Me</span>
        </h3>
      
        <div className="flex md:flex-row flex-col-reverse mt-20  md:gap-6 gap-12 px-10 max-w-7xl mx-auto">
          <div >
            <div className="text-white my-5">
              <h1 className="text-justify  mx-auto fomt-xl text-xl ">
              Self-motivated, hard-working, and ambitious Web Developer with proficiency in React. Experienced at creating apps in collaborative as well as individual capacities with MERN stack and various web technologies including HTML CSS and JavaScript. Looking forward to kick-starting my career in the growing tech world.

              </h1>
              <div className="flex mt-5 items-center gap-7">
                
                  <div >
                  
                    <p className="md:text-2xl text-2xl font-semibold text-white">
                    
                      <span className="text-teal-700">Some of my intersets apart from coding:</span><br/>
                     
                    </p>
                    <span className=" text-white font-semibold  ">YouTube</span><br/>
                    <span className="text-white font-semibold ">Gym</span><br/>
                    <span className="text-white font-semibold ">Travelling</span><br/>
                  </div>
               
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 p-8  relative sm:w-10/12 w-11/12 max-w-sm  flex space-x-4 ">
            <img
            src={heroImage}
            alt=""
            className=" object-cover bg-white rounded-full ring ring-yellow-500 hover:ring-white bg-clip-border p-5  border-4 border-white "
          />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
