import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Header from "@/components/Home/Header/Header";
import Card from "@/components/Home/Card/Card";
import Services from "@/components/Home/Services/Services";
import FinHealthCheck from "@/components/Home/FinHealthCheck/FinHealthCheck";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const expenses = 1000;
  const averageExpenses = 1500;
  const userRank = 100;
  const nextServices = ["NextDeals", "NextEvents"];
  const coreServices = ["Transfer", "Insurance", "Save"];

  return (
    <>
      <Head>
        <title>RHB Next: Home</title>
        <meta name="description" content="RHB Next: Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <header aria-label="Page Header" class="bg-[#0064AB]">
        <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-3 sm:px-6 lg:px-8">
          <h1 class="text-2xl font-bold text-white sm:text-3xl mb-4">
            RHB Next
          </h1>
          <div class="flex items-center justify-end gap-6">
            <div class="flex items-center gap-4">
              <span class="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-green-600">
                💳 RM 1,500.00
              </span>
              <div class="relative">
                <label class="sr-only" for="search">
                  {" "}
                  Search{" "}
                </label>

                <input
                  class="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="What are you looking for?"
                />

                <button
                  type="button"
                  class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span class="sr-only">Submit Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <span
              aria-hidden="true"
              class="block h-6 w-px rounded-full bg-gray-200"
            ></span>

            <a href="#" class="block shrink-0">
              <span class="sr-only">Profile</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>

          <div class="mt-8">
            <h1 class="text-xl font-bold text-white sm:text-xl">
              👋 Welcome Back, Alif!
            </h1>

            <p class="mt-1.5 text-sm text-gray-100">
              Looking for financial advice? Chat with our financial advisor now!
            </p>
          </div>
        </div>
      </header> */}

      <main className="">
        <Card />
        <Services title="RHB Next" services={nextServices} />
        {/* <Services title="RHB Core" services={coreServices} /> */}
        <FinHealthCheck />

        {/* <div className="bg-white rounded-lg shadow-md p-4 my-4">
          <h2 className="text-l font-bold text-gray-900 mb-4">
            Financial Health Check
          </h2>
          <h3 className="text-sm font-bold text-gray-900 mb-4">
            Your expenses: <small>RM </small> 1,000.00
          </h3>
          <div className="">
            <article class="flex items-end justify-between rounded-lg border-2 border-[#0064AB] bg-white p-6 mb-2">
              <div>
                <p class="text-sm text-gray-500">Food and Beverage</p>

                <p class="text-xl font-medium text-gray-900">
                  <small>RM </small>240.94
                </p>
              </div>

              <div className="col-2">
                <div class="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>

                  <span class="text-xs font-medium"> 67.81% </span>
                </div>
              </div>
            </article>
            <article class="flex items-end justify-between rounded-lg border-2 border-[#0064AB] bg-white p-6 mb-2">
              <div>
                <p class="text-sm text-gray-500">Miscellaneous</p>

                <p class="text-xl font-medium text-gray-900">
                  <small>RM </small>240.94
                </p>
              </div>

              <div className="col-2">
                <div class="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>

                  <span class="text-xs font-medium"> 67.81% </span>
                </div>
              </div>
            </article>
            <article class="flex items-end justify-between rounded-lg border-2 border-[#0064AB] bg-white p-6 mb-2">
              <div>
                <p class="text-sm text-gray-500">Entertainment</p>

                <p class="text-xl font-medium text-gray-900">
                  <small>RM </small>240.94
                </p>
              </div>

              <div className="col-1 row-1">
                <div class="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>

                  <span class="text-xs font-medium"> 67.81% </span>
                </div>
              </div>
            </article>
            <article class="flex items-end justify-between rounded-lg border-2 border-[#0064AB] bg-white p-6 mb-2">
              <div>
                <p class="text-sm text-gray-500">Transportations</p>

                <p class="text-xl font-medium text-gray-900">
                  <small>RM </small>240.94
                </p>
              </div>

              <div className="col-2">
                <div class="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>

                  <span class="text-xs font-medium"> 67.81% </span>
                </div>
              </div>
            </article>
          </div>
        </div> */}
      </main>
    </>
  );
}
