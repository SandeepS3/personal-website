import React from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { styles } from "./SideNavStyles";

export function SideNav() {
  const Github = `${process.env.PUBLIC_URL}/images/Github.png`;
  const Instagram = `${process.env.PUBLIC_URL}/images/Instagram.png`;
  const Linkedin = `${process.env.PUBLIC_URL}/images/Linkedin.png`;
  const Home = `${process.env.PUBLIC_URL}/images/Home.png`;
  const About = `${process.env.PUBLIC_URL}/images/About.png`;
  const Experience = `${process.env.PUBLIC_URL}/images/Experience.png`;
  const Projects = `${process.env.PUBLIC_URL}/images/Projects.png`;

  const Navigate = useNavigate();

  const handleOpenWebsite = (social) => {
    let websiteURL = "";
    if (social === "Github") {
      websiteURL = "https://github.com/SandeepS3";
    } else if (social === "Instagram") {
      websiteURL = "https://www.instagram.com/sandeeps3_/";
    } else if (social === "Linkedin") {
      websiteURL = "https://www.linkedin.com/in/sandeep-singh-00a903200/";
    } else {
      return;
    }
    window.open(websiteURL, "_blank");
  };
  const handlePageIconClick = (page) => {
    if (page === "Home") {
      Navigate("/");
    } else if (page === "About") {
      Navigate("/about");
    } else if (page === "Experience") {
      Navigate("/experience");
    } else if (page === "Projects") {
      Navigate("/projects");
    } else {
      return;
    }
  };

  return (
    <div style={styles.sideNavStyle}>
      <h style={styles.name}>Sandeep Singh</h>
      <div style={styles.socials}>
        <img
          style={{
            marginRight: "3em",
            cursor: "pointer",
            width: "4em",
            height: "4em",
          }}
          src={Github}
          alt="Github"
          onClick={() => handleOpenWebsite("Github")}
        />
        <img
          style={{
            marginRight: "4em",
            cursor: "pointer",
            width: "2.5em",
            height: "2.5em",
          }}
          src={Instagram}
          alt="Instagram"
          onClick={() => handleOpenWebsite("Instagram")}
        />
        <img
          style={{ cursor: "pointer", width: "2.5em", height: "2.5em" }}
          src={Linkedin}
          alt="Linkedin"
          onClick={() => handleOpenWebsite("Linkedin")}
        />
      </div>
      <div style={styles.pages}>
        <div style={styles.pageItem}>
          <img
            style={styles.pageImage}
            src={Home}
            alt="Home"
            onClick={() => handlePageIconClick("Home")}
          />
          <a style={styles.pagesText} href="/">
            Home
          </a>
        </div>
        <div style={styles.pageItem}>
          <img
            style={styles.pageImage}
            src={About}
            alt="About"
            onClick={() => handlePageIconClick("About")}
          />
          <a style={styles.pagesText} href="/about">
            About
          </a>
        </div>
        <div style={styles.pageItem}>
          <img
            style={styles.pageImage}
            src={Experience}
            alt="Experience"
            onClick={() => handlePageIconClick("Experience")}
          />
          <a style={styles.pagesText} href="/experience">
            Experience
          </a>
        </div>
        <div style={styles.pageItem}>
          <img
            style={styles.pageImage}
            src={Projects}
            alt="Projects"
            onClick={() => handlePageIconClick("Projects")}
          />
          <a style={styles.pagesText} href="/projects">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
