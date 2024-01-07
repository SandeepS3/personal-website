import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div style={styles.background}>
      <div style={styles.info}>
        <h style={styles.name}>Sandeep Singh</h>
        <h style={styles.title}>Software Developer!</h>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Beach.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    WebkitBackgroundSize: "100% 100%",
    backgroundSize: "100% 280%",
    minHeight: "100vh",
    borderRadius: "20px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "500px",
    left: "60px",
    alignItems: "flex-start",
  },
  name: {
    fontFamily: "Acme",
    fontSize: "75px",
    color: "white",
    marginBottom: "-20px",
  },
  title: {
    fontFamily: "Actor",
    fontSize: "25px",
    color: "white",
  },
};
