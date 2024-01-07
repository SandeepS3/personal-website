import React from "react";

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
    paddingTop: "1.2em",
    // border: "1px solid rgba(255, 255, 255, 0.10)",
  },

  linkStyle: {
    fontWeight: "bold",
    textAlign: "left",
    padding: "1em 0em 1em 1.875em",
    marginTop: "1.5em",
    marginBottom: "1.5em",
    textDecoration: "none",
    fontSize: "1rem",
    color: "white",
    display: "block",
  },

  hoverStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
};
