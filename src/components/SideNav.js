import React from "react";

export function SideNav() {
  const Github = `${process.env.PUBLIC_URL}/images/Github.png`;
  const Instagram = `${process.env.PUBLIC_URL}/images/Instagram.png`;
  const Linkedin = `${process.env.PUBLIC_URL}/images/Linkedin.png`;

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

  return (
    <div style={styles.sideNavStyle}>
      <h style={styles.name}>Sandeep Singh</h>
      <div style={styles.socials}>
        <img
          style={{ position: "relative", left: "50px", cursor: "pointer" }}
          src={Github}
          alt="Github"
          onClick={() => handleOpenWebsite("Github")}
        />
        <img
          style={{ position: "relative", left: "80px", cursor: "pointer" }}
          src={Instagram}
          alt="Instagram"
          onClick={() => handleOpenWebsite("Instagram")}
        />
        <img
          style={{ position: "relative", left: "130px", cursor: "pointer" }}
          src={Linkedin}
          alt="Linkedin"
          onClick={() => handleOpenWebsite("Linkedin")}
        />
      </div>
      <a
        href="/"
        style={styles.linkStyle}
        onMouseOver={() => {}}
        onMouseLeave={() => {}}
      >
        Home
      </a>
    </div>
  );
}

const styles = {
  sideNavStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "25vw",
    backgroundColor: "#646464",
    paddingTop: "5.5em",
  },

  linkStyle: {
    fontWeight: "bold",
    textAlign: "left",
    padding: "1em 0em 1em 1.875em",
    marginTop: "1.5em",
    marginBottom: "1.5em",
    textDecoration: "none",
    fontSize: "1rem",
    color: "white",
    display: "block",
  },
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: "2.8rem",
  },
  socials: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  hoverStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
};
