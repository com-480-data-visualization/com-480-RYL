import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	interaction: {
		mode: "index",
		intersect: false,
	},
	stacked: false,
	plugins: {
		title: {
			display: true,
			text: "Chart.js Line Chart - Multi Axis",
		},
	},
	scales: {
		y: {
			type: "linear",
			display: true,
			position: "left",
		},
		y1: {
			type: "linear",
			display: true,
			position: "right",
			grid: {
				drawOnChartArea: false,
			},
		},
	},
};

export const SalariesChart = ({ data }) => {
	const salaries = data.salaries;
	if (!salaries) {
		return <h1>Loading...</h1>;
	}

	const transformedData = {
		labels: salaries.labels,
		datasets: [
			{
				label: "Min",
				// min data is the last element of each data array
				data: salaries.min,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				yAxisID: "y",
			},
			{
				label: "Max",
				// min data is the last element of each data array
				data: salaries.max,
				borderColor: "rgb(54, 162, 235)",
				backgroundColor: "rgba(54, 162, 235, 0.5)",
				yAxisID: "y",
			},
			{
				label: "Median",
				// min data is the last element of each data array
				data: salaries.median,
				borderColor: "rgb(75, 192, 192)",
				backgroundColor: "rgba(75, 192, 192, 0.5)",
				yAxisID: "y",
			},
		],
	};

	return <Line options={options} data={transformedData} />;
};
