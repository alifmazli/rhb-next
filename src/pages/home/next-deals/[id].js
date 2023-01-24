import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import Link from "next/link";
import data from "../../../constants/deals-data.js";
import Head from "next/head.js";
import NoSSR from "react-no-ssr";

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

  console.log(typeof deal[i].images);

  const imageRelativePath = deal[i].images;

  return (
    <>
      <Head>
        <title>NextDeals</title>
        <meta name="description" content="NextDeals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSSR>
        <div className="">
          <Header title="NextDeals" />
          <Image
            src="/../public/images/next-deals-img/gocar.bmp"
            className="image w-full h-auto shadow-xl rounded-lg"
            alt={deal[i].description}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/../public/images/next-deals-img/gocar.bmp"
          />
          <h2 className="my-2">{deal[i].brandName}</h2>
          <h3>{deal[i].description}</h3>
          <Link href="/verify/sign-in">
            <button className="my-4 relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Redeem now with RHB Next
              </span>
            </button>
          </Link>
          <Link className="text-xs" href="#">
            Terms & Conditions
          </Link>
        </div>
      </NoSSR>
    </>
  );
};

export default NextDealsPage;
