import { createTheme } from "@mui/material/styles";

const mainM = 16; // px
const mainH = window.innerHeight - mainM * 2;
const mainW = window.innerWidth - mainM * 2;

const mapRatio = mainW / (mainW - mainH - mainM);

console.log("mainH", mainH);

// Main dims and colors
let theme = createTheme({
    mainM: `${mainM}px`,
    mainH: `${mainH}px`,
    mainW: `${mainW}px`,
    imgW: mainH,
    mapRatio,

    typography: {
        fontFamily: "Work Sans",
    },
    brdRad: "20px",

    palette: {
        primary: {
            main: "#FF6F61",
            light: "#FF9A8B",
            dark: "#C94C4C",
        },
        secondary: {
            main: "#6F61FF",
            light: "#9A8BFF",
            dark: "#4C4CC9",
        },
        white: {
            light: "#ffffff",
            main: "#f5f5f5",
            darker: "#ebebeb",
        },
        black: {
            light: "#000000",
            main: "#212121",
            darker: "#000000",
        },
    },
});

export default theme;
