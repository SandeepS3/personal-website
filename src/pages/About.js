const About = () => {
  const Picture = `${process.env.PUBLIC_URL}/images/AboutPic.png`;
  return (
    <div style={styles.container}>
      <div style={styles.contactInfo}>
        <p style={styles.contactText}>Phone Number: 201-927-6063</p>
        <p style={styles.contactText}>Email: singh.deep8302@gmail.com</p>
      </div>
      <div style={styles.aboutMe}>
        <div style={styles.leftHalf}>
          <p style={styles.aboutText}>
            A little bit about me: I am a student specializing in computer
            science actively pursuing opportunities for a full-time position or
            internship in Software Engineering. This website serves as an
            extended introduction to my professional profile.
          </p>
        </div>
        <div style={styles.rightHalf}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={Picture} alt="About Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

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
