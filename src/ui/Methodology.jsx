import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import {
    CircularProgress,
    Container,
    Typography,
    Box,
    Stack,
    Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useStore } from "../store/useStore";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Methodology() {
    const theme = useTheme();
    const methodology = useStore((state) => state.methodology);

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("./methodology.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    if (!content) return <CircularProgress />;

    const boxS = {
        // m: theme.mainM,
        borderRadius: "20px",
        transition: "all 0.5s ",
        // border: "1px solid black",
        overflow: "hidden",
    };

    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0,

                    transform: `translateY(${!methodology ? "0" : "-100vh"})`,
                    transition: `transform 2s ease-in-out`,
                }}
            >
                <Box
                    sx={{
                        width: "100vw",
                        height: "100%",
                        display: "flex",
                        p: 0,
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            backgroundColor: "whitesmoke",
                            ...boxS,
                            display: "block",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            position: "relative",
                            overflow: "auto",
                        }}
                    >
                        <Banner />
                        <TextBox
                            theme={theme}
                            content={content}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

function TextBox({ theme, content }) {
    return (
        <Box
            sx={{
                flex: 1,
                display: "block",
                position: "relative",
                overflow: "auto",
                WebkitColumnCount: 4,
                MozColumnCount: 4,
                columnCount: 4,
                columnGap: "2em",
                p: 4,
                pt: 0,
                color: "white",
                fontFamily: theme.typography.fontFamily,
            }}
        >
            <ReactMarkdown
                components={{
                    h2: ({ node, ...props }) => (
                        <Typography
                            variant="h4"
                            {...props}
                            sx={{ mr: "20%" }}
                        />
                    ),
                    p: ({ node, ...props }) => (
                        <Typography
                            {...props}
                            sx={{
                                textAlign: "justify",
                                m: "1em 0",
                            }}
                        />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </Box>
    );
}

function Banner() {
    return (
        <>
            <Stack
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <Typography variant="h2">Digital F(r)ictions</Typography>
            </Stack>

            <Button
                sx={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    m: 6,
                    transition: "all 0.5s ease-in-out",

                    border: "1px solid #000000",
                    borderRadius: "20px",
                    color: "#000000",
                    backgroundColor: "whitesmoke",
                    px: 2,
                    zIndex: 1000,
                }}
                onClick={() => useStore.setState({ methodology: false })}
            >
                <ArrowUpwardIcon
                    sx={{
                        mr: 5,
                        fontSize: "1.2rem",
                    }}
                />
                Return
                <ArrowUpwardIcon
                    sx={{
                        ml: 5,
                        fontSize: "1.2rem",
                    }}
                />
            </Button>
        </>
    );
}
