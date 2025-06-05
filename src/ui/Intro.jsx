import { Box, Button, Typography, IconButton, Stack } from "@mui/material";

import { useStore } from "../store/useStore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Intro() {
    const landing = useStore((state) => state.landing);

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                p: landing ? 2 : 0,
                m: 2,
                borderRadius: "20px",
                backgroundColor: "#000000",
                color: "#eeeeee",
                maxWidth: landing ? "20vw" : "auto",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "80vh",
                overflowY: "auto",
                overflowX: "hidden",
                // transition: "all 0.5s ease-in-out",
            }}
        >
            <Box
                sx={{
                    maxHeight: landing ? "80vh" : "0px",
                    width: landing ? "20vw" : "0px",
                    overflow: "hidden",
                    // color: landing ? "whitesmoke" : "transparent",
                    transition: "all 0.5s ease-in-out",
                }}
            >
                {landing && (
                    <>
                        <Typography
                            sx={{
                                pb: 2,
                                textAlign: "justify",
                            }}
                        >
                            Culture as dream, as encounter, as discovery and
                            liberation. Surprise as emancipation. Territory as
                            an endless horizon.
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "justify",
                            }}
                        >
                            We land in new geographies, we immerse ourselves in
                            vaguely intuited contexts, to cross, gently and
                            wildly, the blurred mists of cliché, of assumptions
                            and commonplaces, and to enter into the unmitigated
                            richness of a palimpsest. How to inhabit this
                            natural, cultural, social and emotional maelstrom?
                            Our digital age, with networked and scaled images,
                            with distributed, automated and supposedly
                            intelligent computational processes, exacerbates the
                            processes of syncretism that characterise every
                            culture. The large artificial intelligence models
                            that increasingly mediate and shape contemporary
                            culture are trained on vast amounts of unfiltered
                            data from the internet, mostly representative of a
                            global north, Anglo-Saxon based culture. What to do
                            with our cultural legacies and heritages that are
                            foreign to this reality? How to preserve and promote
                            them? Do we accept to be swallowed up and processed
                            by the machine to be part of this new automated and
                            merciless syncretism? Or do we say we inhabit the
                            shadows of silence, of invisibility as a strategy
                            for survival?
                        </Typography>
                    </>
                )}
            </Box>
            {landing ? (
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
            ) : (
                <>
                    <IconButton
                        sx={{ color: "whitesmoke", p: 1, borderRadius: "100%" }}
                        onClick={() => {
                            useStore.setState({
                                landing: !landing,
                                focus: null,
                                visibleDots: false,
                            });
                        }}
                    >
                        <QuestionMarkIcon />
                    </IconButton>
                </>
            )}
        </Box>
    );
}
