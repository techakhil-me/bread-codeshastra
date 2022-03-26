import React from "react";
import NextImage from "next/image";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container text-gray-400 mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-2 justify-between flex items-center">
      <NextImage src={Logo.src} height={60} width={40} />
      <div className="flex space-x-6 items-center">
        <a
          href="/"
          className="link py-2 cursor-pointer hover:text-white transition ease-in-out duration-250 text-base font-medium tracking-wide leading-none"
        >
          Top Offers
        </a>
        <a
          href="/"
          className="link py-2 cursor-pointer hover:text-white transition ease-in-out duration-250 text-base font-medium tracking-wide leading-none"
        >
          Browse
        </a>
        <button class="cursor-pointer inline-flex space-x-2.5 items-center justify-center px-2.5 py-2 bg-gradient-to-r from-black to-black shadow border rounded-full border-black border-opacity-10">
          <div class="inline-flex flex-col items-start justify-start p-1.5 bg-gradient-to-tl from-indigo-700 to-blue-900 rounded-full">
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_415_1352)">
                <path
                  d="M10.5416 9.20833C10.5416 9.45145 10.4451 9.68461 10.2732 9.85651C10.1013 10.0284 9.86809 10.125 9.62498 10.125H1.37498C1.13186 10.125 0.898707 10.0284 0.726798 9.85651C0.55489 9.68461 0.458313 9.45145 0.458313 9.20833V4.16667C0.458313 3.92355 0.55489 3.69039 0.726798 3.51849C0.898707 3.34658 1.13186 3.25 1.37498 3.25H3.20831L4.12498 1.875H6.87498L7.79165 3.25H9.62498C9.86809 3.25 10.1013 3.34658 10.2732 3.51849C10.4451 3.69039 10.5416 3.92355 10.5416 4.16667V9.20833Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.50002 8.29167C6.51254 8.29167 7.33335 7.47086 7.33335 6.45833C7.33335 5.44581 6.51254 4.625 5.50002 4.625C4.4875 4.625 3.66669 5.44581 3.66669 6.45833C3.66669 7.47086 4.4875 8.29167 5.50002 8.29167Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_415_1352">
                  <rect
                    width="11"
                    height="11"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-base font-medium tracking-wide leading-none text-gray-300">
            Upload
          </p>
        </button>
        <svg
          className="cursor-pointer hover:text-white transition ease-in-out duration-250"
          width="24"
          height="27"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 11C18 9.4087 17.3679 7.88258 16.2426 6.75736C15.1174 5.63214 13.5913 5 12 5C10.4087 5 8.88258 5.63214 7.75736 6.75736C6.63214 7.88258 6 9.4087 6 11C6 18 3 20 3 20H21C21 20 18 18 18 11Z"
            stroke="#8C8E8F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.73 24C13.5542 24.3031 13.3019 24.5547 12.9982 24.7295C12.6946 24.9044 12.3504 24.9965 12 24.9965C11.6496 24.9965 11.3054 24.9044 11.0018 24.7295C10.6982 24.5547 10.4458 24.3031 10.27 24"
            stroke="#8C8E8F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            className="animate-pulse"
            cx="16"
            cy="4.5"
            r="3.5"
            fill="url(#paint0_linear_415_1356)"
            stroke="#212426"
          />
          <defs>
            <linearGradient
              id="paint0_linear_415_1356"
              x1="16"
              y1="0.5"
              x2="16"
              y2="8.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9896A" />
              <stop offset="1" stop-color="#945439" />
            </linearGradient>
          </defs>
        </svg>
        <img
          className="cursor-pointer"
          src="https://avatars.dicebear.com/api/pixel-art/smartaaaafht.svg"
          height="32"
          width="32"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
