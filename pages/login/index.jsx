import React from "react";
import NextImage from "next/image";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [data, setdata] = useState({
    email: null,
    password: null
  });

  const register = (e) => {
    e.preventDefault();
    // console.log(data);
    fetch("https://nathuramgodse.me/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("userId", result.user.id);
        localStorage.setItem("username", result.user.username);
        router.push("/");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="container min-h-screen justify-center mx-auto p-4 flex flex-col space-y-4">
      <div className="flex flex-col items-center space-y-4">
        <NextImage src={Logo.src} height={244} width={162} />
        <p className="text-lg font-semibold tracking-wide leading-relaxed text-gray-400">
          offers and discounts for your daily bread
        </p>
      </div>

      <p className="py-6 text-4xl font-semibold tracking-wide leading-10 text-white text-center">
        Welcome Back
      </p>
      <form className="flex items-center flex-col space-y-6 text-white">
        <div className="flex flex-col flex align-start max-w-sm space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-medium tracking-widest leading-snug text-gray-400 uppercase"
          >
            email
          </label>
          <input
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
            required
            type="email"
            placeholder="Email"
            name="email"
            className="textinline-flex items-center justify-center w-96 px-10 py-4 bg-gray-600 border-2 rounded-full border-white border-opacity-0"
          />
        </div>

        <div className="flex flex-col flex align-start max-w-sm space-y-2">
          <label
            htmlFor="password"
            className="text-xs font-medium tracking-widest leading-snug text-gray-400 uppercase"
          >
            password
          </label>
          <input
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
            required
            type="password"
            placeholder="Password"
            name="password"
            className="textinline-flex items-center justify-center w-96 px-10 py-4 bg-gray-600 border-2 rounded-full border-white border-opacity-0"
          />
        </div>
        <p className="text-base font-light tracking-wide leading-relaxed text-gray-400">
          new here ?{" "}
          <Link href="/register">
            <span className="text-blue-400 cursor-pointer">register now</span>
          </Link>
        </p>
        <button
          onClick={register}
          className="inline-flex items-center justify-center px-10 py-4  hover:bg-blue-900 hover:bg-none bg-gradient-to-b from-indigo-700 to-blue-900 shadow hover:shadow-inner rounded-full"
        >
          <p className="text-base font-medium tracking-wide leading-snug text-white">
            Login
          </p>
        </button>
      </form>
    </div>
  );
};
export default Login;
