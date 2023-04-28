import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import wineData from "./Wine-Data.json";

const App = () => {
  // Reduce the wineData array to an object that groups the Magnesium values by Alcohol value
  const alcoholData: { [alcohol: number]: number[] } = wineData.reduce(
    (
      acc: { [alcohol: number]: number[] },
      curr: { Alcohol: number; Magnesium: number }
    ) => {
      const alcohol = curr.Alcohol;
      const magnesium = curr.Magnesium;
      if (!acc[alcohol]) {
        acc[alcohol] = [magnesium];
      } else {
        acc[alcohol].push(magnesium);
      }
      return acc;
    },
    {}
  );

  // Convert the alcoholData object to an array of objects with the minimum Magnesium value for each Alcohol value
  const barChartData = Object.entries(alcoholData).map(
    ([alcohol, magnesium]) => ({
      Alcohol: Number(alcohol),
      Magnesium: Math.min(...(magnesium as number[])),
    })
  );

  // Render the LineChart and BarChart components
  return (
    <div>
      <h2>Line Chart</h2>
      <LineChart
        // Map the wineData array to an array of objects with Flavanoids and Ash values as numbers
        data={wineData.map(
          (d: { Flavanoids: string | number; Ash: string | number }) => ({
            Flavanoids: Number(d.Flavanoids),
            Ash: Number(d.Ash),
          })
        )}
      />
      <h2>Bar Chart</h2>
      <BarChart data={barChartData} />
    </div>
  );
};

export default App;
