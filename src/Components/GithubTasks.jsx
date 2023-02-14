import React from "react";
import GitHubCalendar from 'react-github-calendar';

const GithubTasks = () => {
  return (
    <section id="githubTasks" className="py-10 px-3 ">
      <div className="text-center mb-10 mt-20">
        <h3 className="text-4xl font-semibold">
          Github <span className="text-blue-400">Submissions</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-blue-400 relative px-8 rounded-2xl py-12 lg:max-w-6xl mx-auto min-h-[24rem]  ">
      
      <GitHubCalendar username="vermabraj"  blockMargin={4} year={"last"} dateFormat={"d, MMM,yyyy"} showWeekdayLabels={true} style={{margin:"auto"}}/>
      
        
      
      <div className="   lg:max-w-6xl  min-h-[20rem]  flex gap-6 lg:flex-row flex-col-reverse items-center">
      
      <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=vermabraj&show_icons=true&locale=en&layout=compact" alt="vermabraj" /></p>

      <p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=vermabraj&show_icons=true&locale=en" alt="vermabraj" /></p>
      
      <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=vermabraj&" alt="vermabraj" /></p>
      </div>
      </div>
    </section>
  );
};

export default GithubTasks;
