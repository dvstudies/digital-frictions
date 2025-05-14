import { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Basemap from "./map/Basemap";
import ImageCard from "./ui/ImageCard";
import InfoCard from "./ui/InfoCard";

import { useStore } from "./store/useStore";

export default function App() {
    const focus = useStore((state) => state.focus);
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
                {/* <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 0,
                        m: 0,
                    }}
                >
                    <Typography sx={{ p: 0, m: 0 }}>
                        {"Digital F(r)ictions"}
                    </Typography>
                </Box> */}
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
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                p: 2,
                                m: 2,
                                borderRadius: "20px",
                                backgroundColor: "#000000",
                                border: "1px solid black",
                                color: "#eeeeee",
                                width: "20vw",
                                zIndex: 1000,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ pb: 2, textAlign: "justify" }}>
                                Culture as dream, as encounter, as discovery and
                                liberation. Surprise as emancipation. Territory
                                as an endless horizon.
                            </Typography>
                            <Typography sx={{ textAlign: "justify" }}>
                                We land in new geographies, we immerse ourselves
                                in vaguely intuited contexts, to cross, gently
                                and wildly, the blurred mists of cliché, of
                                assumptions and commonplaces, and to enter into
                                the unmitigated richness of a palimpsest. How to
                                inhabit this natural, cultural, social and
                                emotional maelstrom? Our digital age, with
                                networked and scaled images, with distributed,
                                automated and supposedly intelligent
                                computational processes, exacerbates the
                                processes of syncretism that characterise every
                                culture. The large artificial intelligence
                                models that increasingly mediate and shape
                                contemporary culture are trained on vast amounts
                                of unfiltered data from the internet, mostly
                                representative of a global north, Anglo-Saxon
                                based culture. What to do with our cultural
                                legacies and heritages that are foreign to this
                                reality? How to preserve and promote them? Do we
                                accept to be swallowed up and processed by the
                                machine to be part of this new automated and
                                merciless syncretism? Or do we say we inhabit
                                the shadows of silence, of invisibility as a
                                strategy for survival?
                            </Typography>
                            <Button
                                sx={{
                                    borderRadius: "20px",
                                    color: "whitesmoke",
                                    border: "1px solid white",
                                    m: 0,
                                    mt: 4,
                                    px: 3,
                                }}
                                onClick={() => {
                                    useStore.setState({
                                        landing: false,
                                    });
                                }}
                            >
                                Begin
                            </Button>
                        </Box>
                        <InfoCard />
                        <Basemap />
                        <Typography
                            variant="h1"
                            sx={{
                                position: "absolute",
                                fontWeight: "bold",
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
