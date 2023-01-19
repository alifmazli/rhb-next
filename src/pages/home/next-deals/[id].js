import { useRouter } from "next/router";
import Image from "next/image";
import gocar from "@images/next-deals/gocar.bmp";
import Header from "@/components/Home/Header/Header";

const NextDealsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="">
      <Header title="NextDeals" />
      <Image
        src={gocar}
        class="w-full h-auto max-w-xl shadow-xl rounded-lg"
        alt="image description"
      />
      <h2 className="my-2">
        ID {id}: 20% off Student Discount (capped at RM60)
      </h2>
      <h3>
        Upload your student ID & enjoy more savings for Round Trip bookings via
        the GoCar app.
      </h3>
      <button class="my-4 relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Redeem now with RHB Next
        </span>
      </button>
      <a className="text-xs" href="#">
        Terms & Conditions
      </a>
    </div>
  );
};

export default NextDealsPage;
