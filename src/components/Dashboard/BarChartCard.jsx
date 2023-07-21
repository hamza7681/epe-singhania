import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const profitData = [
  { day: "Monday", profit: 100 },
  { day: "Tuesday", profit: 200 },
  { day: "Wednesday", profit: 150 },
  { day: "Thursday", profit: 300 },
  { day: "Friday", profit: 250 },
  { day: "Saturday", profit: 180 },
  { day: "Sunday", profit: 220 },
];

const lossData = [
  { day: "Monday", loss: 50 },
  { day: "Tuesday", loss: 75 },
  { day: "Wednesday", loss: 100 },
  { day: "Thursday", loss: 80 },
  { day: "Friday", loss: 120 },
  { day: "Saturday", loss: 90 },
  { day: "Sunday", loss: 110 },
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BarChartCard = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "bar",
        height: 140,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true, // Show background horizontal grids
        borderColor: "#ebebeb", // Color of the grids
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: daysOfWeek,
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: true,
        title: {
          text: "Amount",
        },
      },
      colors: ["#304FFD", "#FD5D3E"],
      plotOptions: {
        bar: {
          columnWidth: "16px",
          endingShape: "rounded", // Round the top tip of the columns
        },
      },
    },
    series: [
      {
        name: "Profit",
        data: [],
      },
      {
        name: "Loss",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const formattedProfitData = daysOfWeek.map((day) => {
      const profitDataPoint = profitData.find((data) => data.day === day);
      return profitDataPoint ? profitDataPoint.profit : 0;
    });

    const formattedLossData = daysOfWeek.map((day) => {
      const lossDataPoint = lossData.find((data) => data.day === day);
      return lossDataPoint ? lossDataPoint.loss : 0;
    });

    setChartData((prevData) => ({
      ...prevData,
      series: [
        { ...prevData.series[0], data: formattedProfitData },
        { ...prevData.series[1], data: formattedLossData },
      ],
    }));
  }, []);

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={251}
    />
  );
};

export default BarChartCard;
