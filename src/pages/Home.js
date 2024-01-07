import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div style={styles.background}>
      <div style={styles.info}>
        <h style={styles.name}>Sandeep Singh</h>
        <h style={styles.title}>Software Developer!</h>
      </div>
    </div>
  );
};

export default Home;

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
    position: "relative",
    top: "31.25rem",
    left: "3.75rem",
    alignItems: "flex-start",
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
