import "./BarChartComp.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BarChartComp = ({data, title}) => {
  return (
    <div className="chart-container">
      <div className="sub-container">
        <BarChart
          width={600}
          height={450}
          data={data}
          margin={{
            top: 40,
            right: 35,
            left: 25,
            bottom: 30,
          }}
        >
          <text
            x={650 / 2}
            y={20}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="20">
              {title}{" "}
            </tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <XAxis tickLine = "true"/> */}
          <XAxis
            dataKey="name"
            textAnchor="end"
            sclaeToFit="true"
            verticalAnchor="start"
            interval={0}
            angle="-40"
            stroke="white"
            style={{
              fontSize: "0.95rem",
              // fontFamily: 'Times New Roman',
            }}
          />
          <text
            x={650 / 2}
            y={443}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="18">ITEM_ID</tspan>
          </text>
          <YAxis
            stroke="white"
            style={{
              fontSize: "1.0rem",
            }}
          />
          <text
            x={30}
            y={170}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="18">$'s</tspan>
          </text>
          <text
            x={30}
            y={190}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="18">Made</tspan>
          </text>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#C99700" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartComp;
