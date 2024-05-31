import React from "react";
import { Chart } from "react-google-charts";
import data from "../json/sankey_json.json";

export const options = {};

export const Sankey = () => {
    
    const chartData = [["From", "To", "Weight"], ...data.map(item => [item.industry, item.skill, item.percentage])];

    return (
        <div style={styles.container}>
        <Chart chartType="Sankey" width="90%" height="500px" data={chartData} options={options} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        animation: 'fade-in 0.5s ease-out',
        marginLeft: '50px', 
    },
};
