import Head from "next/head";
import Header from "@/components/Home/Header/Header";
import Deals from "@/components/Home/Services/Deals";
import categories from "@components/HorizontalFilter/categories.json";
import HorizontalFilter from "@/components/HorizontalFilter/HorizontalFilter";
import data from "../../../constants/deals-data.js";
// import images from "@images";
import NoSSR from "react-no-ssr";

export default function NextDeals() {
  return (
    <>
      <Head>
        <title>NextDeals</title>
        <meta name="description" content="NextDeals" />
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
      <NoSSR>
        <div className="space-y-2">
          {data.map((deal, index) => (
            <Deals data={deal} key={index} />
          ))}
        </div>
      </NoSSR>
    </>
  );
}
