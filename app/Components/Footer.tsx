"use client"
import React, { useContext } from "react";
import FooterStyles from "./CSS_Modules/Footer.module.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { ThemeContext } from "../store/CtxProvider";

export const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className={theme.body === 'container_light' ? FooterStyles.footerSection : FooterStyles.footerSectionDark}>
      <div className={FooterStyles.logoDiv}>
          <h1 id="logotitle">
            <Link className={FooterStyles.logoTitle} href="/">
              <span className={FooterStyles.logoLetters}>C</span>lif{" "}
              <span className={FooterStyles.logoLetters}>C</span>odes
            </Link>
          </h1>
        </div>
      <div className={FooterStyles.socialLinks}>
        <SocialIcon
          className={FooterStyles.socialIcons}
          url="https://github.com/bealecs"
          bgColor="white"
        />
        <SocialIcon
          className={FooterStyles.socialIcons}
          url="https://www.linkedin.com/in/clif-beale/"
          bgColor="white"
        />
        <SocialIcon
            className={FooterStyles.socialIcons}
            rel="noopener noreferrer"
            url="https://dev.to/bealecs"
            bgColor="white"
          />
      </div>
    </section>
  );
};
