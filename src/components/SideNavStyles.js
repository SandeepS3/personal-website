const styles = {
  sideNavStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "25vw",
    backgroundColor: "#646464",
    paddingTop: "5.5em",
  },
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: "2.8rem",
    marginBottom: "-0.8rem",
  },
  socials: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: "3.8em",
    marginBottom: "5em",
  },
  insta: {
    marginRight: "4em",
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  github: {
    marginRight: "3em",
    cursor: "pointer",
    width: "4em",
    height: "4em",
  },
  linkedin: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  pages: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    width: "100%",
  },
  pageItem: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "4em",
    cursor: "pointer",
  },
  pageItemHover: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "4em",
    cursor: "pointer",
    backgroundColor: "#4A4A4A",
    transition: "color 0.3s ease, textDecoration 0.3s ease",
  },
  pageImage: {
    width: "2.5em",
    height: "2.5em",
    marginRight: "0.5em",
  },
  pagesText: {
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "1rem",
    color: "white",
  },
};

const mediaStyles = {
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: "1rem",
    marginBottom: "-0.8rem",
  },
  socials: {
    flexDirection: "column",
    alignSelf: "center",
    marginBottom: "5em",
  },
  insta: {
    // marginRight: "2em",
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  github: {
    // marginRight: "1em",
    cursor: "pointer",
    width: "4em",
    height: "4em",
  },
  linkedin: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  pages: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    // marginLeft: "1em",
    width: "100%",
  },
  pageItem: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "4em",
    cursor: "pointer",
    flexDirection: "column",
  },
  pageItemHover: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "4em",
    cursor: "pointer",
  },
};

const mergedStyles = window.matchMedia("(max-width: 600px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
