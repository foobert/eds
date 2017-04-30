import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function Bounty(props) {
    return (
        <div>
            <p>Rewarded: {props.bounty.rewarded}</p>
            <p>Collected: {props.bounty.collected}</p>
            <BarChart
                width={600} height={300} data={props.bounty.timeline}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="datestamp"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="rewarded" fill="#8884d8" />
                <Bar dataKey="collected" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
