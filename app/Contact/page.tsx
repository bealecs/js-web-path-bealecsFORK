"use client";
import React, { useContext, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import ContactStyles from "../Components/CSS_Modules/Contact.module.css";
import { ContactContext } from "../store/ContactContext";
import ThemeContextProvider, { ThemeContext } from "../store/CtxProvider";

function genRandKey() {
  const num = Math.floor(Math.random() * 100000);
  return num;
}

const Contact = () => {
  const contact = useContext(ContactContext);
  const theme = useContext(ThemeContext);

  const [state, handleSubmit] = useForm("xbjnapnw");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <ThemeContextProvider>
      <div className={ContactStyles.mainDiv}>
        <section
          className={
            theme.body === "container_light"
              ? ContactStyles.contactContainer
              : ContactStyles.contactContainerDark
          }
          id="contactSection"
        >
          <button onClick={contact.clickHandle} className={ContactStyles.exit}>
            ← Exit
          </button>
          <h2 className={ContactStyles.contactTitle} id="aboutSection">
            Point of <span className={ContactStyles.name2}>Contact</span>
          </h2>
          <p className={ContactStyles.mainP}>
            If you are looking to get in touch, just leave your info below
          </p>
          <form onSubmit={handleSubmit} className={ContactStyles.contactForm}>
            <div className={ContactStyles.formDiv}>
              <label style={{display:"block"}} htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" style={{display:"block"}} required/>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label style={{display:"block"}} htmlFor="email">Message</label>
              <textarea id="message" name="message" style={{display:"block"}} required/>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </ThemeContextProvider>
  );
};

export default Contact;
