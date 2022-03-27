import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import Hdfc from "../assets/hdfc_bank.png";
import Axis from "../assets/axis_bank.png";
import ICICI from "../assets/icici_bank.png";
import SBI from "../assets/sbi_bank.png";
import Visa from "../assets/Visa.svg";
import Master from "../assets/master.png";

const CreditCard = (props) => {
  // const [bank, setBank] = useState(null);
  // const [provider, setProvider] = useState(null);
  const [cardData, setCardData] = useState({
    bank: null,
    title: null,
    color: null,
    provider: null
  });

  useEffect(() => {
    if (props.bank_name === "Hdfc") {
      cardData.bank = Hdfc;
      cardData.title = "HDFC BUSINESS MONEYBACK";
      cardData.color = "gray";
      setCardData({
        ...cardData
      });
    }
    if (props.bank_name === "Axis") {
      cardData.bank = Axis;
      cardData.title = "AXIS PAYEASY";
      cardData.color = "lightgray";
      setCardData({
        ...cardData
      });
    }
    if (props.bank_name === "ICICI") {
      cardData.bank = ICICI;
      cardData.title = "ICICI Premium";
      cardData.color = "lightgreen";
      setCardData({
        ...cardData
      });
    }
    if (props.bank_name === "SBI") {
      cardData.bank = SBI;
      cardData.title = "Simply Save";
      cardData.color = "lightblue";
      setCardData({
        ...cardData
      });
    }
    if (props.provider_name === "Visa") {
      cardData.provider = Visa;
      setCardData({ ...cardData });
    }
    if (props.provider_name === "Master") {
      cardData.provider = Master;
      setCardData({ ...cardData });
    }
  }, []);
  return (
    <>
      <div
        className={
          cardData
            ? `flex shrink-0 flex-col justify-between w-full h-52 sm:w-96 sm:h-52 rounded-lg p-6`
            : "flex shrink-0 flex-col justify-between w-56 h-40 sm:w-96 sm:h-52 bg-gray-200 rounded-lg p-6"
        }
        style={{
          background: `linear-gradient(109.34deg, ${cardData?.color} 1.42%, ${cardData?.color} 42.75%, ${cardData?.color} 48.59%, ${cardData?.color} 94.78%)`
        }}
      >
        <div className="flex justify-between w-full h-full">
          <p className="w-36 text-base font-bold tracking-wide leading-snug text-gray-800 uppercase">
            {cardData?.title}
          </p>
          <img src={cardData?.bank?.src} alt="" className="h-6" />
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
          <img alt="" className="h-6" src={cardData?.provider?.src} />
        </div>
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
