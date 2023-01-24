import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Verify() {
  return (
    <>
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 bg-gray-100"
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
            RHB Student Deals and Events
          </h1>
          <small className="mt-6 text-sm font-light text-gray-900">
            Powered by RHB Next
          </small>

          <p className="mt-4 leading-relaxed text-gray-500">
            RHB Next would like to access:
            <ul>
              <li>- Access to your RHB account</li>
              <li>- View and manage your deals and events</li>
            </ul>
          </p>

          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="items-stretch col-2 col-span-6 sm:flex sm:items-center sm:gap-4">
              <button className="inline-block shrink-0 rounded-md border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                <Link href="/home/next-deals">Cancel</Link>
              </button>
              <button className="mx-2 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                <Link href="/home/next-deals">Approve</Link>
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Powered by RHB 
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
