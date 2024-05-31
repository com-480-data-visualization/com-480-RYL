import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { blue, green, red, yellow, purple, orange } from "../colors";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChartBen = ({ data }) => {
	if (!data.benefits) {
		return <h1>Loading...</h1>;
	}
	const benefitData = {
		labels: Object.keys(data.benefits),
		datasets: [
			{
				label: "Benefits",
				data: Object.values(data.benefits),
				backgroundColor: [blue, green, red, yellow, purple, orange],
				borderColor: [blue, green, red, yellow, purple, orange],
				borderWidth: 1,
			},
		],
	};
	return (
		<div style={styles.container}>
			<h2 style={{ textAlign: "center" }}>Benefit</h2>
			<Pie data={benefitData} />
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
