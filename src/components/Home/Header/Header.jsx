import Image from "next/image";
import Link from "next/link";

const Header = ({ title }) => {
  return (
    <>
      <nav className="py-4 rounded dark:bg-white">
        <div className="container flex flex-wrap justify-between relative">
          <Link href="/home" className="flex items-center">
            <Image
              src="/../public/images/rhb.png"
              className=""
              alt="RHB Logo"
              height={30}
              width={100}
              placeholder="blur"
              blurDataURL="/../public/images/rhb.png"
            />
            <span className="mx-2 self-center text-xl font-bold whitespace-nowrap dark:text-white">
              Next
            </span>
          </Link>

          {/* User profile button */}
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src="/../public/images/walter-white.png"
                alt="user photo"
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL="/../public/images/walter-white.png"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="mt-2 mb-2">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Header;
