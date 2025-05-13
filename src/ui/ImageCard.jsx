import { Box, Typography, ToggleButton } from "@mui/material";
import { useState, useEffect } from "react";

import DropdownMenu from "./DropdownMenu.jsx";

export default function ImageCard({ focus }) {
    const loras = [
        "colonial_diffusion_all",
        "mambo_diffusion_all",
        "oro_diffusion_all",
        "street_art_diffusion_all",
    ];
    const [selectedLora, setSelectedLora] = useState(loras[0]);

    const options = loras.map((lora) => ({
        label: lora.replaceAll("_diffusion_all", "").replaceAll("_", " "),
        value: lora,
    }));

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
            }}
        >
            <img
                src={`images/generations/${selectedLora}/${focus?.caption.replaceAll(
                    "'",
                    "_"
                )}.png`}
                alt=""
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                }}
            />

            {/* Caption colophon */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "whitesmoke",
                    border: "1px solid black",
                    px: 4,
                    py: 1,
                    mb: 2,
                    h: "200px",
                    w: "100%",
                    borderRadius: "100px",
                    opacity: 0.9,
                }}
            >
                <Typography variant="h6">{focus?.caption}</Typography>
            </Box>

            {/* Button menu */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    m: 2,
                }}
            >
                <DropdownMenu
                    label="Lora"
                    color="black"
                    options={options}
                    value={selectedLora}
                    onChange={(e) => {
                        setSelectedLora(e.target.value);
                    }}
                />
            </Box>
        </Box>
    );
}
