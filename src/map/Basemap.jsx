import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Pane } from "react-leaflet";
import { useEffect, useRef } from "react";
import { useStore } from "../store/useStore";
import Square from "./Square";

export default function Basemap() {
    const geodb = useStore((state) => state.geodb);
    const focus = useStore((state) => state.focus);
    const mapRef = useRef();
    const containerRef = useRef();

    const bounds = [
        [-4.23, -78.95],
        [12.53, -66.85],
    ];

    // Trigger Leaflet to recalculate its size
    // useEffect(() => {
    //     const map = mapRef.current;
    //     if (map) {
    //         setTimeout(() => {
    //             map.invalidateSize();
    //         }, 500);
    //     }
    // }, [focus]);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            const map = mapRef.current;
            if (map) {
                map.invalidateSize();
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ height: "100%", width: "100%" }}
        >
            <MapContainer
                zoom={10}
                bounds={bounds}
                zoomControl={false}
                ref={mapRef}
                style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles &copy; Esri"
                />

                {geodb.length > 0 &&
                    geodb.map((obj, index) => {
                        return (
                            <Square
                                key={index}
                                obj={obj}
                            />
                        );
                    })}
            </MapContainer>
        </div>
    );
}
