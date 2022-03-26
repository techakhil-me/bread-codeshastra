import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import Hdfc from "../assets/hdfc_bank.png";
import ICICI from "../assets/icici_bank.png";
import SBI from "../assets/sbi_bank.png";
import Visa from "../assets/Visa.svg";
import Master from "../assets/master.png";

const CreditCard = (props) => {
  // const [bank, setBank] = useState(null);
  // const [provider, setProvider] = useState(null);
  const [cardData, setCardData] = useState({
    bank: ICICI,
    title: "ICICI Premium",
    color: "Purple",
    provider: null
  });

  useEffect(() => {
    console.log(props);
    if (props.bank_name === "Hdfc") {
      console.log("heyya");
      setCardData({...cardData, bank: "Hdfc"
        // title: "HDFC BUSINESS MONEYBACK",
        // color: "gray"
      });
    }
    if (props.bank_name === "ICICI") {
      setCardData({
        ...cardData,
        bank: ICICI,
        title: "ICICI Premium",
        color: "purple"
      });
    }
    if (props.bank_name === "SBI") {
      console.log("heyya");
      // setCardData({
      //   ...cardData,
      //   bank: SBI,
      //   title: "Simply Save",
      //   color: "blue"
      // });
    }
    if (props.provider_name === "Visa") {
      setCardData({ ...cardData, provider: Visa });
    }
    if (props.provider_name === "Master") {
      setCardData({ ...cardData, provider: Master });
    }
    console.log(cardData);
  }, []);
  return (
    <>
      <div
      // className={`flex shrink-0 flex-col just-fy-between w-56 h-40 sm:w-96 sm:h-52 bg-gradient-to-r from-${cardData.color}-100 to-${cardData.color}-600 rounded-lg p-6`}
      >
        {console.log(cardData)}
        {/* <div className="flex justify-between w-full h-full">
          <p className="w-36 text-base font-bold tracking-wide leading-snug text-gray-800 uppercase">
            {cardData.title}
          </p>
          <img src={cardData.bank} alt="" className="h-6" />
        </div>
        <div className="flex justify-between items-center">
          <div className="inline-flex flex-col items-start justify-start">
            <p className="text-base font-bold tracking-widest text-gray-800">
              4145 895XX XXXX 9873
            </p>
            <p className="text-xs font-bold tracking-widest text-gray-800 uppercase">
              ASHISH KASHyap
            </p>
          </div>
          <img alt="" className="h-6" src={cardData.provider} />
        </div> */}
      </div>
      {/* <div className="flex flex-col">
      <label for="bank">Bank Name (Hdfc)</label>
      <input id="name" value={bank} name="name" type="text" onChange={(e)=>setBank(e.target.value)} />
      <label for="bank">Provider Name (Visa/Master)</label>
      <input id="name" name="name" value={provider} type="text" onChange={(e)=>setProvider(e.target.value)} />
      <button onClick={fillCardData}>Set Data</button>
    </div> */}
    </>
  );
};

export default CreditCard;
