import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Pane } from "react-leaflet";
import { useEffect, useState, useRef } from "react";
import { useStore } from "../store/useStore";

export default function Basemap() {
    const [geojson, setGeoJSON] = useState(null);
    const mapview = useStore((state) => state.mapview);

    const bounds = [
        [41.364745, 2.12098],
        [41.411817, 2.199944],
    ];

    useEffect(() => {
        console.log("loading geojson");
        fetch("./geojson/locations.geojson")
            .then((response) => response.json())
            .then((data) => {
                // useStore.setState({ locations: data });
                setGeoJSON(data);
            })
            .catch((error) => {});
    }, []);

    useEffect(() => {
        if (geojson) {
            const geodb = [];

            for (let i = 0; i < geojson.features.length; i++) {
                const entry = geojson.features[i];
                const d = {};
                d.coords = [...entry.geometry.coordinates];
                d.site = entry.properties.site;
                d.cameraCode = entry.properties.cameraCode;
                geodb.push(d);
            }
            useStore.setState({ geodb: geodb });
        }
    }, [geojson]);

    return (
        <MapContainer
            zoom={15}
            maxZoom={20}
            zoomControl={false}
            bounds={bounds}
            minZoom={15}
            style={{
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png"
                // attribution="Map data &copy; OpenStreetMap contributors, under ODbL | Map tiles by &copy; CartoDB, under CC BY 3.0"
            />
            <Pane
                name="topPane"
                style={{ zIndex: 500 }}
            >
                <Places />
            </Pane>
            <Pane
                name="bottomPane"
                style={{ zIndex: 200 }}
            >
                {mapview == "flow" && <Radii />}
                {mapview == "distribution" && <Distribution />}
                {mapview == "target" && <Square />}
            </Pane>
        </MapContainer>
    );
}
