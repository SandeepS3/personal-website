const styles = {
  projects: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1vh",
  },
  project: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingBottom: "2vh",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1vh",
    justifyContent: "space-between",
    width: "95%",
  },
  titleText: {
    color: "white",
    fontFamily: "Black Ops One",
    fontSize: "4vh",
    paddingRight: "4vw",
  },
  titleButton: {
    backgroundColor: "#181521",
    borderRadius: "0.5em",
    fontFamily: "Bubbler One",
    fontWeight: "bold",
    color: "white",
    fontSize: "2.5vh",
    border: "none",
    cursor: "pointer",
    width: "17vw",
    height: "6vh",
  },
  descriptionBox1: {
    width: "95%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  descriptionBox2: {
    width: "95%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 35px black",
  },
  descriptionBox3: {
    width: "95%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 35px black",
  },
  descriptionText: {
    fontFamily: "Alegreya",
    fontSize: "2.5vh",
    textAlign: "left",
  },
};

const mediaStyles = {
  projects: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "5vh",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1vh",
    width: "100%",
  },
  titleText: {
    color: "white",
    fontFamily: "Black Ops One",
    fontSize: "3vh",
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "1vw",
    paddingBottom: "2vh",
  },
  titleButton: {
    backgroundColor: "#181521",
    borderRadius: "0.5em",
    fontFamily: "Bubbler One",
    fontWeight: "bold",
    color: "white",
    fontSize: "1.2vh",
    border: "none",
    cursor: "pointer",
    width: "20vw",
    height: "6vh",
    display: "flex",
    alignItems: "flex-end",
    marginRight: "1vw",
  },
  descriptionBox1: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  descriptionBox2: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 35px black",
  },
  descriptionBox3: {
    width: "100%%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 2vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 35px black",
  },
  descriptionText: {
    fontFamily: "Alegreya",
    fontSize: "2.2vh",
    textAlign: "left",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
