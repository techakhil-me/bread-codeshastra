import React from "react";

const List = (props) => {
  return (
    <div className="w-full flex gap-4">
      <div className="flex flex-col gap-4">
        <p class="text-2xl font-bold tracking-wide leading-10 text-gray-800">
          {props?.coupon_offer} OFF
        </p>
        <p class="w-full text-xs font-medium tracking-wide leading-snug text-gray-600 max-w-sm">
          {props?.coupon_description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between">
        <img src={props?.coupon_image} alt="" className="h-20" />
        <p class="text-xs font-medium tracking-widest leading-snug text-center text-gray-800 uppercase">
          Untill {props?.coupon_end.slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default List;
