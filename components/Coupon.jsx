import React, { useState, useEffect } from 'react'

const Coupon = (props) => {
  const [data, setdata] = useState({ ...props })
  useEffect(() => {
    data.userId = localStorage.getItem('userId')
    setdata({ ...data })
  }, [])
  const save = () => {
    fetch('https://nathuramgodse.me/offer/addoffer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('saved')
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <div
      style={{ background: props.color }}
      className="flex h-44 w-full shrink-0 justify-between overflow-hidden rounded-lg bg-red-200 p-4 sm:h-52 sm:w-[760px] md:p-6"
    >
      <div className="flex flex-col justify-between">
        <div class="inline-flex flex-col items-start justify-start space-y-2">
          <p class="text-4xl font-bold leading-10 tracking-wide text-gray-800">
            {props?.coupon_offer} OFF
          </p>
          <p class="w-full max-w-sm font-medium leading-snug tracking-wide text-gray-600 md:text-xl">
            {props?.coupon_description}
          </p>
        </div>
        {/* <div class="inline-flex space-x-2.5 items-center max-w-fit justify-start px-6 py-2 bg-black rounded-full">
          <p class="text-xl font-medium tracking-wide leading-snug text-white">
            AIRTELPB300
          </p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_418_1455)">
              <path
                d="M12.1235 6.03949H6.87345C6.22912 6.03949 5.70679 6.56182 5.70679 7.20616V12.4562C5.70679 13.1005 6.22912 13.6228 6.87345 13.6228H12.1235C12.7678 13.6228 13.2901 13.1005 13.2901 12.4562V7.20616C13.2901 6.56182 12.7678 6.03949 12.1235 6.03949Z"
                stroke="#8C8E8F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.37346 9.53951H2.79013C2.48071 9.53951 2.18396 9.41659 1.96517 9.1978C1.74638 8.97901 1.62346 8.68226 1.62346 8.37284V3.12284C1.62346 2.81342 1.74638 2.51668 1.96517 2.29789C2.18396 2.07909 2.48071 1.95618 2.79013 1.95618H8.04013C8.34954 1.95618 8.64629 2.07909 8.86508 2.29789C9.08388 2.51668 9.20679 2.81342 9.20679 3.12284V3.70618"
                stroke="#8C8E8F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_418_1455">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0.456787 0.78949)"
                />
              </clipPath>
            </defs>
          </svg>
        </div> */}
      </div>
      <div className="coupon relative flex h-full w-64 flex-col items-center justify-between overflow-hidden border-0 border-l-2 border-dashed border-black pl-4">
        <img src={props?.coupon_image} alt="" className="h-20" />
        <p class="text-center text-xs font-medium uppercase leading-snug tracking-widest text-gray-800">
          Untill {props?.coupon_end.slice(0, 10)}
        </p>
        <div
          onClick={save}
          className="curson-pointer absolute flex h-full w-full translate-x-full transform cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-200/50 backdrop-blur-xl transition duration-300 ease-in-out"
        >
          <p class="text-4xl font-semibold leading-10 tracking-wide text-white">
            SAVE
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coupon
