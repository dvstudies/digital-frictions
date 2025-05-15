import "./style.css";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));

import { useStore } from "./store/useStore.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";
import App from "./App.jsx";

init();

root.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
);

async function init() {
    try {
        const response = await fetch("./centroid_data_aug.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const geodb = await response.json();

        geodb.map((e) => {
            e.found = false;
            e.clicked = false;
        });

        useStore.setState({ geodb });
    } catch (error) {
        console.error("Error loading data:", error);
    }
}
