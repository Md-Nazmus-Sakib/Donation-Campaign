import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";





const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(1)}%`}
        </text>
    );
};

const Statistic = () => {

    const [donation, setDonation] = useState(0);
    useEffect(() => {
        const cartFromLs = JSON.parse(localStorage.getItem('donate'));
        if (cartFromLs) {
            const yourDonation = (cartFromLs.length)
            setDonation(yourDonation)
        }
    }, [])


    const data = [
        { name: "Total Donation", value: (12 - donation) },
        { name: "Your Donation", value: donation },

    ];
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}

                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"

                    >

                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistic;