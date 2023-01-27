import Link from "next/link";

const Button = ({ label }) => {
  return (
    <Link href="home/next-deals" className="flex justify-start">
      <button
        type="button"
        className="bg-blue-700 items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-blue-800"
      >
        {label}
      </button>
    </Link>
  );
};
export default Button;
