import { styles } from "./HomeStyles";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Popup = () => (
    <div>
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            margin: "20px",
          }}
        >
          <p style={{ fontSize: "16px", textAlign: "center", margin: "0" }}>
            Welcome! The view for mobile devices is still being worked on. For
            optimal view, use a larger device! Thank you!
          </p>
        </div>
      )}
    </div>
  );
  return (
    <div style={styles.background}>
      <Popup />
      <div style={styles.info}>
        <h style={styles.name}>Sandeep Singh</h>
        <h style={styles.title}>Software Developer!</h>
      </div>
    </div>
  );
};

export default Home;
