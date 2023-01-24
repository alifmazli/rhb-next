import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Landing() {
  return (
    <>
      <Head>
        <title>RHB Next</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="  ">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl justify-center text-center">
            <div className="flex justify-center content-center items-end">
              <Image
                src="/../public/images/rhb.png"
                width={200}
                height={200}
                alt="RHB logo"
                placeholder="blur"
                blurDataURL="/../public/images/rhb.png"
              />
              <h1 className="text-2xl font-bold sm:text-5xl">App</h1>
            </div>
            <p className="font-bold text-sm text-centre mt-2 sm:text-xl sm:leading-relaxed">
              Powered by{" "}
              <a href="https://github.com/alifmazli/rhb-next">RHB Next</a>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link className="my-36 sm:w-auto" href="/budget">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Enter
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
