import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import Link from "next/link";
import data from "./../../../constants/deals-data.js";
import Head from "next/head.js";

const NextDealsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  let i = null;
  const deal = data.map((item, index) => {
    if (item.id === id) {
      i = index;
      return item;
    }
  });

  return (
    <div className="px-4 py-2">
      <Head>
        <title>NextDeals</title>
        <meta name="description" content="NextDeals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header title="NextDeals" />
        <Image
          src={deal[i].images}
          className="image w-full h-auto shadow-xl rounded-lg"
          alt={deal[i].description}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={deal[i].images}
        />
        <h2 className="my-2">{deal[i].brandName}</h2>
        <h3>{deal[i].description}</h3>
        <Link href="/verify/sign-in">
          <button className="my-4 relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Redeem now with RHB NEXT
            </span>
          </button>
        </Link>
        <Link className="text-xs" href="#">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default NextDealsPage;
