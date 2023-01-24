import AppContext from "@/components/AppContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Home/Header/Header";

const Budget = () => {
  const context = useContext(AppContext);

  //   Temporary state to store input values
  //   before passing to userData via context
  const [formValue, setFormValue] = useState({
    name: "RHB user",
    allowance: 100,
    food: 100,
    rental: 100,
    transportation: 100,
    entertainment: 100,
  });
  const router = useRouter();

  return (
    <div>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="E.g., Heisenberg"
            onChange={(e) => {
              setFormValue({
                name: e.target.value,
              });
            }}
            required
          />
        </div>

        {/* Monthly income */}
        <div>
          <h2 className="mt-2 mb-4">What is your monthly income?</h2>
          <div>
            <label
              htmlFor="allowance"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Allowance
            </label>

            <input
              type="number"
              id="allowance"
              defaultValue={formValue.allowance}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setFormValue({
                  allowance: e.target.value,
                });
              }}
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
              defaultValue={formValue.food}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setFormValue({
                  food: e.target.value,
                });
              }}
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
              defaultValue={formValue.rental}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setFormValue({
                  rental: e.target.value,
                });
              }}
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
              defaultValue={formValue.transportation}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setFormValue({
                  transportation: e.target.value,
                });
              }}
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
              defaultValue={formValue.entertainment}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setFormValue({
                  entertainment: e.target.value,
                });
              }}
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            context.setUserData({
              name: formValue.name,
              allowance: formValue.allowance,
              food: formValue.food,
              rental: formValue.rental,
              transportation: formValue.transportation,
              entertainment: formValue.entertainment,
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
