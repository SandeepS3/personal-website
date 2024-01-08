const styles = {
  container: {
    display: "flex",
    backgroundColor: "#4A4A4A",
    flexDirection: "column",
    borderRadius: "1.25em",
    height: "100%",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "row",
    padding: "5vh 6vw",
    justifyContent: "space-between",
  },
  contactText: {
    color: "white",
    fontSize: "3vh",
    fontFamily: "Korona One",
    textShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7)",
  },
  aboutMe: {
    display: "flex",
  },
  leftHalf: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  rightHalf: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  aboutText: {
    color: "black",
    fontFamily: "Regular",
    fontSize: "4vh",
    padding: "3vh",
    margin: "2vw",
    textShadow: "0.125rem 0.125rem 0.25rem rgba(255, 255, 255, 0.8)",
    backgroundColor: "#646464",
    borderRadius: "1.25em",
  },
  imageBox: {
    padding: "1vh",
    backgroundColor: "#646464",
    borderRadius: "1.25em",
  },
  image: {
    width: "25vw",
    height: "75vh",
    borderRadius: "1.25em",
  },
};

const mediaStyles = {
  contactText: {
    color: "white",
    fontSize: "2.5vh",
    fontFamily: "Korona One",
    textShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7)",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    padding: "5vh 6vw",
    // justifyContent: "space-between",
  },
  aboutText: {
    color: "black",
    fontFamily: "Regular",
    fontSize: "3vh",
    padding: "3vh",
    margin: "2vw",
    textShadow: "0.125rem 0.125rem 0.25rem rgba(255, 255, 255, 0.8)",
    backgroundColor: "#646464",
    borderRadius: "1.25em",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "25vw",
    height: "45vw",
    borderRadius: "1.25em",
    marginBottom: "1vh",
  },
};

const mergedStyles = window.matchMedia("(max-width: 600px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
