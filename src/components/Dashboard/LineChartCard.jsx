import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LineChartCard = ({ data, tooltipTitle, strokeColor }) => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "line",
        height: 140,
        colors: ["#ffffff"],
        toolbar: {
          show: false,
        },
      },

      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        show: false,
        type: "datetime",
        categories: [],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
          },
        },
      },
      yaxis: {
        show: false,
        title: {
          text: "Count",
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: [strokeColor],
      },
    },

    series: [
      {
        name: tooltipTitle,
        data: [],
      },
    ],
  });

  const updateChartData = () => {
    const formattedData = data?.map((item) => ({
      x: new Date(item.createdAt).getTime(),
      y: item.count,
    }));

    const categories = [];

    let currentDate = new Date("2023-01-01");

    while (currentDate <= new Date()) {
      categories.push(currentDate.getTime());
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setChartData({
      ...chartData,
      dataLabels: { enabled: false },
      options: {
        ...chartData.options,
        xaxis: {
          ...chartData.options.xaxis,
          categories: categories,
        },
      },
      series: [
        {
          ...chartData.series[0],
          data: formattedData,
        },
      ],
    });
  };

  useEffect(() => {
    updateChartData();
  }, [data]);

  return (
    <div className="flex justify-center items-center">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={80}
        width={180}
      />
    </div>
  );
};

export default LineChartCard;
