import React from "react";
import AboutStyles from "../Components/CSS_Modules/About.module.css";

export const AboutPage = () => {
  return (
    <div>
      <h2 className={AboutStyles.aboutTitle} id="aboutSection">
        About <span className={AboutStyles.name2}>Clif</span>
      </h2>
      <section className={AboutStyles.aboutContainer}>
        <div className={AboutStyles.aboutDiv}>
          <img
            className={AboutStyles.aboutImg}
            src="/collage.webp"
            alt="collage of Clif, his wife Mari, and two dogs Nymeria and Max"
          />
          <p>
            <span className={AboutStyles.firstLetter}>L</span>earning web
            development has been a passion of mine for over two years now,
            focusing more on the front-end, but also exploring other aspects.
            <br />
            <br />
            <span className={AboutStyles.firstLetter}>M</span>y goal is to
            improve each day and learn something new all while attempting to
            land a new job. With the help of{" "}
            <a
              className={AboutStyles.vwcTag}
              href="https://vetswhocode.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              #VetsWhoCode
            </a>
            , a veteran-led community that trains and supports transitioning
            veterans in the development field, I am working alongside leaders in
            the industry to help me grow and succeed. Be sure to check out my{" "}
            <a
              className={AboutStyles.vwcTag}
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              projects
            </a>{" "}
            to see a list of some of my work.
          </p>
          <br />
          <p>
            <span className={AboutStyles.firstLetter}>M</span>arisela (my wife),
            Mateo (our son), and my puppies mean more than anything to me. I
            have a very strong work ethic, and really put my all into what I am
            doing. Most of my time is spent either with my wife, working, or
            honing my skills for web development.
          </p>
        </div>
      </section>
      <div className={AboutStyles.break}></div>
      <section className={AboutStyles.cohortSection}>
        <h3>
          About <span className={AboutStyles.name2}>#VWC</span>
        </h3>
        <p>
          <span className={AboutStyles.firstLetter}>V</span>enturing into a
          journey as a web developer, I was completely on my own. Along the way,
          I found Vets Who Code and am so happy that I did. I have found
          friends, mentors, and opportunities through Vets Who Code - all the
          while building on my knowledge of web development.
          <br />
          <br />
          <span className={AboutStyles.firstLetter}>W</span>ith my cohort, we
          were all a part of the first online cohort for Vets Who Code.
          Throughout the program, I learned a lot about version control, working
          with others/asking for help, creating and consuming RESTful API data
          with NextJS/NodeJS/React/& TypeScript, and more.
          <br />
          <br />
          <span className={AboutStyles.firstLetter}>C</span>ompleting the cohort
          was a very rewarding experience. From styling my basic static
          portfolio page with HTML, CSS, and vanilla JS, to migrating now using
          Next.js/Node.js/React.js/& TypeScript. It was a bit bumpy along the
          way, but boy did I learn a lot. I cannot wait to apply what I have
          learned into the my future work and continue building on my skills.
          Please check out my{" "}
          <a
            className={AboutStyles.vwcTag}
            href="https://dev.to/bealecs"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog posts
          </a>{" "}
          to read some of my blogs in regards to the process.
        </p>
      </section>
    </div>
  );
};
