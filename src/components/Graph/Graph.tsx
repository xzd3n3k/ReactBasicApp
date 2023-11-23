import React, {ReactElement} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MonthlyData } from "../../data";

interface IProps {
    monthlyData: Array<MonthlyData>;
}

const Graph = ({ monthlyData }: IProps): ReactElement => {
    return (
        <LineChart width={800} height={400} data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Profit" stroke="#ffc658" />
        </LineChart>
    );
};

export default Graph;
