import React, { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function ImgOverlay({ bounds, url }) {
    const map = useMap();
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!map || !bounds || !url) return;

        const imageOverlay = L.imageOverlay(url, bounds, {
            opacity: 1,
        }).addTo(map);

        return () => {
            map.removeLayer(imageOverlay);
        };
    }, [map, bounds, url]);
    return null;
}
