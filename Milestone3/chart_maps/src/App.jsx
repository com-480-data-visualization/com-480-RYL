import React, { useRef, useState } from "react";
import { PieChart } from "./Charts/PieChart";
import { BarChart } from "./Charts/BarChart";
import { PieChartWorkType } from "./Charts/PieChartWorkType";
import { SalariesChart } from "./Charts/SalariesChart";
import { BubbleChart } from "./Charts/BubbleChart";
import { PieChartBen } from "./Charts/PieChartBen";
import { MapBubbleChart } from "./Charts/MapBubble";

import { useEffect } from "react";

import "./App.css";

const dataFetched = require("./data.json");

const App = () => {
	const paraRef1 = useRef(null);
	const paraRef2 = useRef(null);
	const paraRef3 = useRef(null);
	const paraRef4 = useRef(null);
	const paraRef5 = useRef(null);

	const [data, setData] = useState([]);

	useEffect(() => {
		setData(dataFetched);
	}, []);

	return (
		<div>
			<header>
				<h1>Your Gateway to New Careers</h1>
			</header>
			<div className="container">
				<div className="navigation" style={styles.nav}>
					<button
						onClick={() =>
							window.scrollTo({
								top: paraRef1.current.offsetTop,
								behavior: "smooth",
							})
						}
						style={styles.btn}
					>
						Overview
					</button>
					<button
						onClick={() =>
							window.scrollTo({
								top: paraRef2.current.offsetTop,
								behavior: "smooth",
							})
						}
						style={styles.btn}
					>
						Search
					</button>
					<button
						onClick={() =>
							window.scrollTo({
								top: paraRef3.current.offsetTop,
								behavior: "smooth",
							})
						}
						style={styles.btn}
					>
						Trends
					</button>
					<button
						onClick={() =>
							window.scrollTo({
								top: paraRef4.current.offsetTop,
								behavior: "smooth",
							})
						}
						style={styles.btn}
					>
						Maps
					</button>
					<button
						onClick={() =>
							window.scrollTo({
								top: paraRef5.current.offsetTop,
								behavior: "smooth",
							})
						}
						style={styles.btn}
					>
						Sankey
					</button>
				</div>

				<div style={styles.box}>
					<div style={styles.container}>
						<div
							style={
								(styles.element,
								{
									width: "80%",
								})
							}
							ref={paraRef1}
						>
							<h2 style={styles.h2}>Overview</h2>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<PieChart data={data} style={{ width: "100" }} />
								<PieChartWorkType data={data} style={{ width: "100" }} />
								<PieChartBen data={data} style={{ width: "100" }} />
							</div>
						</div>
						<h2 style={styles.h2}>TEXT FOR THE xxxxxx</h2>
						<div
							style={{
								width: "60%",
							}}
						>
							<BubbleChart style={styles.chart} />
						</div>
						<div
							style={
								(styles.element,
								{
									width: "50%",
								})
							}
							ref={paraRef2}
						>
							<h2 style={styles.h2}>Search</h2>
							<SalariesChart data={data} />
						</div>
						<div
							style={
								(styles.element,
								{
									width: "50%",
								})
							}
							ref={paraRef3}
						>
							<h2 style={styles.h2}>Trends</h2>
							<BarChart data={data} style={{ width: "100" }} />
						</div>
						<div
							style={
								(styles.element,
								{
									width: "80%",
								})
							}
							ref={paraRef4}
						>
							<h2 style={styles.h2}>Maps</h2>
							<MapBubbleChart />
						</div>
						<div style={styles.element} ref={paraRef5}>
							<h2 style={styles.h2}>Sankey</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = {
	nav: {
		display: "flex",
		justifyContent: "start",
		padding: "10px",
		// backgroundColor: "#f1f1f1",
	},
	btn: {
		color: "white",
		padding: "10px",
		margin: "10px",
		border: "none",
		borderRadius: "8px",
		width: "100px",
	},
	container: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		overflowY: "hidden",
		alignItems: "center",
	},
	element: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "40px",
		textAlign: "center",
		width: "100%",
	},
	box: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	header: {
		textAlign: "center",
		marginBottom: "60px",
	},
	h2: {
		marginBottom: "60px",
		selfAlign: "center",
		fontSize: "2em",
		textAlign: "center",
		marginTop: "100px",
	},
	chart: {
		width: "300px", // Adjust this value to control the chart size
		height: "300px", // Adjust this value to control the chart size
	},
};

export default App;
