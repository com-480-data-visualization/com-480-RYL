import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Trends",
		},
	},
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const BarChart = ({ data }) => {
	const barData = {
		labels,
		datasets: [
			{
				label: "Job Postings for the last 20 days",
				data: data.postings,
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};
	return <Bar options={options} data={barData} />;
};
