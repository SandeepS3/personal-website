const styles = {
  sideNavStyle: {
    display: "flex",
    flexDirection: "column",
    width: "25vw",
    // backgroundColor: "#646464",
    paddingTop: "5.5em",
  },
  namesocial: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    alignItems: "center",
    // fontWeight: "bold",
    color: "white",
    fontSize: "5.5vh",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    marginBottom: "4vh",
    padding: "4vh 1vw",
  },
  insta: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  github: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
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
    marginBottom: "10vh",
    cursor: "pointer",
  },
  pageItemHover: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "10vh",
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
    fontFamily: "Genos",
    // fontWeight: "bold",
    textDecoration: "none",
    fontSize: "2.5vh",
    color: "white",
  },
};

const mediaStyles = {
  sideNavStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    width: "100%",
    // backgroundColor: "#646464",
    // paddingTop: "5.5em",
  },
  namesocial: {
    display: "flex",
    flexDirection: "row",
    padding: "3vh 3vw",
    backgroundColor: "blue",
  },
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: "1.5rem",
    marginRight: "1vw",
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginRight: "0.5vw",
  },
  insta: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
  },
  github: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
  },
  linkedin: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
  },
  pages: {
    display: "flex",
    flexDirection: "row",
    // alignSelf: "center",
    justifyContent: "space-evenly",
    // alignItems: "center",
    width: "80%",
    backgroundColor: "red",
  },
  pageItem: {
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "row",
  },
  pageItemHover: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginRight: "3em",
    cursor: "pointer",
    flexDirection: "column",
  },
  pageImage: {
    width: "1.5em",
    height: "1.5em",
    marginRight: "0.5em",
  },
  pagesText: {
    fontFamily: "Genos",
    // fontWeight: "bold",
    textDecoration: "none",
    fontSize: "1.5vh",
    color: "white",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
