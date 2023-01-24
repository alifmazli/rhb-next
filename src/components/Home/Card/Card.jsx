import Link from "next/link";

const Card = () => {
  return (
    <div className="card-container w-full p-6 border shadow-md">
      <Link href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">Attention!</h5>
      </Link>
      <p className="mb-2">
        Your expenses this month is <b>35% more</b> compared to students like
        you using RHB Next!
      </p>
      {/* <Link
        href="#"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        See more
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </Link> */}
    </div>
  );
};

export default Card;
