import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { useState } from "react";
import AppContext from "@/components/AppContext";
import NoSSR from "react-no-ssr";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [userBudget, setUserBudget] = useState({
    name: "RHB user",
    income: 0,
    food: 0,
    rental: 0,
    transportation: 0,
    entertainment: 0,
    others: 0,
  });
  return (
    <NoSSR>
      <main className={`${poppins.className} min-h-screen`}>
        <AppContext.Provider value={{ userBudget, setUserBudget }}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </main>
    </NoSSR>
  );
}
