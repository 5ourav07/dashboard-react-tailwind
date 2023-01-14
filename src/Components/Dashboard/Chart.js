import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            "name": "Nov 1",
            "uv": 4000
        },
        {
            "name": "Nov 4",
            "uv": 3000
        },
        {
            "name": "Nov 8",
            "uv": 2000
        },
        {
            "name": "Nov 12",
            "uv": 2780
        },
        {
            "name": "Nov 16",
            "uv": 1890
        },
        {
            "name": "Nov 20",
            "uv": 2390
        },
        {
            "name": "Nov 24",
            "uv": 3490
        }
    ]

    return (
        <div>
            <ResponsiveContainer width="100%" height="80%" aspect={3}>
                <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;