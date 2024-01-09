const Experience = () => {
  const skills = [
    "Flask",
    "React JS",
    "C++",
    "PHP",
    "SQL",
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Java",
  ];
  const Download = `${process.env.PUBLIC_URL}/images/Download.png`;

  const topRowSkills = skills.slice(0, 5);
  const bottomRowSkills = skills.slice(5);

  const downloadPDF = () => {
    const pdfFilePath = process.env.PUBLIC_URL + "/My Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = `Sandeep's Resume`;
    link.click();
  };
  return (
    <div style={styles.container}>
      <div style={styles.skills}>
        <p style={styles.headName}>Skills</p>
        <div style={styles.allSkills}>
          {topRowSkills.map((skill, index) => (
            <p style={styles.skillbox} key={index}>
              {skill}
            </p>
          ))}
        </div>
        <div style={styles.allSkills}>
          {bottomRowSkills.map((skill, index) => (
            <p style={styles.skillbox} key={index + 5}>
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div style={styles.education}>
        <p style={styles.headName}>Education</p>
        <div style={styles.educationBox}>
          <div style={styles.educationTop}>
            <h>NJIT, NEW JERESY INSTITUTE OF TECHNOLOGY</h>
            <h> NEWARK, NJ</h>
          </div>
          <div style={styles.educationBottom}>
            <h>Expected Graduation: December 2024</h>
            <h>B.A. in Computer Science</h>
          </div>
        </div>
      </div>
      <div style={styles.experiences}>
        <p style={styles.headName}>Experiences</p>
        <div style={styles.educationBoxes}>
          <div style={styles.experiencesBox}>
            <h>Area Manager Internship</h>
            <h>FAT1 Amazon, Fresno, CA</h>
            <h>June 2023 - August 2023</h>
          </div>
          <div style={styles.experiencesBox}>
            <h>Sortation Assoicate</h>
            <h>EWR8 Amazon, Teterboro, NJ</h>
            <h>August 2022 - Present</h>
          </div>
        </div>
      </div>
      <div style={styles.resume}>
        <button style={styles.button} onClick={() => downloadPDF()}>
          Resume
          <img
            style={{ width: "30px", height: "30px" }}
            src={Download}
            alt="Download"
          />
        </button>
      </div>
    </div>
  );
};
export default Experience;

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
    fontSize: "5vh",
    color: "white",
    alignItems: "flex-start",
  },
  skills: {
    flex: 1.5,
    flexDirection: "row",
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
  },
  educationBoxes: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  educationBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 15px black",
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
  experiencesBox: {
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
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 15px black",
  },
  resume: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "end",
    padding: "3vh 2vw",
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
