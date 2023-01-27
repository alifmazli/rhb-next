import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({ title, profile, light }) => {
  const isProfile = profile;
  const isLight = light;

  return (
    <>
      <nav className="py-4">
        <div className="container flex flex-wrap justify-between relative">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/rhb.png"
              className=""
              alt="RHB Logo"
              height={30}
              width={100}
              placeholder="blur"
              blurDataURL="/images/rhb.png"
            />
            <span
              className={`mx-2 self-center text-2xl font-bold ${
                isLight ? "text-[#111827]" : null
              }`}
            >
              NEXT
            </span>
          </Link>

          {isProfile && (
            <>
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
                    src="/images/walter-white.png"
                    alt="user photo"
                    width={30}
                    height={30}
                    placeholder="blur"
                    blurDataURL="/images/walter-white.png"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
      <div className="mt-2 mb-2">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Header;
