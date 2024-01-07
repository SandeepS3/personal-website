import React from "react";
import { useNavigate } from "react-router";

export function SideNav() {
  return (
    <div style={styles.sideNavStyle}>
      <h style={{ color: "white" }}>Sandeep Singh</h>
      <a
        href="/"
        style={styles.linkStyle}
        onMouseOver={() => {}}
        onMouseLeave={() => {}}
      >
        Home
      </a>
    </div>
  );
}

const styles = {
  sideNavStyle: {
    alignItems: "center",
    // height: "100%",
    width: "25vw",
    // position: "fixed",
    zIndex: 1,
    backgroundColor: "#646464",
    paddingTop: "20px",
    // border: "1px solid rgba(255, 255, 255, 0.10)",
  },

  linkStyle: {
    fontWeight: "bold",
    textAlign: "left",
    padding: "15px 0px 15px 30px",
    marginTop: "25px",
    marginBottom: "25px",
    textDecoration: "none",
    fontSize: "1.1vw",
    color: "white",
    display: "block",
    caretColor: "transparent",
  },

  hoverStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
};
