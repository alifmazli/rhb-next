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
        backgroundColor: "#68ecc3",
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
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        barThickness: 15,
        order: 1,
      },
    ],
  };

  const options = {
    options: {
      categoryPercentage: 0.4,
      barPercentage: 0.8,
      responsive: true,
      layout: {
        padding: 15,
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
          // boxWidth: 20,
          // boxHeight: 20,
          usePointStyle: true,
          pointStyle: "circle",
          color: "#000000",
        },
        title: {
          text: "Your Budget",
          display: true,
          color: "#000000",
          font: {
            size: 16,
            weight: "bold",
          },
          padding: {
            top: 10,
            right: 5,
            bottom: 10,
            left: 5,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#000000", font: { family: "monospace, Fira Code" } },
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
        ticks: { color: "#000000", font: { family: "monospace, Fira Code" } },
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
      <div className="fin-health-container mb-2 shadow-xl relative w-full inline-flex items-center justify-center p-0.5 bg-white">
        {/* <div className="fin-health-container flex w-full space-y-2 space-x-2 py-4 px-4 items-center text-left  shadow-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0"> */}
        <Bar data={data} height={350} options={options} />
        {/* </div> */}
      </div>
      <Link href="home/next-deals" className="flex justify-end">
        <button
          type="button"
          className="flex flex-col h-24 bg-blue-700 items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex items-center dark:focus:ring-blue-800"
        >
          Reduce your expenses by 10% now
        </button>
      </Link>
    </div>
  );
};

export default FinHealthCheck;
