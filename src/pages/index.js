import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <section class="  ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl justify-center text-center">
          <div className="flex justify-center content-center items-end">
            <Image
              src="/../public/rhb/rhb-logo.png"
              width={200}
              height={200}
              alt="RHB logo"
            />
            <h1 class="text-3xl font-bold text-gray-900 sm:text-5xl">App</h1>
          </div>
          <p class="font-bold text-xl text-gray-600 mt-2 sm:text-xl sm:leading-relaxed">Powered by RHB Next</p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              class="block w-full rounded bg-blue-600 px-12 py-3 my-36 text-sm font-medium text-gray-100 shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/home"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
