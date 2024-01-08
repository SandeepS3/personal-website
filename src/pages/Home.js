import { styles } from "./HomeStyles";

const Home = () => {
  const viewportWidth = window.innerWidth;
  console.log("Viewport Width:", viewportWidth);
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
