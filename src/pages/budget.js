import AppContext from "@/components/AppContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Home/Header/Header";
import Head from "next/head";

const Budget = () => {
  const context = useContext(AppContext);

  //   Temporary state to store input values
  //   before passing to userData via context
  const initialValues = {
    name: "RHB user",
    income: 0,
    food: 0,
    rental: 0,
    transportation: 0,
    entertainment: 0,
    others: 0,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <Head>
        <title>RHB Next</title>
        <meta name="description" content="RHB Next: Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Share your budget with us" />
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            <h2>What do we call you?</h2>
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="E.g., Heisenberg"
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Monthly income */}
        <div>
          <h2 className="mt-2 mb-4">What is your monthly budget/income?</h2>
          <div>
            <label
              htmlFor="income"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Budget/Income
            </label>

            <input
              type="number"
              id="income"
              name="income"
              placeholder="0"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Food & Beverage */}
        <div className="space-y-4">
          <h2 className="mt-2 mb-4">How would you like to set your budget?</h2>
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Food & Beverage
            </label>
            <input
              type="number"
              id="small-input"
              name="food"
              placeholder="0"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Rental */}
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rental
            </label>
            <input
              type="number"
              id="small-input"
              name="rental"
              placeholder="0"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Transportation
            </label>
            <input
              type="number"
              id="small-input"
              name="transportation"
              placeholder="0"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Entertainment */}
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Entertainment
            </label>
            <input
              type="number"
              id="small-input"
              name="entertainment"
              placeholder="0"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Others */}
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Others
            </label>
            <input
              type="number"
              id="small-input"
              name="others"
              placeholder="0"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            context.setUserBudget({
              name: formValues.name,
              income: formValues.income,
              food: formValues.food,
              rental: formValues.rental,
              transportation: formValues.transportation,
              entertainment: formValues.entertainment,
              others: formValues.others,
            });
            router.push("/home");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Budget;
