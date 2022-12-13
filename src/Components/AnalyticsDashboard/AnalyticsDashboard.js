import "./AnalyticsDashboard.css";
import Header from "../Header/Header";
import BarChartComp from "../BarChart/BarChartComp";
import PieChartComp from "../PieChart/PieChartComp";
import { cleanData } from "../../Common/Services/FilterServices";
import { useState, useEffect } from "react";

const AnalyticsDashboard2 = () => {
  const [loaded, setLoaded] = useState(false);

  // Initialize bar chart totals
  const [barData1, setBarData1] = useState([]);
  const [barData2, setBarData2] = useState([]);
  const [barData3, setBarData3] = useState([]);
  const [barData4, setBarData4] = useState([]);

  // Initialize pie chart totals
  const [pieData1, setPieData1] = useState([]);
  const [pieData2, setPieData2] = useState([]);
  const [pieData3, setPieData3] = useState([]);
  const [pieData4, setPieData4] = useState([]);

  // Initialize bar chart gender
  const [barGen1, setBarGen1] = useState([]);
  const [barGen2, setBarGen2] = useState([]);
  const [barGen3, setBarGen3] = useState([]);
  const [barGen4, setBarGen4] = useState([]);

  // Initialize pie chart gender
  const [pieGen1, setPieGen1] = useState([]);
  const [pieGen2, setPieGen2] = useState([]);
  const [pieGen3, setPieGen3] = useState([]);
  const [pieGen4, setPieGen4] = useState([]);

  // Initialize bar chart category
  const [barCat1, setBarCat1] = useState([]);
  const [barCat2, setBarCat2] = useState([]);
  const [barCat3, setBarCat3] = useState([]);
  const [barCat4, setBarCat4] = useState([]);

  // Initialize pie chart category
  const [pieCat1, setPieCat1] = useState([]);
  const [pieCat2, setPieCat2] = useState([]);
  const [pieCat3, setPieCat3] = useState([]);
  const [pieCat4, setPieCat4] = useState([]);

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_URL + "analytics")
        .then((response) => response.json())
        .then((data) => {
          // Set Bar Chart Data for Total Sales
          setBarData1(cleanData(data.bar_chart_data1));
          setBarData2(cleanData(data.bar_chart_data2));
          setBarData3(cleanData(data.bar_chart_data4));
          setBarData4(cleanData(data.bar_chart_data4));

          // Set Pie Chart Data for Total Sales
          setPieData1(cleanData(data.pie_chart_data5));
          setPieData2(cleanData(data.pie_chart_data6));
          setPieData3(cleanData(data.pie_chart_data7));
          setPieData4(cleanData(data.pie_chart_data8));

          // Set Bar Chart Data for Gender
          setBarGen1(cleanData(data.gender_bar_chart1));
          setBarGen2(cleanData(data.gender_bar_chart2));
          setBarGen3(cleanData(data.gender_bar_chart4));
          setBarGen4(cleanData(data.gender_bar_chart4));

          // Set Pie Chart Data for Gender
          setPieGen1(cleanData(data.gender_pie_chart1));
          setPieGen2(cleanData(data.gender_pie_chart2));
          setPieGen3(cleanData(data.gender_pie_chart3));
          setPieGen4(cleanData(data.gender_pie_chart4));

          // Set Bar Chart Data for Category
          setBarCat1(cleanData(data.category_bar_chart1));
          setBarCat2(cleanData(data.category_bar_chart2));
          setBarCat3(cleanData(data.category_bar_chart4));
          setBarCat4(cleanData(data.category_bar_chart4));

          // Set Pie Chart Data for Category
          setPieCat1(cleanData(data.category_pie_chart1));
          setPieCat2(cleanData(data.category_pie_chart2));
          setPieCat3(cleanData(data.category_pie_chart3));
          setPieCat4(cleanData(data.category_pie_chart4));

          setLoaded(true);
        })
        .then(() => setLoaded(true))
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="dash-container">
      <h1>Sales Analytics</h1>
      <Header />
      {loaded ? (
        <div>
          <h2>All 3 Nights:</h2>
          <BarChartComp
            data={barData1}
            title={"Top 10 Profitable Merch Items (All 3 Nights)"}
          />
          <PieChartComp
            data={pieData1}
            title={"Top 10 Profitable Merch Items (All 3 Nights)"}
          />
          <BarChartComp
            data={barGen1}
            title={"Revenue Divided by Gender (All 3 Nights)"}
          />
          <PieChartComp
            data={pieGen1}
            title={"revenue Divided by Gender (All 3 Nights)"}
          />
          <BarChartComp
            data={barCat1}
            title={"Revenue Divided by Category (All 3 Nights)"}
          />
          <PieChartComp
            data={pieCat1}
            title={"Revenue Divided by Category (All 3 Nights)"}
          />

          <h2>Night 1:</h2>
          <BarChartComp
            data={barData2}
            title={"Top 10 Profitable Merch Items (Night 1)"}
          />
          <PieChartComp
            data={pieData2}
            title={"Top 10 Profitable Merch Items (Night 1)"}
          />
          <BarChartComp
            data={barGen2}
            title={"Revenue Divided by Gender (Night 1)"}
          />
          <PieChartComp
            data={pieGen2}
            title={"revenue Divided by Gender (Night 1)"}
          />
          <BarChartComp
            data={barCat2}
            title={"Revenue Divided by Category (Night 1)"}
          />
          <PieChartComp
            data={pieCat2}
            title={"Revenue Divided by Category (Night 1)"}
          />

          <h2>Night 2:</h2>
          <BarChartComp
            data={barData3}
            title={"Top 10 Profitable Merch Items (Night 2)"}
          />
          <PieChartComp
            data={pieData3}
            title={"Top 10 Profitable Merch Items (Night 2)"}
          />
          <BarChartComp
            data={barGen3}
            title={"Revenue Divided by Gender (Night 2)"}
          />
          <PieChartComp
            data={pieGen3}
            title={"revenue Divided by Gender (Night 2)"}
          />
          <BarChartComp
            data={barCat3}
            title={"Revenue Divided by Category (Night 2)"}
          />
          <PieChartComp
            data={pieCat3}
            title={"Revenue Divided by Category (Night 2)"}
          />

          <h2>Night 3:</h2>
          <BarChartComp
            data={barData4}
            title={"Top 10 Profitable Merch Items (Night 3)"}
          />
          <PieChartComp
            data={pieData4}
            title={"Top 10 Profitable Merch Items (Night 3)"}
          />
          <BarChartComp
            data={barGen4}
            title={"Revenue Divided by Gender (Night 3)"}
          />
          <PieChartComp
            data={pieGen4}
            title={"revenue Divided by Gender (Night 3)"}
          />
          <BarChartComp
            data={barCat4}
            title={"Revenue Divided by Category (Night 3)"}
          />
          <PieChartComp
            data={pieCat4}
            title={"Revenue Divided by Category (Night 3)"}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AnalyticsDashboard2;
