import "./AnalyticsDashboard.css";
import Header from "../Header/Header";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: '111091',
    uv: 710,
  },
  {
    name: '111093',
    uv: 550,
  },
  {
    name: '111092',
    uv: 490,
  },
  {
    name: '111052',
    uv: 440,
  },
  {
    name: '111051',
    uv: 390,
  },
  {
    name: '111047',
    uv: 270,
  },
  {
    name: '111034',
    uv: 245,
  },
  {
    name: '111019',
    uv: 210,
  },
  {
    name: '111048',
    uv: 155,
  },
  {
    name: '111094',
    uv: 120,
  },
];

const data2 = [
  {
    name: '111091',
    uv: 395,
  },
  {
    name: '111092',
    uv: 385,
  },
  {
    name: '111034',
    uv: 245,
  },
  {
    name: '111052',
    uv: 220,
  },
  {
    name: '111047',
    uv: 215,
  },
  {
    name: '111051',
    uv: 110,
  },
  {
    name: '111011',
    uv: 60,
  },
  {
    name: '111053',
    uv: 55,
  },
  {
    name: '111048',
    uv: 50,
  },
  {
    name: '111043',
    uv: 50,
  },
];

const data3 = [
  {
    name: '111093',
    uv: 330,
  },
  {
    name: '111091',
    uv: 225,
  },
  {
    name: '111019',
    uv: 180,
  },
  {
    name: '111055',
    uv: 110,
  },
  {
    name: '111092',
    uv: 105,
  },
  {
    name: '111094',
    uv: 100,
  },
  {
    name: '111051',
    uv: 70,
  },
  {
    name: '111037',
    uv: 70,
  },
  {
    name: '111029',
    uv: 60,
  },
  {
    name: '111071',
    uv: 60,
  },
];

const data4 = [
  {
    name: '111093',
    uv: 220,
  },
  {
    name: '111051',
    uv: 210,
  },
  {
    name: '111052',
    uv: 165,
  },
  {
    name: '111048',
    uv: 105,
  },
  {
    name: '111091',
    uv: 90,
  },
  {
    name: '111073',
    uv: 60,
  },
  {
    name: '111046',
    uv: 55,
  },
  {
    name: '111036',
    uv: 35,
  },
  {
    name: '111039',
    uv: 35,
  },
  {
    name: '111002',
    uv: 35,
  },
];

const AnalyticsDashboard = () => {
  return (
    <div className="dash-container">
      <h1>Sales Analytics</h1>
      <Header />
      <div className="sub-container">
        <BarChart width={500} height={250} data={data} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={500 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Top 10 Profitable Merch Items (All 3 Nights) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="#8884d8" 
          style={{
            fontSize: '0.65rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={500 / 2} y={235} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">ITEM_ID</tspan>
          </text>
          <YAxis style={{
            fontSize: '0.8rem', }}/>
          <text x={32} y={100} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">$'s</tspan>
          </text>
          <text x={32} y={120} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </div>
    <div className="sub-container">
        <BarChart width={500} height={250} data={data2} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={500 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Top 10 Profitable Merch Items (Night 1) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="#8884d8" 
          style={{
            fontSize: '0.65rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={500 / 2} y={235} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">ITEM_ID</tspan>
          </text>
          <YAxis style={{
            fontSize: '0.8rem', }}/>
          <text x={32} y={100} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">$'s</tspan>
          </text>
          <text x={32} y={120} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </div>
    <div className="sub-container">
        <BarChart width={500} height={250} data={data3} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={500 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Top 10 Profitable Merch Items (Night 2) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="#8884d8" 
          style={{
            fontSize: '0.65rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={500 / 2} y={235} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">ITEM_ID</tspan>
          </text>
          <YAxis style={{
            fontSize: '0.8rem', }}/>
          <text x={32} y={100} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">$'s</tspan>
          </text>
          <text x={32} y={120} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </div>
    <div className="sub-container">
        <BarChart width={500} height={250} data={data4} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={500 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Top 10 Profitable Merch Items (Night 3) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="#8884d8" 
          style={{
            fontSize: '0.65rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={500 / 2} y={235} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">ITEM_ID</tspan>
          </text>
          <YAxis style={{
            fontSize: '0.8rem', }}/>
          <text x={32} y={100} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">$'s</tspan>
          </text>
          <text x={32} y={120} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </div>
    </div>
  );
};

export default AnalyticsDashboard;
