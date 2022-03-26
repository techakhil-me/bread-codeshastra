import React from "react";
import NextImage from "next/image";
import Logo from "../../assets/logo.svg";
const Register = () => {
  return (
    <div className="container min-h-screen justify-center mx-auto p-4 flex flex-col space-y-4">
      <div class="flex flex-col items-center space-y-4">
        <NextImage src={Logo.src} height={244} width={162} />
        <p class="text-lg font-semibold tracking-wide leading-relaxed text-gray-400">
          offers and discounts for your daily bread
        </p>
      </div>

      <p class="text-4xl font-semibold tracking-wide leading-10 text-white text-center">
        Join Now, Save Later
      </p>
      <form action=""></form>
    </div>
  );
};
export default Register;
