import React, { useRef, useState } from "react";
import { PieChart } from "./Charts/PieChart";
import { BarChart } from "./Charts/BarChart";
import { PieChartWorkType } from "./Charts/PieChartWorkType";
import { SalariesChart } from "./Charts/SalariesChart";
import { BubbleChart } from "./Charts/BubbleChart";
import { PieChartBen } from "./Charts/PieChartBen";
import { MapBubbleChart } from "./Charts/MapBubble";
import { Sankey } from "./Charts/SankeyDiagram";

import { useEffect } from "react";

import "./App.css";

const dataFetched = require("./data.json");

const App = () => {
    const paraRef1 = useRef(null);
    const paraRef2 = useRef(null);
    const paraRef3 = useRef(null);
    const paraRef4 = useRef(null);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataFetched);
    }, []);

    const handleSearchButtonClick = () => {
        window.location.href = "https://renqingcm.github.io/data_visualization/";
    };

    return (
        <div>
            <header style={styles.header}>
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
                        onClick={handleSearchButtonClick}
                        style={styles.btn}
                    >
                        Search
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
                        Trends
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
                        Maps
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
							<div style={{ textAlign: "center" }}>
								<p style={{ textAlign: "center" }}>
									<strong>
										Explore the varied landscape of professional experience levels sought after in the job market.
									</strong>
								</p>
								<p style={{ textAlign: "center" }}>
									<strong>
										Delve into the dynamic spectrum of employment arrangements prevalent in the job landscape.
									</strong>
								</p>
								<p style={{ textAlign: "center" }}>
									<strong>
										Uncover the myriad of perks and incentives offered by employers, enriching the job-seeking experience.
									</strong>
								</p>
							</div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <PieChart data={data} style={{ width: "100" }} />
                                <PieChartWorkType data={data} style={{ width: "100" }} />
                                <PieChartBen data={data} style={{ width: "100" }} />
                            </div>
                        </div>
                        <h2 style={styles.h2}>Industry Leaders</h2>
						<div style={{ textAlign: "center" }}>
								<p style={{ textAlign: "center" }}>
									<strong>
									Embark on a visual journey through the forefront of industry leadership, where the dynamic interplay of major players like Aya Healthcare, Google, and Verizon reveals the pulsating heartbeat of the job market. 
									Each bubble represents a titan in their field, encapsulating their influence and competitive edge in the ever-evolving landscape of employment opportunities.
									</strong>
								</p>
							</div>
                        <div
                            style={{
                                width: "60%",
                            }}
                        >
                            <BubbleChart style={styles.chart} />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                            }}
                            ref={paraRef2}
                        >
                            <h2 style={styles.h2}>Trends</h2>
							<div style={{ textAlign: "center" }}>
								<p style={{ textAlign: "center" }}>
									<strong>
									Explore the evolving trends of the job market through a comprehensive analysis of job postings and salary data. Witness the fluctuating demand reflected in the numbers of postings, alongside the diverse salary ranges, painting a vivid picture of industry dynamics.
									</strong>
								
								</p>
							</div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "90%",
                                    marginBottom: "20px",
                                }}
                            >
                                <div style={{ width: "48%" }}>
                                    <SalariesChart data={data} style={{ width: "100%" }} />
                                </div>
                                <div style={{ width: "48%" }}>
                                    <BarChart data={data} style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            style={
                                (styles.element,
                                {
                                    width: "80%",
                                })
                            }
                            ref={paraRef3}
                        >
                            <h2 style={styles.h2}>Maps</h2>
							<div style={{ textAlign: "center" }}>
								<p style={{ textAlign: "center" }}>
									<strong>
									Discover detailed insights with our interactive map, allowing users to zoom in on specific regions and refine data display by selecting criteria like quantity or industry.
									Effortlessly explore geographical distribution of companies or industries across locations with just a click.
									</strong>
								</p>
								
							</div>
                            <MapBubbleChart />
                        </div>
                        <div style={styles.element} ref={paraRef4}>
                            <h2 style={styles.h2}>Sankey</h2>
							<div style={{ textAlign: "center" }}>
								<p style={{ textAlign: "center" }}>
									<strong>
									Explore our Sankey diagram showcasing the intricate relationship between various skills and industries.
									The width of the bands reflects the volume of transitions between categories, offering insights like the substantial flow of analysts into Information Technology & Services, converging into specialties like Consulting. 
									Hover over flows for additional details, including skill percentages for specific industries, required skills for positions, and proportions. 
									</strong>
								</p>
							</div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}></div>
                            <Sankey />
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
    },
    btn: {
        color: "white",
        padding: "10px",
        margin: "10px",
        border: "none",
        borderRadius: "8px",
        width: "100px",
    },
	componentContainer: {
        border: "1px solid lightgray", // Add border for component container
        borderRadius: "12px", // Optional: Add border radius for rounded corners
        padding: "20px", // Optional: Add padding for content inside the container
        marginBottom: "20px", // Optional: Add margin bottom for spacing between components
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        margin: "20px",
        border: "1px solid #ccc", // Add border style
        borderRadius: "10px", // Optional: Add border radius for rounded corners
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for depth effect
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
        color: "#0077b5", // Change the color to blue
    },
    h2: {
        marginBottom: "60px",
        fontSize: "2em",
        textAlign: "center",
        marginTop: "100px",
    },
    chart: {
        width: "300px",
        height: "300px",
    },
};

export default App;
