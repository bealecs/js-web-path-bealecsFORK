"use client"
import React, { useState } from "react";
import ProjectsStyles from "../Components/CSS_Modules/Projects.module.css";
import Image from "next/image";
import { Chrome } from "../Chrome/Chrome";
import { NextMeal } from "../NextMeal/NextMeal";
import { ClifCodes } from "../ClifCodes/ClifCodes";

export const ProjectsPage = () => {

  const [currentProjectDisplay, setCurrentProjectDisplay] = useState("");
  
  const renderProject = () => {
    switch (currentProjectDisplay) {
      case "nextMeal":
        return <NextMeal />;
      case "clifCodes":
        return <ClifCodes />;
      case "chrome":
        return <Chrome />;
      default:
        return <NextMeal />;
    }
  };

  return (
    <div className={ProjectsStyles.projectsContainer}>
      <div className={ProjectsStyles.projectDisplay} style={{paddingTop:"10px"}}>{renderProject()}</div>
      <section className={ProjectsStyles.individualContainer} id="projects">
      <button className={ProjectsStyles.cardsSection} onClick={() => setCurrentProjectDisplay("nextMeal")}>
          <h4 className={ProjectsStyles.forDesktop}>Next Meal</h4>
            <span className={ProjectsStyles.forMobile}>🍔</span>
          <Image
            src="/banner.webp"
            alt="Logo for Next Meal website"
            width={200}
            height={170}
          />
        </button>
        <button className={ProjectsStyles.cardsSection} onClick={() => setCurrentProjectDisplay("clifCodes")}>
          <h4 className={ProjectsStyles.forDesktop}>Clif Codes</h4>
          <span className={ProjectsStyles.forMobile}>📈</span>
          <Image
            src="/clifcodes.png"
            alt="Screenshot of Clif Codes logo"
            width={200}
            height={170}
          />
        </button>
        <button className={ProjectsStyles.cardsSection} style={{marginBottom:"2rem"}} onClick={() => setCurrentProjectDisplay("chrome")}>
          <h4 className={ProjectsStyles.forDesktop}>Chrome Extension</h4>
          <span className={ProjectsStyles.forMobile}>🧩</span>
          <Image
            src="/chromeextension.jpg"
            alt="Logo for a chrome extension"
            width={200}
            height={170}
          />
        </button>
      </section>
    </div>
  );
};
