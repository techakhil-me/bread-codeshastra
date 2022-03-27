import React from 'react'
import NextImage from 'next/image'
import Logo from '../../assets/logo.svg'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Register = () => {
  const router = useRouter()
  const [data, setdata] = useState({
    username: null,
    email: null,
    password: null,
  })

  const register = (e) => {
    e.preventDefault()
    // console.log(data);
    fetch('https://nathuramgodse.me/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('userId', result.user.id)
        localStorage.setItem('username', result.user.username)
        router.push('/')
      })
      .catch((error) => console.log('error', error))
  }
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center space-y-4 p-4">
      <div className="flex flex-col items-center space-y-4">
        <NextImage src={Logo.src} height={244} width={162} />
        <p className="text-lg font-semibold leading-relaxed tracking-wide text-gray-400">
          offers and discounts for your daily bread
        </p>
      </div>

      <p className="py-6 text-center text-4xl font-semibold leading-10 tracking-wide text-white">
        Join Now, Save Later
      </p>
      <form className="flex flex-col items-center space-y-6 text-white">
        <div className="align-start flex flex max-w-sm flex-col space-y-2">
          <label
            htmlFor="username"
            className="text-xs font-medium uppercase leading-snug tracking-widest text-gray-400"
          >
            username
          </label>
          <input
            value={data.username}
            onChange={(e) => setdata({ ...data, username: e.target.value })}
            required
            type="text"
            placeholder="Username"
            name="username"
            className="textinline-flex w-96 items-center justify-center rounded-full border-2 border-white border-opacity-0 bg-gray-600 px-10 py-4"
          />
        </div>
        <div className="align-start flex flex max-w-sm flex-col space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase leading-snug tracking-widest text-gray-400"
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
            className="textinline-flex w-96 items-center justify-center rounded-full border-2 border-white border-opacity-0 bg-gray-600 px-10 py-4"
          />
        </div>
        <div className="align-start flex flex max-w-sm flex-col space-y-2">
          <label
            htmlFor="password"
            className="text-xs font-medium uppercase leading-snug tracking-widest text-gray-400"
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
            className="textinline-flex w-96 items-center justify-center rounded-full border-2 border-white border-opacity-0 bg-gray-600 px-10 py-4"
          />
        </div>
        <p className="text-base font-light leading-relaxed tracking-wide text-gray-400">
          already joined ?{' '}
          <Link href="/login">
            <span className="cursor-pointer text-blue-400">login here</span>
          </Link>
        </p>
        <button
          onClick={register}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-b  from-indigo-700 to-blue-900 px-10 py-4 shadow hover:bg-blue-900 hover:bg-none hover:shadow-inner"
        >
          <p className="text-base font-medium leading-snug tracking-wide text-white">
            Register Now
          </p>
        </button>
      </form>
    </div>
  )
}
export default Register
