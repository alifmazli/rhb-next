import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  return (
    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 ">
      <div className="max-w-xl lg:max-w-3xl">
        <Link className="block text-blue-600" href="/">
          <span className="sr-only">Home</span>
          <Image
            src="/../public/rhb/rhb-logo.png"
            width={100}
            height={100}
            alt="RHB logo"
          />
        </Link>

        <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          RHB Student Deals and Events
        </h1>
        <small className="mt-6 text-sm font-medium">Powered by RHB Next</small>

        <p className="mt-4 leading-relaxed text-gray-500">
          Verify your student status to enjoy more deals and events.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label for="FirstName" className="block text-sm font-medium">
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              placeholder="This is a demo app"
              className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label for="LastName" className="block text-sm font-medium">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              placeholder="You may directly click on Register"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label for="Email" className="block text-sm font-medium ">
              Personal Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label for="Email" className="block text-sm font-medium ">
              University Email (.edu.my)
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label for="Password" className="block text-sm font-medium ">
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              className="block text-sm font-medium "
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label for="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm">
                I want to receive emails about deals, events, product updates
                and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <u>Terms and Conditions</u> and <u>Privacy Policy</u>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              <Link href="/home/next-deals">Register</Link>
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?{" "}
              <Link href="/verify/sign-in">Sign in</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
