import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Pane, ImageOverlay } from "react-leaflet";
import { useEffect, useRef, useState } from "react";

import { useStore } from "../store/useStore";

import ShadowOverlay from "./ShadowOverlay";
import Square from "./Square";

export default function Basemap() {
    const geodb = useStore((state) => state.geodb);
    const landing = useStore((state) => state.landing);
    const resetClick = useStore((state) => state.resetClick);
    const mapRef = useRef();
    const bounds = [
        [-4.23, -78.95],
        [12.53, -66.85],
    ];

    useEffect(() => {
        if (landing) {
            const map = mapRef.current;
            if (map) {
                map.flyToBounds(bounds, { animate: true, duration: 1 });
            }
        } else {
            const map = mapRef.current;
            if (map && geodb.length > 0) {
                const selection =
                    geodb[Math.floor(Math.random() * geodb.length)];

                if (selection) {
                    map.flyTo([selection.lat, selection.lon], 12, {
                        animate: true,
                        duration: 1.5,
                    });
                    setTimeout(() => {
                        useStore.setState({ visibleDots: true });
                        console.log("visible dots");
                    }, 1500);
                }
            }
        }
    }, [landing]);

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
                bounds={bounds}
                zoomControl={false}
                ref={mapRef}
                maxBounds={bounds}
                style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    backgroundColor: "transparent",
                }}
            >
                <Pane
                    name="tilelayer-pane"
                    style={{ zIndex: 11 }}
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Tiles &copy; Esri"
                        opacity={landing ? 0 : 1}
                        eventHandlers={{
                            add: (e) => {
                                const layer = e.target;
                                layer.getContainer().style.transition =
                                    "all 3s ease-in-out";
                            },
                        }}
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
                        opacity={landing ? 0.8 : 0}
                    />
                </Pane>
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
