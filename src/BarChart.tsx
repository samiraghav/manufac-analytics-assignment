import React from "react";
import ReactEcharts from "echarts-for-react";

interface BarChartProps {
  data: { Alcohol: number; Magnesium: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const option = {
    xAxis: {
      type: "category",
      name: "Alcohol",
      data: data.map((d) => d.Alcohol),
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium",
    },
    series: [
      {
        data: data.map((d) => d.Magnesium),
        type: "bar",
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default BarChart;
