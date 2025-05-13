import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

import Basemap from "./map/Basemap";
import ImageCard from "./ui/ImageCard";
import InfoCard from "./ui/InfoCard";

import { useStore } from "./store/useStore";

export default function App() {
    const focus = useStore((state) => state.focus);
    const transitionTime = 0.5;

    const boxS = {
        m: 2,
        borderRadius: "20px",
        transition: "all 0.5s ",
        border: "1px solid black",
        overflow: "hidden",
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
                        backgroundColor: "whitesmoke",
                        ...boxS,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                    className="holomorphic"
                >
                    <InfoCard />
                    <Basemap />
                </Box>
                <Box
                    sx={{
                        width: focus ? "100vh" : "0px",
                        backgroundColor: "transparent",
                        ...boxS,
                        ml: 0,
                        mr: focus ? boxS.m : 0,
                        border: focus ? boxS.border : "none",
                        visibility: focus ? "visible" : "hidden",
                    }}
                >
                    {focus && <ImageCard focus={focus} />}
                </Box>
            </Box>
        </>
    );
}
