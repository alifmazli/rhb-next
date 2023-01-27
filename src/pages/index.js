import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "@components/Home/Header/Header";
import Button from "@/components/Button";

export default function About() {
  return (
    <div className="">
      <Head>
        <title>RHB NEXT</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex px-4 py-2 justify-center">
        <Header />
      </div>

      <section>
        <div
          className="flex-col justify-center content-center items-center h-full w-full space-y-4"
          style={{
            position: "relative",
            backgroundImage: "url('/images/uni-student.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity: 1,
            // filter: "contrast(1.35) brightness(0.65)",
          }}
        >
          <h2 className="px-4 pt-4">
            Questioning if you&apos;re spending too much?
          </h2>
          <p className="px-4">
            Compare your monthly budgets with students like you and stay updated
            with the best students deals!
          </p>
          <div className="pb-4 px-4">
            <Button label="Get Started" link="/budget" />
          </div>
        </div>
      </section>

      <section className="px-4 py-4 space-y-4 bg-white">
        <h2 className="text-[#111827]">
          Money management made simple for students, with our hyperpersonalized
          mobile banking solution
        </h2>
        <p className="text-[#111827]">
          Welcome to RHB NEXT, an innovative mobile banking solution designed
          specifically for students. It is designed to help you manage your
          finances more effectively by providing personalized budgeting
          recommendations based on your spending habits and those of similar
          students.
        </p>
        <p className="text-[#111827]">
          RHB NEXT also offer a unique feature that recommends deals and
          discounts to help you save even more. With our app, managing your
          money has never been easier or more convenient. Try it out today and
          take control of your financial future!
        </p>
      </section>

      <section className="px-4 py-4 space-y-4 text-center">
        <h2 className="">
          Compare and save more on your monthly budget for FREE in just 3 easy
          steps!
        </h2>
        <div className="space-y-8 mx-12">
          <div className="flex flex-col items-center">
            <Image
              className="w-3/4 h-full"
              src="/images/checklist.png"
              alt="checklist image"
              width={100}
              height={100}
            />
            <h3>Update your monthly budget</h3>
          </div>

          <div className="flex flex-col items-center">
            <Image
              className="w-3/4 py-4"
              src="/images/money-bag.png"
              alt="checklist image"
              width={100}
              height={100}
            />
            <h3>
              Compare your budgeting with students like you within the community
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <Image
              className="w-3/4 py-4"
              src="/images/piggy-bank-cards.png"
              alt="checklist image"
              width={100}
              height={100}
            />
            <h3>
              Save more using the recommended deals based on your monthly
              expenses
            </h3>
          </div>
        </div>
      </section>

      <section className="mt-4 space-y-2 text-center bg-white">
        <div className="flex px-4 py-2 justify-center">
          <Header light="true" />
        </div>
        <h2 className="text-[#111827]">
          Simplify student finances with <br /> RHB NEXT Hyperpersonalized
          UniHub
        </h2>
        <p className="text-[#111827]">
          Smart money moves for students, with our hyperpersonalized mobile
          banking
        </p>
        <div className="flex py-4 px-4 items-center justify-center">
          <Button label="Get Started" link="/budget" />
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-3/5"
            src="/images/home-screenshot-ip13.png"
            width={100}
            height={100}
            alt="app screenshot"
          />
        </div>
      </section>
    </div>
  );
}
