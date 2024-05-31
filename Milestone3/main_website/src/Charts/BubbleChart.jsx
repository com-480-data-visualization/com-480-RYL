import React from "react";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
	scales: {
		y: {
			beginAtZero: true,
			ticks: {
				// Define your custom labels here
				callback: function (value, index, values) {
					// Assuming value is an index corresponding to your custom labels
					// Replace the below array with your custom labels
					const labels = [
						"Insight Global",
						"Jobot",
						"Vivian Health",
						"Aya Healthcare",
						"CareerStaff Unlimited",
						"City Lifestyle",
						"Cogent Communications",
						"Fusion Medical Staffing",
						"Google",
						"Verizon",
					];
					return labels[value];
				},
			},
		},
		x: {
			beginAtZero: true,
			ticks: {
				// Define your custom labels here
				callback: function (value, index, values) {
					// Assuming value is an index corresponding to your custom labels
					// Replace the below array with your custom labels
					const labels = [
						"Education",
						"Finance",
						"Healthcare",
						"Manufacturing",
						"Other",
						"Retail",
						"Technology",
						"Transportation",
					];
					return labels[value];
				},
			},
		},
	},
};

const initialData = require("../json/bubble_chart_data.json");

export const BubbleChart = () => {
	return <Bubble data={initialData} options={options} />;
};
