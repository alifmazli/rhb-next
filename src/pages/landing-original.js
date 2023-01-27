import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
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
          <a href="https://github.com/alifmazli/rhb-next">RHB NEXT</a>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="my-36 sm:w-auto" href="/about">
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
    </div>
  );
};

export default Landing;
