"use client"
import React from 'react';
import { Chart } from 'react-google-charts';
function GoogleChartExample() {
    const data = [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
    ];

    const options = {
        title: 'My Daily Activities',
    };

    return (
        <div>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

export default GoogleChartExample;
