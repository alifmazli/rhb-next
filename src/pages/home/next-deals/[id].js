import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import Link from "next/link";
import data from "../../../constants/deals-data.js";

const NextDealsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  let i = null;
  const deal = data.map((deal, index) => {
    if (deal.id === id) {
      i = index;
      return deal;
    }
  });

  console.log(deal);

  return (
    <div className="">
      <Header title="NextDeals" />
      <Image
        src={deal[i].images[0]}
        className="w-full h-auto max-w-xl shadow-xl rounded-lg"
        alt="image description"
        width={500}
        height={500}
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
  );
};

export default NextDealsPage;
