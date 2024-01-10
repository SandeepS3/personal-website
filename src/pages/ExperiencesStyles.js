const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "1.25em",
    height: "100%",
  },
  headName: {
    display: "flex",
    fontFamily: "Black Ops One",
    fontSize: "4.5vh",
    color: "white",
    alignItems: "flex-start",
  },
  skills: {
    flex: 1.5,
    flexDirection: "row",
    marginBottom: "1vh",
    width: "95%",
  },
  allSkills: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  skillbox: {
    backgroundColor: "#D9D9D9",
    width: "11vw",
    height: "10vh",
    borderRadius: "1.25em",
    fontFamily: "Indie Flower",
    fontSize: "3.3vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 30px black",
  },
  education: {
    flex: 1,
    marginBottom: "1vh",
  },
  educationBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    marginBottom: "2vh",
    width: "95%",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  educationTop: {
    display: "flex",
    fontFamily: "Bakbak One",
    fontSize: "2.5vh",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
    paddingTop: "1vh",
    marginBottom: "-4vh",
  },
  educationBottom: {
    fontFamily: "Alegreya",
    fontSize: "2.3vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
  },
  experiences: {
    flex: 1.5,
  },
  experienceBoxes: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
  },
  experiencesBoxStart: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    fontFamily: "Kavivanar",
    fontWeight: "bold",
    fontSize: "2.5vh",
    width: "30vw",
    height: "19vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
  experiencesBoxEnd: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    fontFamily: "Kavivanar",
    fontWeight: "bold",
    fontSize: "2.5vh",
    width: "30vw",
    height: "19vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
  resume: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "end",
    padding: "3vh",
    width: "95%",
  },
  button: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    boxShadow:
      "0 2px 2px pink, 0 2px 2px pink,inset 0 2px 2px pink, inset 0 0 15px black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10vw",
    height: "6vh",
  },
};

const mediaStyles = {
  headName: {
    display: "flex",
    fontFamily: "Black Ops One",
    fontSize: "3.8vh",
    color: "white",
    alignItems: "flex-start",
  },
  skillbox: {
    backgroundColor: "#D9D9D9",
    width: "15vw",
    height: "8vh",
    borderRadius: "1.25em",
    fontFamily: "Indie Flower",
    fontSize: "1.8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 30px black",
  },
  education: {
    flex: 1,
    marginBottom: "1vh",
  },
  educationBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    width: "100%",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  educationTop: {
    display: "flex",
    fontFamily: "Bakbak One",
    fontSize: "1.5vh",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
    paddingTop: "3vh",
    marginBottom: "3vh",
  },
  educationBottom: {
    fontFamily: "Alegreya",
    fontSize: "1.5vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
    paddingBottom: "3vh",
  },
  experienceBoxes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "95%",
  },
  experiencesBoxStart: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    fontFamily: "Kavivanar",
    fontWeight: "bold",
    fontSize: "1.7vh",
    width: "50vw",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
  experiencesBoxEnd: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    fontFamily: "Kavivanar",
    fontWeight: "bold",
    fontSize: "1.7vh",
    width: "50vw",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
  experienceLeft: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "3vh",
  },
  experienceRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "3vh",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
