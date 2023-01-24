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
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";
import Link from "next/link";
import AppContext from "@/components/AppContext";
import { useContext } from "react";

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

const FinHealthCheck = () => {
  const context = useContext(AppContext);

  const userData = [
    context.userData["Food & Beverage"],
    context.userData["Rental"],
    context.userData["Transportation"],
    context.userData["Entertainment"],
  ];

  const categories = [
    "Food & Beverage",
    "Entertainment",
    "Rental",
    "Transport",
  ];

  const data = {
    labels: categories,
    datasets: [
      {
        data: userData,
        label: "You",
        borderRadius: 20,
        borderWidth: 2,
        borderSkipped: false,
        backgroundColor: "#ffb0c1",
        borderColor: "#ff6384",
        barThickness: 10,
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
          boxWidth: 5,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Your Spending",
          display: true,
          color: "#000",
          font: {
            family: `sans-serif`,
            size: 16,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      xAxis: {},
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
    <div className="py-8">
      <h2 className="mb-2">Financial Health Check</h2>
      <div className="space-y-2 space-x-2 my-2 items-center justify-content-between text-left bg-white rounded-lg">
        <i>Insert chart here</i>
        <Bar data={data} height={300} options={options} />
      </div>
      <Link href="#" className="">
        <h3 className="">Reduce your expenses by 10%</h3>
      </Link>
    </div>
  );
};

export default FinHealthCheck;
