"use client";

import { Flex, Space } from "antd";
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import Count from "./Graph/Count";
import Chart from "./Graph/Chart";
import ChartGraph from "./Graph/Chart";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Website Traffic Sources",
  },
  data: [
    {
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 18, label: "Direct" },
        { y: 49, label: "Organic Search" },
        { y: 9, label: "Paid Search" },
        { y: 5, label: "Referral" },
        { y: 19, label: "Social" },
      ],
    },
  ],
};
const Dashboard = () => {
  return (
    <Flex style={{ width: "100%" }} justify="center" align="center" wrap="wrap">
      <Space>
        <Count />
        {/* <ChartGraph /> */}
      </Space>
    </Flex>
  );
};

export default Dashboard;
