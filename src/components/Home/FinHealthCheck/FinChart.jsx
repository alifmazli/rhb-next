import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";

const FinChart = () => {
  const data = {
    labels: ["F&B", "Entertainment", "Rental", "Transport"],
    datasets: [
      {
        label: "You",
        borderRadius: 30,
        data: [100, 200, 150, 175],
        backgroundColor: "#64c89d",
        barThickness: 10,
      },
      {
        label: "Students like you",
        borderRadius: 20,
        data: [150, 100, 200, 125],
        backgroundColor: "#295ff9",
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Monthly Expenses",
          display: true,
          color: "#000",
          font: {
            // family: "sans-serif",
            size: 16,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      xAxis: {
        max: 250,
      },
      yAxis: {
        // max: 1,
        display: false,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
  };

  return (
    <div className="space-y-2 space-x-2 items-center justify-content-between text-left bg-white rounded-lg">
      <i>Insert chart here</i>
      <Bar data={data} height={300} options={options} />
    </div>
  );
};

export default FinChart;
