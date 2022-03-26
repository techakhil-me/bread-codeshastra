import React, {useState} from "react";
import NextImage from "next/image";
import Hdfc from "../assets/hdfc_bank.png";
import Visa from "../assets/Visa_Inc._logo.svg";
import Master from "../assets/master.png"


const CreditCard = () => {
  const [bank,setBank]=useState(null)
  const [provider,setProvider]=useState(null)

  const [cardData,setCardData]=useState(null);

  const fillCardData=()=>{
    if(bank==="Hdfc"){
      setCardData({...cardData,bank:Hdfc})
    }
    if(provider==="Visa"){
      setCardData({...cardData,provider:Visa})
    }
    if(provider==="Master"){
      setCardData({...cardData,provider:Master})
    }
  }

  return (
    <>
    <div className="flex flex-col just-fy-between w-96 h-52 bg-gradient-to-r from-gray-100 to-gray-600 rounded-lg p-6">
      <div className="flex justify-between w-full h-full">
        <p className="w-36 text-base font-bold tracking-wide leading-snug text-gray-800 uppercase">
          HDFC BUSINESS MONEYBACK
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
    <div className="flex flex-col">
      <label for="bank">Bank Name (Hdfc)</label>
      <input id="name" value={bank} name="name" type="text" onChange={(e)=>setBank(e.target.value)} />
      <label for="bank">Provider Name (Visa/Master)</label>
      <input id="name" name="name" value={provider} type="text" onChange={(e)=>setProvider(e.target.value)} />
      <button onClick={fillCardData}>Set Data</button>
    </div>
    </>
  );
};

export default CreditCard;
