import Head from "next/head";
import Header from "@/components/Home/Header/Header";
import Card from "@/components/Home/Card/Card";
import Services from "@/components/Home/Services/Services";
import FinHealthCheck from "@/components/Home/FinHealthCheck/FinHealthCheck";
import AppContext from "@/components/AppContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(AppContext);
  const nextServices = ["NextDeals", "NextEvents"];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={`Hello, ${context.userBudget.name}!`} />
      <p className="text-gray-400">Balance</p>
      <h2 className="mb-2 text-white font-semibold tracking-tight">
        RM 1,350.70
      </h2>
      <main className="">
        <Card />
        <Services title="RHB Next" services={nextServices} />
        <FinHealthCheck />
      </main>
    </>
  );
}
