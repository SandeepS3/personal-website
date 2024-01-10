const styles = {
  container: {
    display: "flex",
    // backgroundColor: "#4A4A4A",
    flexDirection: "column",
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
    fontSize: "2vh",
    fontFamily: "Krona One",
    textShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7)",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "row",
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
    color: "white",
    fontFamily: "Regular",
    fontSize: "4vh",
    padding: "3vh",
    margin: "2vw",
    textShadow: "0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8)",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
  },
  imageBox: {
    padding: "1vh",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
  },
  image: {
    width: "25vw",
    height: "75vh",
    borderRadius: "1.25em",
  },
};

const mediaStyles = {
  container: {
    display: "flex",
    // backgroundColor: "#4A4A4A",
    flexDirection: "column",
    // alignItems: "flex-start",
    height: "100%",
    paddingTop: "5vh",
  },
  contactText: {
    color: "white",
    fontSize: "2vh",
    fontFamily: "Krona One",
    textShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7)",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  aboutText: {
    color: "white",
    fontFamily: "Regular",
    fontSize: "3vh",
    padding: "5vh",
    margin: "2vw",
    textShadow: "0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8)",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  image: {
    width: "25vw",
    height: "45vw",
    borderRadius: "1.25em",
    position: "absolute",
    top: "-3vh",
    right: "10vw",
  },
  imageBox: {
    padding: "1vh",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
    marginBottom: "0.5vh",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
