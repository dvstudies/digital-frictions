import { useEffect, useState, useMemo, useLayoutEffect, useRef } from "react";
import { Circle, Tooltip, LayerGroup, CircleMarker } from "react-leaflet";
import { useMap } from "react-leaflet";

import { useTheme } from "@mui/material/styles";

import { useStore } from "../store/useStore";

export default function Square({ obj }) {
    const theme = useTheme();
    const resetClick = useStore((state) => state.resetClick);
    const visibleDots = useStore((state) => state.visibleDots);
    const r = theme.thumbMaxDim;

    const scale = 0.25;

    const map = useMap();

    const scaledWidth = (obj.width / Math.max(obj.width, obj.height)) * r;
    const scaledHeight = (obj.height / Math.max(obj.width, obj.height)) * r;
    const cStyle = {
        width: `${obj.clicked ? scaledWidth : r * scale}px`,
        height: `${obj.clicked ? scaledHeight : r * scale}px`,
        opacity: 1,
        overflow: "hidden",
        margin: 0,
        padding: 0,
        border: "1px solid white",
    };

    function clickEffect() {
        if (!obj.clicked) {
            resetClick(obj);

            obj.found = true;

            useStore.setState({
                focus: obj,
            });

            setTimeout(() => {
                const targetPoint = map.project(
                    [obj.lat, obj.lon],
                    map.getZoom()
                );

                // Displace based on reduced map size
                const mapSize = map.getSize();
                const halfW = mapSize.x / 2;

                const offsetX = halfW - halfW / theme.mapRatio;
                targetPoint.x += offsetX;

                const offsetLatLng = map.unproject(targetPoint, map.getZoom());
                map.flyTo([offsetLatLng.lat, offsetLatLng.lng], map.getZoom(), {
                    animate: true,
                    duration: 1.5,
                });
            }, 10);
        } else {
            resetClick();

            useStore.setState({
                focus: null,
            });
        }
    }

    return (
        <>
            {visibleDots && (
                <Circle
                    center={[obj.lat, obj.lon]}
                    radius={1000}
                    pathOptions={{
                        fillOpacity: 1,
                        fillColor: obj.found ? "transparent" : "whitesmoke",
                        weight: 0,
                    }}
                    eventHandlers={{
                        click: (e) => {
                            clickEffect();
                        },
                    }}
                    className="square"
                >
                    {obj.found && (
                        <Tooltip
                            direction="center"
                            permanent={true}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                margin: 0,
                                fontSize: "0px",

                                zIndex: obj.clicked ? 10000 : "inherit",
                            }}
                        >
                            <div
                                style={{
                                    ...cStyle,
                                    borderRadius: obj.clicked ? "0%" : "100%",
                                }}
                            >
                                <img
                                    src={`images/collection/${obj.filename}`}
                                    alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                ></img>
                            </div>
                        </Tooltip>
                    )}
                </Circle>
            )}
        </>
    );
}
