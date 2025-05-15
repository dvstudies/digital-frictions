import { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Basemap from "./map/Basemap";
import ImageCard from "./ui/ImageCard";
import InfoCard from "./ui/InfoCard";
import Intro from "./ui/Intro";

import { useStore } from "./store/useStore";

export default function App() {
    const focus = useStore((state) => state.focus);
    const landing = useStore((state) => state.landing);
    const imgContainerRef = useRef(null);
    const transitionTime = 0.5;
    const theme = useTheme();

    const boxS = {
        m: theme.mainM,
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
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        width: "100vw",
                        height: theme.mainH,
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
                        <Intro />
                        <InfoCard />
                        <Basemap />
                        <Typography
                            variant="h1"
                            sx={{
                                position: "absolute",
                                fontWeight: "bold",
                                opacity: landing ? 1 : 0,
                                pointerEvents: "none",
                                transition: `opacity ${transitionTime}s`,
                            }}
                        >
                            Digital F(r)ictions
                        </Typography>
                    </Box>
                    <Box
                        ref={imgContainerRef}
                        sx={{
                            width: focus ? theme.imgW : "0px",
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
            </Box>
        </>
    );
}
