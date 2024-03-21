import React from "react";
import AboutStyles from "../Components/CSS_Modules/About.module.css";
import Image from "next/image";
import About from "./page";

export const AboutPage = () => {
  return (
    <div>
      <h2 className={AboutStyles.aboutTitle} id="aboutSection">
        About <span className={AboutStyles.name2}>Clif</span>
      </h2>
      <section className={AboutStyles.aboutContainer}>
        <div className={AboutStyles.aboutDiv}>
          <h3 className={AboutStyles.h3Header}>A look into the life...</h3>
          <p>
            <span className={AboutStyles.firstLetter}>C</span>oding has always
            been a passion of mine, at least since I was a teen; however, I did
            not start developing web applications until I got out of the Air
            Force. I started out programming a modded version of a popular
            MMORPG, which I then created a small community of players for. I was
            immediately hooked to the way that I could bring any idea to life
            with the right code. This spark of passion would go on to fuel my
            desire to become a programmer that has gotten me to where I am
            today.
            <br />
            <br />
            <span className={AboutStyles.firstLetter}>L</span>ife took a turn
            after high school, and I enlisted into the U.S. Air Force for four
            years as an F-16 Integrated Avionics maintainer. Immediately after
            my contract ended, I got to work learning what I needed to become a
            software developer. I started out learning online for the first year
            and a half, utilizing LinkedIn Learning, Coursera, and CodeCademy to
            complete learning achievements and earn certificates to prove the
            mastery of my skills.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>I</span>nitially, I felt
            lost venturing into the deep world of software development without a
            formal guide to hold my hand. It was just me looking to become the
            best I could be in my craft. I met Jerome on LinkedIn, the founder
            of a non-profit bootcamp -{" "}
            <a
              href="https://vetswhocode.io"
              target="_blank"
              rel="noopener noreffer"
              className={AboutStyles.vwcTag}
            >
              Vets Who Code
            </a>
            . With the help of Jerome over the course of about a year, I got an
            initial version of my portfolio completed, and learned a lot more
            about the practical approaches of being a software developer.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>F</span>inally, I was
            invited to complete a 6 month bootcamp cohort offered by Vets Who
            Code. In doing so, I was able to migrate my portfolio build from a
            static HTML site into a dynamic site using React.js, Next.js, and
            Node.js. This was a big improvement in my learnings, and motivated a
            lot of my work moving forward as I favored the React.js and Next.js
            combination. Since finalizing this portfolio, I have continuously
            iterated over it and changed several things. My work has continued
            over the years, and I have learned a lot more. All of my public work
            can be found on{" "}
            <a
              href="https://github.com/bealecs"
              target="_blank"
              rel="noopener noreffer"
              className={AboutStyles.vwcTag}
            >
              my GitHub
            </a>
            .
          </p>
          <br />
          <div className={AboutStyles.imageDiv}>
            <Image
              className={AboutStyles.aboutImg}
              width={500}
              height={500}
              src="/collage.webp"
              alt="collage of Clif, his wife Mari, and two dogs Nymeria and Max"
            />
            <aside className={AboutStyles.aside}>
              A collage of my wife, my puppies, and our home
            </aside>
          </div>
          <div className={AboutStyles.forMobile}>
            <Image width={100} height={100} src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-line.svg"} alt="icon for devicon website"/>
          </div>
          <p>
            <span className={AboutStyles.firstLetter}>C</span>ommitting time to
            family is a big priority of mine, especially with how busy I can
            become. My wife, Marisela, and I just had our first baby! Mateo,
            (our son), and our puppies mean more than anything to me. Most of my
            time is spent either with my wife and son, working, or honing my
            skills for web development.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>O</span>ne of the issues I
            have found with being so busy all of the time is that it is easy to
            burn out. Family time is crucial to relax and unwind; however, I
            find that when it is time to work, I need to constantly be engaged
            or I lose focus. I like to find problems in my every day life, and
            then try and find a viable solution in a manner that I can program.
            For example,{" "}
            <a className={AboutStyles.vwcTag} href="/Projects">
              Next Meal
            </a>{" "}
            was inspired from lack of inspiration - my wife and I could never
            decide what to eat for dinner.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>D</span>uring the years of
            building and learning, there was a lot of failure as well. As much
            as I loved the developer experience *potential* offered by Next.js
            v13, there was very limited documentation at the time (and even some
            kinks that needed to be worked out.) There were a lot of instances
            where I took much longer than I should have to find a solution, but
            it was very rewarding to do so. I was able to gain valuable
            troubleshooting skills, as well as the perserverance to find viable
            solutions. I have worked with numerous different technologies,
            including cutting-edge technology such as AI integration with the
            Vercel SDK. One bit of information that I have learned is that good
            documentation can be the key to success.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>E</span>ager to begin
            showing off my skills to the world, I began applying to jobs after I
            felt more than comfortable. While learning and building in public, I
            was also putting in upwards of 15-30 applications per day. After
            countless months, many iterations of my resume, and many more job
            applications - I was no further than when I started. I was seldom
            even able to get an initial interview - let alone a technical
            interview.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>S</span>eemingly out of
            options and almost ready to give up, I have shifted my efforts more
            towards myself and my own success. While I am still open to new
            opportunities, I have focused my energy more towards the freelance
            sector of work. I have already begun helping clients, and have loved
            the experience thus far. I am hoping that sometime in the future
            these skills will further translate into helping me obtain the right
            fitting position.
          </p>
          <h4 className={AboutStyles.h4Header}>A final word...</h4>
          <p>
            If you read this far, I would like to thank you first of all. I have
            put my everything into what I do, and I am very proud of how far I
            have come. Being a software developer is more than just a career to
            me, but a passion I have held since I was very young. I am so
            excited to see where my journey takes me in the years to come.
          </p>
          <br />
          <p>
            Please check out my freelance site if you are interested in working
            with me. I am currently open and looking for new opportunities.
          </p>
          <br />
          <a
            href="https://clifcodes.dev"
            target="_blank"
            rel="noopener noreffer"
            style={{
              border: "1px solid orange",
              width: "fit-content",
              margin: "0",
              padding: "0.4rem",
              borderRadius: "0.4rem",
              textDecoration: "none",
            }}
            className={AboutStyles.vwcTag}
          >
            Link to site: Clif Codes Freelance
          </a>
        </div>
      </section>
    </div>
  );
};
