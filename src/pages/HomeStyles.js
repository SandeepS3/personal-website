const styles = {
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Beach.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    WebkitBackgroundSize: "cover",
    backgroundSize: "100% 275%",
    minHeight: "100vh",
    borderRadius: "1.25em",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "5vw",
    paddingTop: "65vh",
  },
  name: {
    fontFamily: "Acme",
    fontSize: "5.25rem",
    color: "white",
    marginBottom: "-1.75rem",
  },
  title: {
    fontFamily: "Actor",
    fontSize: "1.563rem",
    color: "white",
    borderBottom: "0.5vh solid #3C84AC",
    marginBottom: "1vh",
  },
};

const mediaStyles = {
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Beach4.png)`,
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center",
    // WebkitBackgroundSize: "cover",
    backgroundSize: "contain",
    minHeight: "100vh",
    // borderRadius: "1.25em",
    borderRadius: "50%", // Make the bottom of the image curved
    overflow: "hidden", // Ensure content doesn't overflow outside the curved border
    display: "flex",
    alignItems: "center", // Center the content vertically
    justifyContent: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "5vw",
    paddingTop: "65vh",
  },
  name: {
    fontFamily: "Acme",
    fontSize: "2.25rem",
    color: "white",
    // marginBottom: "1rem",
  },
  title: {
    fontFamily: "Actor",
    fontSize: "1rem",
    color: "white",
    borderBottom: "0.5vh solid #3C84AC",
    marginBottom: "1vh",
  },
};

const mergedStyles = window.matchMedia("(max-width: 600px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
