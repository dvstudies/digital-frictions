import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

import Basemap from "../map/Basemap";
import ImageCard from "./ImageCard";

export default function App() {
    const [expand, setExpand] = useState(false);

    const boxS = {
        m: 2,
        borderRadius: "20px",
        transition: "all 0.5s ",
        border: "1px solid black",
    };

    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: "white",
                        ...boxS,
                    }}
                    className="holomorphic"
                >
                    <Basemap />
                </Box>
                <Box
                    sx={{
                        width: expand ? "100vh" : "0px",
                        backgroundColor: "lightblue",
                        ...boxS,
                        ml: 0,
                        mr: expand ? boxS.m : 0,
                    }}
                >
                    <ImageCard />
                </Box>
            </Box>
            {/* ///////////////////////////////////// */}
            <Box sx={{ position: "absolute", top: "100px", left: "100px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setExpand(!expand);
                    }}
                >
                    Hello World
                </Button>
            </Box>
        </>
    );
}
