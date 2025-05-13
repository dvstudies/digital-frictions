import { useEffect, useState, useMemo, useLayoutEffect } from "react";
import { Circle, Tooltip, LayerGroup } from "react-leaflet";
import { useMap } from "react-leaflet";

import { useStore } from "../store/useStore";

export default function Square({ obj }) {
    const [clicked, setClicked] = useState(false);
    const r = 300;

    const map = useMap();

    const cStyle = {
        width: `${r}px`,
        height: `${r}px`,
        opacity: 1,
        borderRadius: "100%",
        margin: 0,
        padding: 0,
    };

    useEffect(() => {
        if (clicked) {
            useStore.setState({
                focus: obj,
            });
        } else {
            useStore.setState({
                focus: null,
            });
        }
    }, [clicked]);

    useEffect(() => {
        if (clicked && map) {
            map.flyTo([obj.lat, obj.lon], 13, {
                animate: true,
                duration: 1.5,
            });
        }
    }, [clicked, map, obj.lat, obj.lon]);

    return (
        <>
            <Circle
                center={[obj.lat, obj.lon]}
                radius={10000}
                pathOptions={{
                    fillOpacity: 0,
                    weight: 1,
                }}
                eventHandlers={{
                    click: (e) => {
                        console.log("clicked");
                        setClicked(!clicked);
                    },
                }}
            >
                {clicked && (
                    <Tooltip
                        direction="center"
                        permanent={true}
                    >
                        <div
                            style={{
                                ...cStyle,
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
        </>
    );
}
