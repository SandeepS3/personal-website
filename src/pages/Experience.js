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
  // Filter skills for the top row (first 5)
  const topRowSkills = skills.slice(0, 5);

  // Filter skills for the second row (remaining 4)
  const bottomRowSkills = skills.slice(5);
  return (
    <div style={styles.container}>
      <div style={styles.skills}>
        <p style={styles.headName}>Skills</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {topRowSkills.map((skill, index) => (
            <p style={styles.skillbox} key={index}>
              {skill}
            </p>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
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
            <p>NJIT, NEW JERESY INSTITUTE OF TECHNOLOGY</p>
            <p> NEWARK, NJ</p>
          </div>
          <div style={styles.educationBottom}>
            <p>Expected Graduation: December 2024</p>
            <p>B.A. in Computer Science</p>
          </div>
        </div>
      </div>
      <div style={styles.experiences}>Experiences</div>
      <div style={styles.resume}>Resume</div>
    </div>
  );
};
export default Experience;

const styles = {
  container: {
    display: "flex",
    // backgroundColor: "#4A4A4A",
    flexDirection: "column",
    borderRadius: "1.25em",
    height: "100%",
  },
  headName: {
    display: "flex",
    fontFamily: "Black Ops One",
    fontSize: "40px",
    color: "white",
    alignItems: "flex-start",
  },
  skills: {
    flex: 1.5,
    flexDirection: "row",
  },
  skillbox: {
    backgroundColor: "#D9D9D9",
    width: "150px",
    height: "80px",
    borderRadius: "1.25em",
    fontFamily: "Indie Flower",
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 30px black",
  },
  education: {
    flex: 1,
  },
  educationBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 30px black",
  },
  educationTop: {
    display: "flex",
    fontFamily: "Bakbak One",
    fontSize: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
    paddingTop: "3vh",
    marginBottom: "-5vh",
  },
  educationBottom: {
    fontFamily: "Alegreya",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
  },
  experiences: {
    // backgroundColor: "red",
    flex: 1.5,
  },
  resume: {
    backgroundColor: "pink",
    flex: 0.5,
  },
};
