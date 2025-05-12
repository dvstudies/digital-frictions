import "./style.css";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));

import { useStore } from "./store/useStore";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";
import App from "./ui/App.jsx";

// load schema database
loadSchema();

root.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
);
