import { styles } from "./HomeStyles";
import { useState, useEffect } from "react";

const Home = () => {
  const MobileBeach = `${process.env.PUBLIC_URL}/images/Beach1.png`;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const Popup = () => (
    <div>
      {isMobile && showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 999,
            textAlign: "center",
          }}
        >
          <button
            onClick={closePopup}
            style={{
              position: "absolute",
              top: "5px", // Adjusted position
              right: "5px", // Adjusted position
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
              padding: "5px",
            }}
          >
            &times;
          </button>
          <p style={{ fontSize: "16px", margin: "0" }}>
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
      {isMobile && (
        <img style={styles.image} src={MobileBeach} alt="MobileBeach" />
      )}
      <div style={styles.info}>
        <h style={styles.name}>Sandeep Singh</h>
        <h style={styles.title}>Software Developer!</h>
      </div>
    </div>
  );
};

export default Home;
