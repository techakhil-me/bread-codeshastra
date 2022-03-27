import React, { useState, useEffect } from "react";
import CreditCard from "./CreditCard";

const AddCard = ({ openAdd, setopenAdd }) => {
  const [data, setdata] = useState({
    bank_name: "Axis",
    provider_name: "Master",
    card_number: "465486464684",
    exp_date: "05/23",
    user_id: null
  });
  useEffect(() => {
    data.user_id = localStorage.getItem("userId");
    setdata({ ...data });
  }, []);
  const addCard = () => {
    fetch("https://bread-backend.herokuapp.com/card/addcard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((result) => {
        setopenAdd(false);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div
      className="md:fixed min-h-screen absolute  h-[1000px] w-screen md:h-screen z-10 top-0 left-0 flex  items-center justify-center flex-col-reverse md:flex-row  space-y-10 gap-16"
      style={{ background: "#212426" }}
    >
      <div className="flex flex-col space-y-8 max-w-sm text-white">
        <div className="flex flex-col flex align-start max-w-sm space-y-2">
          <label
            htmlFor="bank_name"
            className="text-xs font-medium tracking-widest leading-snug text-gray-400 uppercase"
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
            className="textinline-flex items-center justify-center w-96 px-10 py-4 bg-gray-600 border-2 rounded-full border-white border-opacity-0"
          />
        </div>
        <div className="flex flex-col flex align-start max-w-sm space-y-2">
          <label
            htmlFor="provider_name"
            className="text-xs font-medium tracking-widest leading-snug text-gray-400 uppercase"
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
            className="textinline-flex items-center justify-center w-96 px-10 py-4 bg-gray-600 border-2 rounded-full border-white border-opacity-0"
          />
        </div>
        <div className="flex flex-col flex align-start max-w-sm space-y-2">
          <label
            htmlFor="card_number"
            className="text-xs font-medium tracking-widest leading-snug text-gray-400 uppercase"
          >
            card number
          </label>
          <input
            maxLength="17"
            value={data.card_number}
            onChange={(e) => setdata({ ...data, card_number: e.target.value })}
            required
            type="text"
            placeholder="Enter card number"
            name="card_number"
            className="textinline-flex items-center justify-center w-96 px-10 py-4 bg-gray-600 border-2 rounded-full border-white border-opacity-0"
          />
        </div>
        <div className="flex gap-10 items-center justify-center">
          <span
            onClick={() => setopenAdd(false)}
            className="text-blue-400 cursor-pointer"
          >
            Cancel
          </span>
          <button
            onClick={addCard}
            className="inline-flex items-center justify-center px-10 py-4  hover:bg-blue-900 hover:bg-none bg-gradient-to-b from-indigo-700 to-blue-900 shadow hover:shadow-inner rounded-full"
          >
            <p className="text-base font-medium tracking-wide leading-snug text-white">
              Add Card
            </p>
          </button>
        </div>
      </div>
      {data ? <CreditCard {...data} /> : null}
    </div>
  );
};

export default AddCard;
