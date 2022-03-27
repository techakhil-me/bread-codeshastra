import React, { useState, useEffect } from "react";
import Coupon from "../../components/Coupon";
import Navbar from "../../components/Navbar";

const Saved = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://bread-backend.herokuapp.com/offer/getsavedoffer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: localStorage.getItem("userId") })
    })
      .then((response) => response.json())
      .then((result) => {
        setdata(result.coupon);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container pt-20 mx-auto flex flex-col gap-8 items-center">
        {data.map((coupon, ind) => (
          <Coupon key={ind} {...coupon} />
        ))}
      </div>
    </>
  );
};

export default Saved;
