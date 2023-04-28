import React from "react";
import LineChart from "./LineChart.tsx";
import BarChart from "./BarChart.tsx";
import wineData from "./Wine-Data.json";

const App = () => {
  const alcoholData = wineData.reduce((acc, curr) => {
    const alcohol = curr.Alcohol;
    const magnesium = curr.Magnesium;
    if (!acc[alcohol]) {
      acc[alcohol] = [magnesium];
    } else {
      acc[alcohol].push(magnesium);
    }
    return acc;
  }, {});

  const barChartData = Object.entries(alcoholData).map(([alcohol, magnesium]) => ({
    Alcohol: Number(alcohol),
    Magnesium: Math.min(...magnesium),
  }));

  return (
    React.createElement("div", null,
      React.createElement("h2", null, "Line Chart"),
      React.createElement(LineChart, {
        data: wineData.map((d) => ({
          Flavanoids: Number(d.Flavanoids),
          Ash: Number(d.Ash),
        })),
      }),
      React.createElement("h2", null, "Bar Chart"),
      React.createElement(BarChart, { data: barChartData })
    )
  );
};

export default App;
