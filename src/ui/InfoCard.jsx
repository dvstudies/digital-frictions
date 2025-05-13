import { Box, Typography, IconButton, Stack } from "@mui/material";

import { useStore } from "../store/useStore";

export default function InfoCard() {
    const focus = useStore((state) => state.focus);

    return (
        <Box
            sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                m: 2,
                p: 2,
                width: focus ? "15vw" : "0px",
                maxWidth: "15vw",
                height: focus ? "auto" : "0px",
                backgroundColor: "whitesmoke",
                border: focus ? "1px solid black" : "none",
                borderRadius: "20px",
                opacity: 0.9,
                zIndex: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                transition: "all 0.5s",
            }}
        >
            <Typography variant="h6">{focus?.title}</Typography>
            <Typography>{focus?.author}</Typography>
            <Typography sx={{ pb: 2 }}>
                {focus?.date ? focus?.date : "-"}
            </Typography>
            <Stack
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}
            >
                <IconButton
                    sx={{
                        overflow: "hidden",
                        p: 0,
                        border: "1px solid black",
                        backgroundColor: "#ffffff",
                        borderRadius: "100%",
                    }}
                    onClick={() =>
                        focus?.url && window.open(focus.url, "_blank")
                    }
                    className="holomorphic"
                >
                    <img
                        src="/mambo_logo.png"
                        alt="Go to Mambo"
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </IconButton>
            </Stack>
        </Box>
    );
}
