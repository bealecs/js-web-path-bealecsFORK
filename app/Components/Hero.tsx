"use client"
import React, { useContext } from "react";
import HeroStyles from "./CSS_Modules/Hero.module.css";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "../store/CtxProvider";
import { ContactContext } from "../store/ContactContext";

export const HeroSection = () => {
  const theme = useContext(ThemeContext);
  const contact = useContext(ContactContext);
  return (
    <section className={theme.body === 'container_light' ? HeroStyles.landingSectionLight : HeroStyles.landingSectionDark} id="landingSection">
      <div>
        <Image
          height={355}
          width={400}
          loading="eager"
          src="/pfp.webp"
          className={HeroStyles.pfp}
          alt="Professional shot of Clif Beale with a transparent background"
        />
      </div>
      <div className={HeroStyles.landingInfo}>
        <h2 className={HeroStyles.name}>
          I'm <span className={HeroStyles.name2}>Clif</span>
        </h2>
        <h3 className={HeroStyles.typewriterText}>
          <span className={HeroStyles.typewriter}>
            U.S. Veteran ➡ Full Stack Web Developer
          </span>
          <span className={HeroStyles.typewriterCursor}></span>
        </h3>
        <button style={{color:"orange",backgroundColor:"transparent",border:"none",borderBottom:"2px solid transparent"}} className={HeroStyles.contactButton} onClick={contact.clickHandle}>Contact me</button>
        <div className={HeroStyles.iconsFlex}>
          <SocialIcon
            className={HeroStyles.socialIcons}
            rel="noopener noreferrer"
            url="https://github.com/bealecs"
            bgColor="white"
          />
          <SocialIcon
            className={HeroStyles.socialIcons}
            rel="noopener noreferrer"
            url="https://www.linkedin.com/in/clif-beale/"
            bgColor="white"
          />
          <SocialIcon
            className={HeroStyles.socialIcons}
            rel="noopener noreferrer"
            url="https://dev.to/bealecs"
            bgColor="white"
          />
        </div>
      </div>
    </section>
  );
};
