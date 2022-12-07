import "./AnalyticsDashboard.css";
import Header from "../Header/Header";
import React, { useCallback, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const COLORS = ['#00843D', '#C99700', 'white', '#C99700','white','#C99700', 'white', '#C99700', '#00843D', '#C99700'];

const data = [
  {
    name: '111091',
    value: 710,
  },
  {
    name: '111093',
    value: 550,
  },
  {
    name: '111092',
    value: 490,
  },
  {
    name: '111052',
    value: 440,
  },
  {
    name: '111051',
    value: 390,
  },
  {
    name: '111047',
    value: 270,
  },
  {
    name: '111034',
    value: 245,
  },
  {
    name: '111019',
    value: 210,
  },
  {
    name: '111048',
    value: 155,
  },
  {
    name: '111094',
    value: 120,
  },
];

const data2 = [
  {
    name: '111091',
    value: 395,
  },
  {
    name: '111092',
    value: 385,
  },
  {
    name: '111034',
    value: 245,
  },
  {
    name: '111052',
    value: 220,
  },
  {
    name: '111047',
    value: 215,
  },
  {
    name: '111051',
    value: 110,
  },
  {
    name: '111011',
    value: 60,
  },
  {
    name: '111053',
    value: 55,
  },
  {
    name: '111048',
    value: 50,
  },
  {
    name: '111043',
    value: 50,
  },
];

const data3 = [
  {
    name: '111093',
    value: 330,
  },
  {
    name: '111091',
    value: 225,
  },
  {
    name: '111019',
    value: 180,
  },
  {
    name: '111055',
    value: 110,
  },
  {
    name: '111092',
    value: 105,
  },
  {
    name: '111094',
    value: 100,
  },
  {
    name: '111051',
    value: 70,
  },
  {
    name: '111037',
    value: 70,
  },
  {
    name: '111029',
    value: 60,
  },
  {
    name: '111071',
    value: 60,
  },
];

const data4 = [
  {
    name: '111093',
    value: 220,
  },
  {
    name: '111051',
    value: 210,
  },
  {
    name: '111052',
    value: 165,
  },
  {
    name: '111048',
    value: 105,
  },
  {
    name: '111091',
    value: 90,
  },
  {
    name: '111073',
    value: 60,
  },
  {
    name: '111046',
    value: 55,
  },
  {
    name: '111036',
    value: 35,
  },
  {
    name: '111039',
    value: 35,
  },
  {
    name: '111002',
    value: 35,
  },
];

const piedata = [
  {
    name: '111091',
    value: 14.07,
  },
  {
    name: '111093',
    value: 10.90,
  },
  {
    name: '111092',
    value: 9.71,
  },
  {
    name: '111052',
    value: 8.72,
  },
  {
    name: '111051',
    value: 7.73,
  },
  {
    name: '111047',
    value: 5.35,
  },
  {
    name: '111034',
    value: 4.86,
  },
  {
    name: '111019',
    value: 4.16,
  },
  {
    name: '111048',
    value: 3.07,
  },
  {
    name: '111094',
    value: 2.38,
  },
];

const piedata2 = [
  {
    name: '111091',
    value: 19.46,
  },
  {
    name: '111092',
    value: 18.97,
  },
  {
    name: '111034',
    value: 12.07,
  },
  {
    name: '111052',
    value: 10.84,
  },
  {
    name: '111047',
    value: 10.59,
  },
  {
    name: '111051',
    value: 5.42,
  },
  {
    name: '111011',
    value: 2.96,
  },
  {
    name: '111053',
    value: 2.71,
  },
  {
    name: '111048',
    value: 2.46,
  },
  {
    name: '111043',
    value: 2.46,
  },
];

const piedata3 = [
  {
    name: '111093',
    value: 17.65,
  },
  {
    name: '111091',
    value: 12.03,
  },
  {
    name: '111019',
    value: 9.63,
  },
  {
    name: '111055',
    value: 5.88,
  },
  {
    name: '111092',
    value: 5.62,
  },
  {
    name: '111094',
    value: 5.35,
  },
  {
    name: '111051',
    value: 3.74,
  },
  {
    name: '111037',
    value: 3.74,
  },
  {
    name: '111029',
    value: 3.21,
  },
  {
    name: '111071',
    value: 3.21,
  },
];

const piedata4 = [
  {
    name: '111093',
    value: 19.21,
  },
  {
    name: '111051',
    value: 18.34,
  },
  {
    name: '111052',
    value: 14.41,
  },
  {
    name: '111048',
    value: 9.17,
  },
  {
    name: '111091',
    value: 7.86,
  },
  {
    name: '111073',
    value: 5.24,
  },
  {
    name: '111046',
    value: 4.80,
  },
  {
    name: '111036',
    value: 3.06,
  },
  {
    name: '111039',
    value: 3.06,
  },
  {
    name: '111002',
    value: 3.06,
  },
];

const gendata1 = [
  {
    name: 'MENS',
    value: 2590,
  },
  {
    name: 'WOMENS',
    value: 1225,
  },
  {
    name: 'UNISEX',
    value: 1035,
  },
  {
    name: 'YOUTH',
    value: 50,
  },
];

const gendata2 = [
  {
    name: 'MENS',
    value: 1225,
  },
  {
    name: 'WOMENS',
    value: 395,
  },
  {
    name: 'UNISEX',
    value: 380,
  },
];

const gendata3 = [
  {
    name: 'MENS',
    value: 990,
  },
  {
    name: 'WOMENS',
    value: 375,
  },
  {
    name: 'UNISEX',
    value: 370,
  },
  {
    name: 'YOUTH',
    value: 20,
  }
];

const gendata4 = [
  {
    name: 'WOMENS',
    value: 445,
  },
  {
    name: 'MENS',
    value: 375,
  },
  {
    name: 'UNISEX',
    value: 285,
  },
  {
    name: 'YOUTH',
    value: 30,
  }
];

const genpiedata1 = [
  {
    name: 'MENS',
    value: 51.34,
  },
  {
    name: 'WOMENS',
    value: 24.28,
  },
  {
    name: 'UNISEX',
    value: 20.52,
  },
  {
    name: 'YOUTH',
    value: 0.99,
  },
];

const genpiedata2 = [
  {
    name: 'MENS',
    value: 60.34,
  },
  {
    name: 'WOMENS',
    value: 19.46,
  },
  {
    name: 'UNISEX',
    value: 18.72,
  },
];

const genpiedata3 = [
  {
    name: 'MENS',
    value: 52.94,
  },
  {
    name: 'WOMENS',
    value: 20.05,
  },
  {
    name: 'UNISEX',
    value: 19.79,
  },
  {
    name: 'YOUTH',
    value: 1.07,
  }
];

const genpiedata4 = [
  {
    name: 'WOMENS',
    value: 39.74,
  },
  {
    name: 'MENS',
    value: 32.75,
  },
  {
    name: 'UNISEX',
    value: 24.89,
  },
  {
    name: 'YOUTH',
    value: 2.62,
  }
];

const catdata1 = [
  {
    name: "SHIRTS",
    value: 2320,
  },
  {
    name: "SWEATSHIRT",
    value: 2095,
  },
  {
    name: "SHORTS",
    value: 125,
  },
  {
    name: "SWEATPANTS",
    value: 120,
  },
  {
    name: "ACCESSORIES",
    value: 120,
  },
  {
    name: "OUTERWEAR",
    value: 110,
  },
  {
    name: "LEGGINGS",
    value: 10,
  },
];

const catdata2 = [
  {
    name: "SHIRTS",
    value: 1240,
  },
  {
    name: "SWEATSHIRT",
    value: 700,
  },
  {
    name: "SHORTS",
    value: 50,
  },
  {
    name: "LEGGINGS",
    value: 10,
  },
];

const catdata3 = [
  {
    name: "SHIRTS",
    value: 795,
  },
  {
    name: "SWEATSHIRT",
    value: 640,
  },
  {
    name: "OUTERWEAR",
    value: 110,
  },
  {
    name: "ACCESSORIES",
    value: 100,
  },
  {
    name: "SWEATPANTS",
    value: 60,
  },
  {
    name: "SHORTS",
    value: 50,
  },
];

const catdata4 = [
  {
    name: "SWEATSHIRT",
    value: 755,
  },
  {
    name: "SHIRTS",
    value: 285,
  },
  {
    name: "SWEATPANTS",
    value: 60,
  },
  {
    name: "SHORTS",
    value: 25,
  },
  {
    name: "ACCESSORIES",
    value: 20,
  },
];

const catpiedata1 = [
  {
    name: "SHIRTS",
    value: 45.99,
  },
  {
    name: "SWEATSHIRT",
    value: 41.53,
  },
  {
    name: "SHORTS",
    value: 2.48,
  },
  {
    name: "SWEATPANTS",
    value: 2.38,
  },
  {
    name: "ACCESSORIES",
    value: 2.38,
  },
  {
    name: "OUTERWEAR",
    value: 2.18,
  },
  {
    name: "LEGGINGS",
    value: 0.20,
  },
];

const catpiedata2 = [
  {
    name: "SHIRTS",
    value: 61.08,
  },
  {
    name: "SWEATSHIRT",
    value: 34.48,
  },
  {
    name: "SHORTS",
    value: 2.46,
  },
  {
    name: "LEGGINGS",
    value: 0.49,
  },
];

const catpiedata3 = [
  {
    name: "SHIRTS",
    value: 42.51,
  },
  {
    name: "SWEATSHIRT",
    value: 34.22,
  },
  {
    name: "OUTERWEAR",
    value: 5.88,
  },
  {
    name: "ACCESSORIES",
    value: 5.35,
  },
  {
    name: "SWEATPANTS",
    value: 3.21,
  },
  {
    name: "SHORTS",
    value: 2.67,
  },
];

const catpiedata4 = [
  {
    name: "SWEATSHIRT",
    value: 65.94,
  },
  {
    name: "SHIRTS",
    value: 24.89,
  },
  {
    name: "SWEATPANTS",
    value: 5.24,
  },
  {
    name: "SHORTS",
    value: 2.18,
  },
  {
    name: "ACCESSORIES",
    value: 1.75,
  },
];


// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${value}%`}
//     </text>
//   );
// };

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fontSize="25" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="white"
      ><tspan fontSize="19">{`% of Sales: ${value}%`}</tspan></text>
    </g>
  );
};

const AnalyticsDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className="dash-container">
      <h1>Sales Analytics</h1>
      <Header />
      <div className="sub-container">
        <BarChart width={600} height={450} data={data} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (All 3 Nights) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={443} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">ITEM_ID</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={piedata}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={347} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (All 3 Nights) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">ITEM_ID: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={gendata1} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (All 3 Nights) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "middle" sclaeToFit="true" verticalAnchor= "start" interval={0} stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={423} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">GENDER</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={genpiedata1}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (All 3 Nights) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">GENDER: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={catdata1} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (All 3 Nights) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" angle= "-15" interval={0} stroke="white" 
          style={{
            fontSize: '0.85rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={443} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">CATEGORY</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={catpiedata1}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (All 3 Nights) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">CATEGORY: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={data2} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (Night 1) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={443} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">ITEM_ID</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={piedata2}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (Night 1) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">ITEM_ID: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={gendata2} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (Night 1) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "middle" sclaeToFit="true" verticalAnchor= "start" interval={0} stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={423} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">GENDER</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={genpiedata2}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (Night 1) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">GENDER: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={catdata2} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (Night 1) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "middle" sclaeToFit="true" verticalAnchor= "start" interval={0} stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={423} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">CATEGORY</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={catpiedata2}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (Night 1) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">CATEGORY: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={data3} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (Night 2) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={443} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">ITEM_ID</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={piedata3}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (Night 2) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">ITEM_ID: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={gendata3} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (Night 2) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "middle" sclaeToFit="true" verticalAnchor= "start" interval={0} stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={423} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">GENDER</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={genpiedata3}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (Night 2) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">GENDER: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={catdata3} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (Night 2) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" angle="-15" interval={0} stroke="white" 
          style={{
            fontSize: '0.80rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <text x={650 / 2} y={440} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">CATEGORY</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={catpiedata3}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (Night 2) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">CATEGORY: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={data4} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (Night 3) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start" interval={0} angle= "-40" stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={443} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">ITEM_ID</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={piedata4}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Top 10 Profitable Merch Items (Night 3) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">ITEM_ID: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={gendata4} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (Night 3) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "middle" sclaeToFit="true" verticalAnchor= "start" interval={0} stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={423} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">GENDER</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={genpiedata4}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Gender (Night 3) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">GENDER: </tspan>
      </text>
    </PieChart>
    </div>
    <div>
        <BarChart width={600} height={450} data={catdata4} margin={{
                        top: 40,
                        right: 35,
                        left: 25,
                        bottom: 30,
                    }}>
          <text x={650 / 2} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (Night 3) </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <XAxis tickLine = "true"/> */}
          <XAxis dataKey="name" textAnchor= "middle" sclaeToFit="true" verticalAnchor= "start" interval={0} stroke="white" 
          style={{
            fontSize: '0.95rem',
            // fontFamily: 'Times New Roman',
          }}/>
          <text x={650 / 2} y={423} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">CATEGORY</tspan>
          </text>
          <YAxis stroke = "white" style={{
            fontSize: '1.0rem', }}/>
          <text x={30} y={170} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text x={30} y={190} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
    </div>
    <div>
    <PieChart width={700} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={catpiedata4}
        cx={340}
        cy={190}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x={345} y={400} fill="white" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="20">Revenue Divided By Category (Night 3) </tspan>
          </text>
      <text x={345} y={165} fill="white" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="20">CATEGORY: </tspan>
      </text>
    </PieChart>
    </div>
    </div>
  );
  };

export default AnalyticsDashboard;
