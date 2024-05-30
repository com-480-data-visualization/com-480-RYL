import React from "react";

export const InfoBox = ({ info, position }) => {
	const { title, count, additionalInfo } = info;

	return (
		<div
			style={{
				position: "absolute",
				top: position[1] + 20,
				left: position[0] + 20, // Adjusting left position to move the box to the right of the marker
				backgroundColor: "#fff",
				padding: "10px",
				borderRadius: "5px",
				boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
				zIndex: 999,
				border: "1px solid #ccc",
				maxWidth: "200px",
			}}
		>
			<div style={{ fontWeight: "bold", marginBottom: "5px" }}>{title}</div>
			<div style={{ marginBottom: "5px" }}>Count: {count}</div>
		</div>
	);
};

export default InfoBox;
