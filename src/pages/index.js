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
            <h1 class="text-2xl font-bold sm:text-5xl">App</h1>
          </div>
          <p class="font-bold text-sm text-centre mt-2 sm:text-xl sm:leading-relaxed">
            Powered by{" "}
            <a href="https://github.com/alifmazli/rhb-next">RHB Next</a>
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Link class="my-36 sm:w-auto" href="/home">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Enter
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
