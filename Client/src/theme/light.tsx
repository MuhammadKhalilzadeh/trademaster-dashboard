const boxShadows = {
  primary: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
};

const logoBoxes = {
  primary: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: boxShadows.primary,
    borderRadius: "8px",
  },
};

const lightTheme = {
  logoBoxes,
  boxShadows,
};

export default lightTheme;
