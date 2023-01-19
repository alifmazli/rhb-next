import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Home/Header/Header";
import Deals from "@/components/Home/Services/Deals";
import categories from "@components/HorizontalFilter/categories.json";
import HorizontalFilter from "@/components/HorizontalFilter/HorizontalFilter";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const dealPosters = [
  {
    redbus: "/../public/images/next-deals/redbus.bmp",
    // "/../public/images/next-deals/breakout-room.bmp",
    // "/../public/images/next-deals/gocar.bmp",
    // "/../public/images/next-deals/sunwaypals.bmp",
    // "/../public/images/next-deals/windlab.bmp",
    // "/../public/images/next-deals/hauntu.bmp",
    // "/../public/images/next-deals/bus-online-ticket.bmp",
  },
];

const deals = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Elit irure ullamco sint cillum in cillum excepteur incididunt incididunt Lorem qui.",
    image: dealPosters[0],
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Minim non exercitation incididunt deserunt eiusmod irure amet mollit veniam anim eiusmod deserunt aliqua tempor.",
    image: dealPosters[1],
  },
];

export default function NextDeals() {
  return (
    <>
      <Head>
        <title>RHB NextDeals</title>
        <meta name="description" content="RHB NextDeals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="NextDeals for you" />
      {/* Displays list of horizontal filter based on categories.json */}
      <ul className="filter-container my-4 space-x-2">
        {categories.categories.map((category) => (
          <HorizontalFilter data={category} key={category} />
        ))}
      </ul>
      <div className="space-y-2">
        {deals.map((deal, index) => (
          <Deals data={deal} key={index} />
        ))}
      </div>
    </>
  );
}
