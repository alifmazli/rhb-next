import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Checkout({ deal }) {
  return (
    <>
      <main
        aria-label="Main"
        className="flex px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 bg-gray-100"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <Link className="block text-blue-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              src="/../public/rhb/rhb-logo.png"
              width={100}
              height={100}
              alt="RHB logo"
            />
          </Link>

          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Checkout
          </h1>
          <p className="my-4 leading-relaxed text-gray-500">
            Confirm your redemption.
          </p>

          <div className=" rounded-lg border border-gray-200">
            <table className="overflow-visible justify-items-stretch min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    No.
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Item
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    1
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    50% Discount Spotify Premium
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                <Link href="/home/next-deals">Proceed</Link>
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0 align-right">
                Powered by RHB Next
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

// Checkout.getInitialProps = async (ctx) => {
//   const { id } = ctx.query;
//   const deal = await getDealById(id);
//   return { deal };
// };
