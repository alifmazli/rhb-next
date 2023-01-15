import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/NextDeals.module.css";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function NextDealsDetails() {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <main className="">
      {/* <div className="flex flex-col items-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">RHB App</h1>
        <p className="font-bold text-gray-300">Powered by RHBNext</p>
      </div> */}
      <Link href="/home" className="text-sm font-light ml-5">
        Home
      </Link>
      <h2 className="text-xl font-bold text-gray-900 px-5 py-5">Details</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/../public/next-deals/gocar.bmp"
            width={350}
            height={350}
            alt="Deal poster"
            className="mx-auto mb-3.5 rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-xl font-medium text-white-600">
            20% off Student Discount (capped at RM60)
          </h2>
          <p className="text-sm font-medium text-white-600">
            Upload your student ID & enjoy more savings for Round Trip bookings
            via the GoCar app.
          </p>
          <div className="flex justify-center my-4">
            {/* <button
              className="bg-white rounded-full p-2 hover:bg-gray-200"
              onClick={() => setIsFavorited(!isFavorited)}
            >
              {isFavorited ? (
                <IoIosHeart size={24} className="text-red-500" />
              ) : (
                <IoIosHeartEmpty size={24} className="text-gray-600" />
              )}
            </button> */}
          </div>
          <p className="text-sm text-gray-600">
            Eligible to all students with valid student ID (new GoCar users)
          </p>
          <div className="my-6 justify-self-stretch">
            <Link
              className="inline-block rounded border border-indigo-600 bg-[#0064AB] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/verify/checkout"
            >
              Redeem
            </Link>
          </div>
          <Link href="#" className="text-sm text-blue-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}
