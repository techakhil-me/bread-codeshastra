import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CreditCard from "../components/CreditCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container text-gray-400 mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-2 justify-between flex items-center">
        <p className="text-xs font-medium tracking-widest leading-snug text-center text-gray-400 uppercase">
          SELECT CARD
        </p>
        <div className="inline-flex space-x-2.5 items-center justify-center h-12 px-2.5 py-1 bg-gradient-to-r from-black to-black shadow border-2 rounded-full border-black border-opacity-10">
          <div className="inline-flex flex-col items-start justify-start p-1.5 bg-gray-800 shadow-inner rounded-full">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 3.96158V2.96158H5V3.96158V5H3.96155H2.96155V7H3.96155H5V8.03844V9.03844H7V8.03844V7H8.03841H9.03841V5H8.03841H7V3.96158Z"
                fill="#fff"
              />
            </svg>
          </div>
          <p className="text-base font-medium tracking-wide leading-snug text-white">
            Add Card
          </p>
        </div>
      </section>
      {/* cards section */}
      <section className="container text-gray-400 mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-2 justify-between flex items-center">
        <CreditCard />
      </section>
    </>
  );
};

export default Home;
