import React, { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function ShadowOverlay({ bounds }) {
    const map = useMap();
    const canvasRef = useRef(null);

    const w = Math.round(bounds[1][0] - bounds[0][0]);
    const h = Math.round(bounds[1][1] - bounds[0][1]);
    const resolution = 50;

    useEffect(() => {
        if (!map) return;

        // Create a canvas element
        const canvas = document.createElement("canvas");
        canvas.width = w * resolution;
        canvas.height = h * resolution;
        const ctx = canvas.getContext("2d");

        // Draw the initial black layer
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create a Leaflet image overlay from the canvas
        const canvasOverlay = L.imageOverlay(canvas.toDataURL(), bounds, {
            opacity: 0.6,
        }).addTo(map);

        canvasRef.current = { canvas, ctx, overlay: canvasOverlay };

        // Update canvas on move
        const updateCanvas = () => {
            const center = map.getCenter();
            const { lat, lng } = center;

            // Map center to canvas coordinates
            const x = Math.round(
                ((lng - bounds[0][1]) / (bounds[1][1] - bounds[0][1])) *
                    canvas.width
            );
            const y = Math.round(
                ((lat - bounds[0][0]) / (bounds[1][0] - bounds[0][0])) *
                    canvas.height
            );

            // Clear previous state
            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Fill black again
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Create a radial gradient for transparency around the center
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 100);
            gradient.addColorStop(0, "transparent");
            gradient.addColorStop(1, "black");

            // Apply the gradient as a mask
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 100, 0, 2 * Math.PI);
            ctx.fill();
            ctx.globalCompositeOperation = "source-over";

            // Update the overlay
            canvasOverlay.setUrl(canvas.toDataURL());
        };

        map.on("move", updateCanvas);
        updateCanvas();

        return () => {
            map.off("move", updateCanvas);
            map.removeLayer(canvasOverlay);
        };
    }, [map, bounds, w, h, resolution]);

    return null;
}
