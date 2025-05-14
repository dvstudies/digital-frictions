import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Pane } from "react-leaflet";
import { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

import { useStore } from "../store/useStore";

import ShadowOverlay from "./ShadowOverlay";
import Square from "./Square";

export default function Basemap() {
    const geodb = useStore((state) => state.geodb);
    const resetClick = useStore((state) => state.resetClick);
    const mapRef = useRef();
    const containerRef = useRef();
    const bounds = [
        [-4.23, -78.95],
        [12.53, -66.85],
    ];

    return (
        <div
            style={{ height: "100%", width: "100%" }}
            onClick={(e) => {
                if (!e.target.classList.contains("square")) {
                    resetClick();
                    useStore.setState({
                        focus: null,
                    });
                }
            }}
        >
            <MapContainer
                zoom={10}
                // bounds={bounds}
                center={[4.624335, -74.063644]}
                zoomControl={false}
                ref={mapRef}
                style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
                // crs={L.CRS.EPSG}
            >
                {/* <ShadowOverlay bounds={bounds} /> */}

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
