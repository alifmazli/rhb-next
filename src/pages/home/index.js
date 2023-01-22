import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Header from "@/components/Home/Header/Header";
import Card from "@/components/Home/Card/Card";
import Services from "@/components/Home/Services/Services";
import FinHealthCheck from "@/components/Home/FinHealthCheck/FinHealthCheck";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const nextServices = ["NextDeals", "NextEvents"];

  return (
    <>
      <Head>
        <title>RHB Next: Home</title>
        <meta name="description" content="RHB Next: Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Home" />
      <main className="">
        <Card />
        <Services title="RHB Next" services={nextServices} />
        <FinHealthCheck />
      </main>
    </>
  );
}
