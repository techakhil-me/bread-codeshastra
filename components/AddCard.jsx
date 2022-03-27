import React, { useState, useEffect } from 'react'
import CreditCard from './CreditCard'

const AddCard = ({ openAdd, setopenAdd }) => {
  const [data, setdata] = useState({
    bank_name: 'Axis',
    provider_name: 'Master',
    card_no: '465486464684',
    exp_date: '05/23',
    user_id: null,
  })
  useEffect(() => {
    data.user_id = localStorage.getItem('userId')
    setdata({ ...data })
  }, [])
  const addCard = () => {
    fetch('https://nathuramgodse.me/card/addcard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        setopenAdd(false)
      })
      .catch((error) => console.log('error', error))
  }
  return (
    <div
      className="absolute top-0 left-0  z-10 flex h-[1000px] min-h-screen w-screen flex-col-reverse items-center  justify-center gap-16 space-y-10 md:fixed  md:h-screen md:flex-row"
      style={{ background: '#212426' }}
    >
      <div className="flex max-w-sm flex-col space-y-8 text-white">
        <div className="align-start flex flex max-w-sm flex-col space-y-2">
          <label
            htmlFor="bank_name"
            className="text-xs font-medium uppercase leading-snug tracking-widest text-gray-400"
          >
            bank name
          </label>
          <input
            value={data.bank_name}
            onChange={(e) => setdata({ ...data, bank_name: e.target.value })}
            required
            type="text"
            placeholder="Enter bank name"
            name="bank_name"
            className="textinline-flex w-96 items-center justify-center rounded-full border-2 border-white border-opacity-0 bg-gray-600 px-10 py-4"
          />
        </div>
        <div className="align-start flex flex max-w-sm flex-col space-y-2">
          <label
            htmlFor="provider_name"
            className="text-xs font-medium uppercase leading-snug tracking-widest text-gray-400"
          >
            provider name
          </label>
          <input
            value={data.provider_name}
            onChange={(e) =>
              setdata({ ...data, provider_name: e.target.value })
            }
            required
            type="text"
            placeholder="Enter provider name"
            name="provider_name"
            className="textinline-flex w-96 items-center justify-center rounded-full border-2 border-white border-opacity-0 bg-gray-600 px-10 py-4"
          />
        </div>
        <div className="align-start flex flex max-w-sm flex-col space-y-2">
          <label
            htmlFor="card_number"
            className="text-xs font-medium uppercase leading-snug tracking-widest text-gray-400"
          >
            card number
          </label>
          <input
            maxLength="17"
            value={data.card_number}
            onChange={(e) => setdata({ ...data, card_no: e.target.value })}
            required
            type="text"
            placeholder="Enter card number"
            name="card_number"
            className="textinline-flex w-96 items-center justify-center rounded-full border-2 border-white border-opacity-0 bg-gray-600 px-10 py-4"
          />
        </div>
        <div className="flex items-center justify-center gap-10">
          <span
            onClick={() => setopenAdd(false)}
            className="cursor-pointer text-blue-400"
          >
            Cancel
          </span>
          <button
            onClick={addCard}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b  from-indigo-700 to-blue-900 px-10 py-4 shadow hover:bg-blue-900 hover:bg-none hover:shadow-inner"
          >
            <p className="text-base font-medium leading-snug tracking-wide text-white">
              Add Card
            </p>
          </button>
        </div>
      </div>
      {data ? <CreditCard {...data} /> : null}
    </div>
  )
}

export default AddCard
