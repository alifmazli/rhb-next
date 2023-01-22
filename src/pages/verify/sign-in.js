import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  function handleSubmit(event) {
    // event.preventDefault();
    // perform verification process
    setVerified(true);
  }

  useEffect(() => {
    if (verified) {
      router.push("/home");
    }
  }, [router, verified]);

  return (
    <div class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
      <div class="max-w-xl lg:max-w-3xl">
        <Link class="block text-blue-600" href="/">
          <span class="sr-only">Home</span>
          <Image
            src="/../public/rhb/rhb-logo.png"
            width={100}
            height={100}
            alt="RHB logo"
          />
        </Link>

        <h1 class="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          RHB Student Deals and Events
        </h1>
        <small className="mt-6 text-sm font-medium">
          Powered by RHB Next
        </small>

        <p class="mt-4 leading-relaxed text-gray-500">
          Verify your student status to enjoy more deals and events.
        </p>

        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium ">
              University Email (.edu.my)
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              placeholder="This is a demo app"
              class="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              placeholder="You may directly click on Sign In"
              class="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              <Link href="/home/next-deals">Sign in</Link>
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
              No account yet?{" "}
              <Link href="/verify/register" className="text-gray-500">
                Register
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
