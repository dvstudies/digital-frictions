import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Pane, ImageOverlay } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { useStore } from "../store/useStore";

import ShadowOverlay from "./ShadowOverlay";
import ImgOverlay from "./ImgOverlay";
import Square from "./Square";

export default function Basemap() {
    const geodb = useStore((state) => state.geodb);
    const [opac, setOpac] = useState(true);
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
                    setOpac(!opac);
                }
            }}
        >
            <MapContainer
                zoom={10}
                bounds={bounds}
                // center={[4.624335, -74.063644]}
                zoomControl={false}
                ref={mapRef}
                style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    backgroundColor: "transparent",
                }}
                // crs={L.CRS.EPSG}
            >
                {/* <ShadowOverlay bounds={bounds} /> */}

                <Pane
                    name="tilelayer-pane"
                    style={{ zIndex: 11 }}
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Tiles &copy; Esri"
                        opacity={opac ? 0 : 1}
                        // eventHandlers={{
                        //     add: (e) => {
                        //         const tileLayer = e.target;
                        //         tileLayer.getContainer().style.transition =
                        //             "all 0.5s ease-in-out";
                        //     },
                        // }}
                    />
                </Pane>

                <Pane
                    name="imagelayer-pane"
                    style={{ zIndex: 1 }}
                >
                    <ImageOverlay
                        bounds={bounds}
                        url="/sat_clip_final.png"
                        zIndex={1}
                    />
                </Pane>

                {!opac &&
                    geodb.length > 0 &&
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
