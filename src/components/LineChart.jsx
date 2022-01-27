import React from "react";
import { Col, Row, Typography } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let index = 0; index < coinHistory?.data?.history?.length; index++) {
    const element = coinHistory?.data?.history[index];
    coinPrice.push(element.price);
    coinTimestamp.push(new Date(element.timestamp * 1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: `Price in USD`,
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price: ${currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
