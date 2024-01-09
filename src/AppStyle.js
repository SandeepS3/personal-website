const styles = {
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    background: "linear-gradient(to left, #060016, #1F1F1F)",
    transition: "background 1s linear",
  },
};

const mediaStyles = {
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: 'calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom))',
    width: '100%',
    paddingTop: 'constant(safe-area-inset-top)',
    paddingRight: 'constant(safe-area-inset-right)',
    paddingBottom: 'constant(safe-area-inset-bottom)',
    paddingLeft: 'constant(safe-area-inset-left)',
    background: "linear-gradient(to top, #060016, #1F1F1F)",
    transition: "background 1s linear",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
