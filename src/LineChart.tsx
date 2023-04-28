import React from "react";
import ReactEcharts from "echarts-for-react";

interface LineChartProps {
  data: { Flavanoids: number; Ash: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const option = {
    xAxis: {
      type: "value",
      name: "Flavanoids",
    },
    yAxis: {
      type: "value",
      name: "Ash",
    },
    series: [
      {
        data: data.map((d) => [d.Flavanoids, d.Ash]),
        type: "line",
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default LineChart;
