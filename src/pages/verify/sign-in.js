import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <Link className="block text-blue-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              src="/images/rhb.png"
              width={100}
              height={100}
              alt="RHB logo"
              placeholder="blur"
              blurDataURL="/images/rhb.png"
            />
          </Link>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            RHB Student Deals and Events
          </h1>
          <small className="mt-6 text-sm font-medium">
            Powered by RHB NEXT
          </small>

          <p className="mt-4 leading-relaxed text-gray-500">
            Verify your student status to enjoy more deals and events.
          </p>

          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label for="Email" className="block text-sm font-medium ">
                University Email (.edu.my)
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                placeholder="This is a demo app"
                className="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                for="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                placeholder="You may directly click on Sign In"
                className="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <Link href="/home/next-deals">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Sign in
                </button>
              </Link>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
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
    </>
  );
}
