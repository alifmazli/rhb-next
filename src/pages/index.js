import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "@components/Home/Header/Header";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <>
      <Head>
        <title>RHB Next</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section>
        {/* <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl justify-center text-center">
            <div className="flex justify-center content-center items-end">
              <Image
                src="/images/rhb.png"
                width={200}
                height={200}
                alt="RHB logo"
                placeholder="blur"
                blurDataURL="/images/rhb.png"
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
            <p className="text-xs mt-2">Best viewed on mobile devices, OR</p>
            <p className="text-xs mt-2">
              press <code>F12</code>, then <code>CTRL+SHIFT+M</code>
            </p>
            <p className="text-xs mt-2">to toggle mobile view</p>
          </div>
        </div> */}
        <div
          className="flex-col justify-center content-center items-center h-full w-full"
          style={{
            position: "relative",
            backgroundImage: "url('/images/uni-student.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.75,
          }}
        >
          <h2 className="py-2 px-2">Questioning if you spent too much?</h2>
          <p className="py-2 px-2">
            Compare your monthly budgets with students like you and stay updated
            with the best students deals!
          </p>
          <div className="py-2 px-2">
            <Button label="Get Started" />
          </div>
        </div>
      </section>

      <section className="mt-4 space-y-2">
        <h2>
          Money management made simple for students, with our hyperpersonalized
          mobile banking solution
        </h2>
        <p>
          Welcome to RHB NEXT, an innovative mobile banking solution designed
          specifically for students. It is designed to help you manage your
          finances more effectively by providing personalized budgeting
          recommendations based on your spending habits and those of similar
          students.
        </p>
        <p>
          RHB NEXT also offer a unique feature that recommends deals and
          discounts to help you save even more. With our app, managing your
          money has never been easier or more convenient. Try it out today and
          take control of your financial future!
        </p>
      </section>

      <section className="mt-4 space-y-2 text-center">
        <h2 className="">
          Compare and save more on your monthly budget for FREE in just 3 easy
          steps!
        </h2>
        <div className="">
          <div className="">
            <Image src="" alt="checklist image" />
            <p>Update your monthly budget</p>
          </div>

          <div className="">
            <Image src="" alt="cash image" />
            <p>
              Compare your budgeting with students like you within the community
            </p>
          </div>

          <div className="">
            <Image src="" alt="piggy bank image" />
            <p>
              Save more using the recommended deals based on your monthly
              expenses
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 space-y-2 text-center">
        <Header />
        <h2 className="">
          Simplify student finances with RHB NEXT Hyperpersonalized UniHub
        </h2>
        <p>
          Smart money moves for students, with our hyperpersonalized mobile
          banking
        </p>
        <Button label="Get Started" />
      </section>
    </>
  );
}
