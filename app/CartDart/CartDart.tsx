"use client";
import { useContext } from "react";
import { ThemeContext } from "../store/CtxProvider";
import CartDartStyles from "../Components/CSS_Modules/CartDart.module.css";

export const CartDart = () => {
  const theme = useContext(ThemeContext);

  return (
    <section className={theme.body}>
      <div className={CartDartStyles.container}>
        <h2>Cart Dart</h2>
        <span className={CartDartStyles.technologiesUsed}>
          JavaScript, TypeScript, React, AWS Lambda, AWS SES, PostgresQL, AWS
          S3, AWS API Gateway, AWS IAM, Google Maps
        </span>
        <div className={CartDartStyles.anchors}>
          <a
            href="https://www.github.com/bealecs/CartDart"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the Github Repo
          </a>
          <a
            href="https://cart-dart.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the site directly
          </a>
        </div>
        <h4>
          Cart Dart Mission Statement: Make finding local food vendors
          effortless.
        </h4>
        {/* <div
          style={{ margin: "1rem 0" }}
          className={CartDartStyles.forDesktopOnly}
        >
          <video
            src="/"
            autoPlay
            loop
            controls
            style={{
              width: "1000px",
              margin: "1rem 0",
              borderRadius: "0.5rem",
            }}
          />
          <aside
            style={{
              fontSize: "small",
              borderLeft: "3px solid orange",
              paddingLeft: "0.5rem",
            }}
          >
            A video showcasing the Cart Dart website in action
          </aside>
        </div> */} {/* Commenting this part out until I get a good video*/}
        <article className={CartDartStyles.article}>
          <p>
            Picture this: you are in a new city, touring the town, when you
            decide to start looking for some good street food for lunch. You are
            really craving some good tacos, but there are no taco trucks in
            sight! Enter Cart Dart...
          </p>
          <p>
            With the help of Cart Dart, users can easily see local food vendors
            & their locations. Even if you are looking for something specific,
            simply search food vendors by either city, cuisine type, or the name
            of the vendor.
          </p>
          <p>
            Users are also able to save their favorite vendor's profiles to
            their account for easy access later. Cart Dart is especially useful
            to vendors that are often on the move. Forget those facebook
            announcements, this isn't 2012...{" "}
            <span style={{ fontWeight: "bolder", fontStyle: "oblique" }}>
              Use Cart Dart.
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};
