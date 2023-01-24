import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import Script from "next/script";
import { useState } from "react";
import AppContext from "@/components/AppContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [userData, setUserData] = useState({
    name: "RHB user",
    income: 100,
    food: 100,
    rental: 100,
    transportation: 100,
    entertainment: 100,
  });
  return (
    <main className={`${poppins.className} min-h-screen`}>
      <AppContext.Provider value={{ userData, setUserData }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </main>
  );
}
