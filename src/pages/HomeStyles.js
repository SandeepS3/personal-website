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
  },
};

const mediaStyles = {
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/MobileBeach.png)`,
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
    // alignItems: "center",
    alignItems: "flex-start",
    paddingLeft: "5vw",
    paddingTop: "65vh",
  },
  name: {
    fontFamily: "Acme",
    fontSize: "2.25rem",
    color: "white",
    marginBottom: "1rem",
  },
  title: {
    fontFamily: "Actor",
    fontSize: "1rem",
    color: "white",
  },
};

const mergedStyles = window.matchMedia("(max-width: 600px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
