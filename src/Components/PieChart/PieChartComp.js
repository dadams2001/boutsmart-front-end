import "./PieChartComp.css";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";
import { useState, useCallback } from "react";

const COLORS = [
  "#00843D",
  "#C99700",
  "white",
  "#C99700",
  "white",
  "#C99700",
  "white",
  "#C99700",
  "#00843D",
  "#C99700",
];

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
    value,
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
      >
        <tspan fontSize="19">{`% of Sales: ${value}%`}</tspan>
      </text>
    </g>
  );
};



const PieChartComp = ({ data, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  
  return (
    <div className="chart-container">
      <div>
        <PieChart width={700} height={500}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={340}
            cy={190}
            innerRadius={90}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <text
            x={347}
            y={400}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="20">
              {title}{" "}
            </tspan>
          </text>
          <text
            x={345}
            y={165}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="20">ITEM_ID: </tspan>
          </text>
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartComp;
