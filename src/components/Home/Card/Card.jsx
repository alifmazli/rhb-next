import Link from "next/link";

const Card = () => {
  return (
    <>
      {/* <div className="relative w-full inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <div className="w-full bg-white space-y-2 py-5 px-4 text-left rounded-lg shadow-xl relative transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
          <h5 className="text-gray-900 text-2xl font-semibold tracking-tight">
            Attention!
          </h5>
          <p className="text-gray-900">
            Your expenses this month is <b>35% more</b> compared to students
            like you using RHB NEXT!
          </p>
        </div>
      </div> */}
      <div className="card-container w-full p-5 border shadow-md">
        <h5 className="mb-2 text-gray-900 text-2xl font-semibold tracking-tight">
          Attention!
        </h5>
        <p className="mb-2">
          Your expenses this month is <b>35% more</b> compared to students like
          you using RHB NEXT!
        </p>
      </div>
    </>
  );
};

export default Card;
