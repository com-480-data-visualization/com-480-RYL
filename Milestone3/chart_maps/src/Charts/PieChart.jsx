import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { blue, green, red, yellow, purple, orange } from "../colors";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ data }) => {
	if (!data.experience) {
		return <h1>Loading...</h1>;
	}
	const experienceData = {
		labels: Object.keys(data.experience),
		datasets: [
			{
				label: "Experience",
				data: Object.values(data.experience),
				backgroundColor: [blue, green, red, yellow, purple, orange],
				borderColor: [blue, green, red, yellow, purple, orange],
				borderWidth: 1,
			},
		],
	};
	return (
		<div style={styles.container}>
			<h2 style={{ textAlign: "center" }}>Experience</h2>
			<Pie data={experienceData} />
		</div>
	);
};

const styles = {
	container: {
		border: "1px solid lightgray",
		borderRadius: "12px",
		justifyContent: "center",
		width: "30%",
		padding: "10px",
		// paddingBottom: "60px",
	},
};
