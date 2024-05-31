import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import markers from "../json/interactive_map.json";

const geoUrl = "usa.geojson";

export const MapBubbleChart = () => {
    const [hoveredMarkerInfo, setHoveredMarkerInfo] = useState(null);
    const [infoBoxPosition, setInfoBoxPosition] = useState([0, 0]);

    const handleMarkerEnter = (info, coordinates) => {
        setHoveredMarkerInfo(info);
        setInfoBoxPosition(coordinates);
    };

    const handleMarkerLeave = () => {
        setHoveredMarkerInfo(null);
    };

    return (
        <div style={{ position: "relative" }}>
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [96, -32, 0],
                    scale: 600,
                }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
							<Geography
							key={geo.rsmKey}
							geography={geo}
							fill="#999999" // Darker shade of gray
							stroke="#D6D6DA"
						/>
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, count, info, title }) => (
                    <Marker
                        key={name}
                        coordinates={coordinates}
                        onMouseEnter={() =>
                            handleMarkerEnter({ name, count, info, title }, coordinates)
                        }
                        onMouseLeave={handleMarkerLeave}
                    >
                        <circle
                            r={Math.log(count)} // Adjust the multiplier for appropriate sizing
                            fill="#F00"
                            stroke="#fff"
                            strokeWidth={0.5}
                        />
                    </Marker>
                ))}
            </ComposableMap>
            {hoveredMarkerInfo && (
                <div
                    style={{
                        position: "absolute",
                        top: infoBoxPosition[1],
                        left: infoBoxPosition[0],
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <p>{hoveredMarkerInfo.name}</p>
                    <p>Posts Number: {hoveredMarkerInfo.count}</p>
                    <p>Job Title: {hoveredMarkerInfo.info}</p>
                </div>
            )}
        </div>
    );
};
