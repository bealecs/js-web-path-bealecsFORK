"use client";
import { useContext } from "react";
import ClifCodesStyles from "../Components/CSS_Modules/clifCodes.module.css";
import { ThemeContext } from "../store/CtxProvider";

export const ClifCodes = () => {
  const theme = useContext(ThemeContext);

  return (
    <section className={theme.body}>
      <div className={ClifCodesStyles.container}>
        <h2> Clif Codes Freelance Website </h2>
        <span className={ClifCodesStyles.technologiesUsed}>JavaScript, TypeScript, React, AWS Lambda, Tailwind CSS</span>
        <div className={ClifCodesStyles.anchors}>
          <a
            href="https://www.github.com/bealecs/clifcodes"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the Github Repo
          </a>
          <a
            href="https://clifcodes.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the site directly
          </a>
        </div>
        <div style={{margin:"1rem 0"}} className={ClifCodesStyles.forDesktopOnly}>
            <video src="/clifcodesvid.mp4" autoPlay loop controls style={{width:"1000px",margin:"1rem 0",borderRadius:"0.5rem"}}/>
            <aside style={{fontSize:"small", borderLeft:"3px solid orange",paddingLeft:"0.5rem"}}>A video showcasing the Clif Codes Freelance website</aside>
          </div>
        <article className={ClifCodesStyles.article}>
          <p>
            Programming, not just web development, has been a passion of mine
            since I was a child. I have been coding since my early teen years,
            however I have shifted my main focus since seperating from the
            military. My goal has been to become a web developer, which I have
            done an amazing job at, personally speaking.
          </p>
          <p>
            I received some advice from a mentor recently that I needed to stand
            out from the other applicants in my job search in order to get
            anywhere. This is when I felt the need for a shift. I love what I
            do, however I do not love the competetive nature of finding a job
            doing what I love. I feel that there is an unnecessary anxiety and
            hopelessness brought about with the overall competetiveness of the
            job market right now. With that being said, I figured it was time to
            take matters into my own hands.
          </p>
          <p>
            After completing several of my own projects, releasing a portfolio,
            and then creating a large scale, full-stack application ... I was
            still no closer to finding work than I was before. The difference,
            however, is that I am now stacked with all of these amazing skills
            that I have picked up and have been dying to show off. I am so
            excited to engage with clients, give consults, and be the boss of my
            own work environment. I have never taken on a challenge like this,
            and I am excited to see where this road leads me and my work in the
            future.
          </p>
          
        </article>
      </div>
    </section>
  );
};
