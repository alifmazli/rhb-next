import { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const FinChart = () => {
  const finChartRef = useRef(null);

  const data = {
    labels: ["F&B", "Rental", "Entertainment", "Transport"],
    datasets: [
      {
        label: "Legend1",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [65, 59, 80, 81],
      },
      {
        label: "Legend2",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86, 1)",
        borderWidth: 1,
        data: [28, 48, 40, 19],
      },
    ],
  };

  const options = {
    type: "bar",
    data: data,
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //     scaleType: "category",
    //   },
    // },
  };

  useEffect(() => {
    if (finChartRef.current) {
      finChartRef.current.chartInstance.destroy();
    }
  }, []);

  return <Bar data={data} options={options} ref={finChartRef} />;
};

export default FinChart;
