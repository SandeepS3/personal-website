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
  pages: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    marginLeft: "1em",
    width: "100%",
  },
  pageItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "4em",
    cursor: "pointer",
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
    color: "black",
    fontSize: "1rem",
    marginBottom: "-0.8rem",
  },
};

const mergedStyles = window.matchMedia("(max-width: 600px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
