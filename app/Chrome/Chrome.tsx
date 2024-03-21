"use client";
import { useContext } from "react";
import ChromeStyles from "../Components/CSS_Modules/Chrome.module.css";
import { ThemeContext } from "../store/CtxProvider";

export const Chrome = () => {
  const theme = useContext(ThemeContext);

  return (
    <section className={theme.body}>
      <div className={ChromeStyles.container}>
        <h2>Custom Google Chrome Extension</h2>
        <div className={ChromeStyles.anchors}>
          <a
            href="https://dev.to/bealecs/chrome-extensions-1kmh"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out my blog post
          </a>
        </div>
        <article className={ChromeStyles.article}>
          <p>
            I have often thought about creating a custom Google Chrome
            extension, but I never got around to it.
          </p>
          <p>
            Some free time opened up for me recently, and I was inspired by a
            YouTube video to create an extension. I was blown away at the
            simplicity of it, and got to work on my own idea immediately.
            Thinking about a particular use case was probably the hardest part
            of creating the extension. I wanted to make something I would use
            often and save myself time with in the future.
          </p>
          <p>
            This is when the idea struck me, and I got to work. It took me a
            little under two hours, and I had a fully functional Google Chrome
            Extension. My extension allows me to, with the single click of my
            mouse, retrieve a real-time list of jobs from LinkedIn based on my
            predefined search parameters.
          </p>
          <div style={{margin:"1rem 0"}} className={ChromeStyles.forDesktopOnly}>
            <video src="/video.mp4" autoPlay loop controls style={{width:"1000px",margin:"1rem 0",borderRadius:"0.5rem"}}/>
            <aside  style={{fontSize:"small"}}>A video showcasing the custom Chrome Extension in action</aside>
          </div>
        </article>
      </div>
    </section>
  );
};
