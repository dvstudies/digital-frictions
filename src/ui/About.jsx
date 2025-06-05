import { Box, Button, Typography, IconButton, Stack } from "@mui/material";

import { useStore } from "../store/useStore";

export default function About() {
    const landing = useStore((state) => state.landing);

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
                p: 2,
                px: 2,
                m: 2,
                borderRadius: "20px",
                backgroundColor: "#000000",
                color: "#eeeeee",
                width: "10vw",

                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // maxHeight: landing ? "80vh" : "0px",
                overflow: "hidden",
                opacity: landing ? 1 : 0,
                visibility: landing ? "visible" : "hidden",
                transition: "all 0.5s ease-in-out",
            }}
        >
            <img
                src="./dvs_logo.png"
                alt="Go to Mambo"
                style={{
                    width: "auto",
                    height: "100%",
                    cursor: "pointer",
                }}
                onClick={() => window.open("https://dvstudies.net/", "_blank")}
            />

            <Typography
                sx={{
                    textAlign: "justify",
                    fontSize: "0.8rem",
                    pb: 2,
                    pt: 2,
                }}
            >
                Team: <br />
                I. Neri, L. Schaerf, A. Zapata, D. Negueruela del Castillo
            </Typography>

            <Typography
                sx={{
                    textAlign: "justify",
                    fontSize: "0.6rem",
                }}
            >
                Digital-F(r)ictions is the result of a digital residency at the
                Bogotá Museum of Modern Art - MAMBO, supported by the Government
                of Canada’s New Frontiers in Research Fund (NFRF),
                [NFRF-2022-00245] in collaboration with Susana Vargas-Mejía. We
                thank the MAMBO team and our colleague Pepe Ballesteros for
                their valuable insights.
            </Typography>
        </Box>
    );
}
