"use client"
import { useContext } from "react";
import NextMealStyles from "../Components/CSS_Modules/NextMeal.module.css";
import { ThemeContext } from "../store/CtxProvider";

export const NextMeal = () => {

  const theme = useContext(ThemeContext);
  return (
    <section className={theme.body}>
      <div className={NextMealStyles.container}>
        <h2>Next Meal</h2>
        <span className={NextMealStyles.technologiesUsed}>JavaScript, TypeScript, React, PostgresQL, AWS Lambda</span>
        <div className={NextMealStyles.anchors}>
          <a
            href="https://www.github.com/bealecs/nextmeal"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the Github Repo
          </a>
          <a
            href="https://next-meal-cookbook.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the site directly
          </a>
        </div>
        <div style={{margin:"1rem 0"}} className={NextMealStyles.forDesktopOnly}>
            <video src="/nextmeal.mp4" autoPlay loop controls style={{width:"1000px",margin:"1rem 0",borderRadius:"0.5rem"}}/>
            <aside style={{fontSize:"small", borderLeft:"3px solid orange",paddingLeft:"0.5rem"}}>A video showcasing the Next Meal web application</aside>
          </div>
        <article className={NextMealStyles.article}>
          <p>
            This web app has been my most long-standing project I would say. It
            started with me when I began my journey with web development. From
            learning about API requests to setting up a backend equipped with a range of functionality, this site
            has some pretty cool features.
            <br />
            <br />
            Firstly, I utilized create-next-app@latest to get started with a fresh
            React/Next.js project. From there, I started creating some of the components for
            the UI layout, and then began fetching my data..
            <br />
            <br />
            For my meal data, I leveraged Spoonacular to fetch data for all
            different kinds of scenarios. I started out only generating random
            meals with the meal generator, but as my learnings expanded, so
            did the functionality of the app. 
            To set up user accounts, I have leveraged Supabase & Prisma ORM, as well as Next Auth for the authentication flow.
            <br />
            <br />
            Like many of my other projects, I was juggling multiple unfamiliar
            technologies, and learning as I went along the way. Setting up user accounts with Next Auth
            and learning about user sessions and access tokens was one of the main blockers I ran into, but I learned a lot in the process;
            overall it was definitely an enriching experience.
          </p>
          
        </article>
      </div>
    </section>
  );
};
