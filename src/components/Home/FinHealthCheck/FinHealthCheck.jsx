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
import { Bar } from "react-chartjs-2";
import Link from "next/link";
import AppContext from "@/components/AppContext";
import { useContext } from "react";
import { poppins } from "@/pages/_app";

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

  const userBudgetData = [
    context.userBudget.food,
    context.userBudget.rental,
    context.userBudget.transportation,
    context.userBudget.entertainment,
    context.userBudget.others,
  ];

  const defaultBudgetData = [300, 700, 250, 150, 300];

  const categories = [
    "F&B",
    "Rental",
    "Transportation",
    "Entertainment",
    "Others",
  ];

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  const data = {
    labels: categories,
    datasets: [
      {
        data: userBudgetData,
        label: "You",
        borderRadius: 2,
        borderWidth: 2,
        borderSkipped: false,
        backgroundColor: "#192027",
        borderColor: "#68ecc3",
        barThickness: 15,
        order: 1,
      },
      {
        data: defaultBudgetData,
        label: "Students like you",
        borderRadius: 2,
        borderWidth: 2,
        borderSkipped: false,
        backgroundColor: "#272011",
        borderColor: "#ff6384",
        barThickness: 15,
        order: 1,
      },
    ],
  };

  const options = {
    options: {
      responsive: true,
      layout: {
        padding: 20,
      },
    },
    type: "bar",
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeInBounce",
    },
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          usePointStyle: true,
          pointStyle: "circle",
          color: "#FFFFFF",
        },
        title: {
          text: "Your Budget",
          display: true,
          color: "#FFFFFF",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#FFFFFF", font: { family: "Fira Code" } },
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Amount (MYR)",
          font: {
            family: "Fira Code",
          },
        },
      },
      y: {
        ticks: { color: "#FFFFFF", font: { family: "Fira Code" } },
        grid: {
          display: false,
        },
      },
    },
  };

  ChartJS.defaults.font.family = "monospace";

  return (
    <div className="py-8">
      <h2 className="mb-2">Financial Health Check</h2>
      <div className="flex space-y-2 space-x-2 mb-2 py-4 px-2 items-center text-left border rounded-lg">
        <Bar data={data} height={250} options={options} />
      </div>
      <Link href="/home/next-deals" className="">
        <h3 className="flex font-medium text-gray-300 justify-end">
          Reduce your expenses by 10%
        </h3>
      </Link>
    </div>
  );
};

export default FinHealthCheck;
