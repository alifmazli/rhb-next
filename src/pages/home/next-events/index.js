import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const eventPosters = [
  "/../public/next-events/hack-1.bmp",
  "/../public/next-events/hack-2.bmp",
  "/../public/next-events/hack-3.bmp",
  "/../public/next-events/hack-4.bmp",
];

export default function NextEvents() {
  return (
    <>
      <Head>
        <title>NextEvents for you</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-4">
        <Link href="/home" className="text-sm font-light ml-8">
          Home
        </Link>
        <h1 class="ml-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          RHB NextEvents
        </h1>
        <small className="ml-8 mt-6 text-sm font-light text-gray-900">
          Powered by RHB Next
        </small>
      </div>
      <main
        aria-label="Main"
        className="flex items-center justify-center px-5 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <section>
          <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Personalised events for you
              </h2>

              <p class="max-w-md mt-4 text-gray-500">
                Browse exciting student events!
              </p>
            </header>

            <div class="flex items-center justify-between mt-8">
              <div class="flex border border-gray-100 divide-x divide-gray-100 rounded">
                <button class="inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </button>

                <button class="inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <label for="SortBy" class="sr-only">
                  SortBy
                </label>

                <select
                  id="SortBy"
                  class="h-10 text-sm border-gray-300 rounded"
                >
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>
            </div>

            <ul class="grid gap-2 mt-4 grid-cols-2">
              <li>
                <Link
                  href="/home/next-deals/details"
                  class="block overflow-hidden group"
                >
                  <Image
                    src={eventPosters[0]}
                    alt=""
                    class="h-[10rem] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/home/next-deals/details"
                  class="block overflow-hidden group"
                >
                  <Image
                    src={eventPosters[1]}
                    alt=""
                    class="h-[10rem] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/home/next-deals/details"
                  class="block overflow-hidden group"
                >
                  <Image
                    src={eventPosters[2]}
                    alt=""
                    class="h-[10rem] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/home/next-deals/details"
                  class="block overflow-hidden group"
                >
                  <Image
                    src={eventPosters[3]}
                    alt=""
                    class="h-[10rem] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}