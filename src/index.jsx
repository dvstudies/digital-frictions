import "./style.css";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));

import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";
import App from "./ui/App.jsx";

root.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
);
