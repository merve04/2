
import React from 'react';
import LineChartComponent from './LineChartComponent';

const ButtonChart = ({ chartData, addToChartData }) => {
    return (
        <div>
            <LineChartComponent chartData={chartData} />
            <button className="button" onClick={addToChartData}>Grafiği Güncelle</button>
        </div>
    );
};

export default ButtonChart;
