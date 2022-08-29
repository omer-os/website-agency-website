import React from "react";

export default function Footer() {
  return (
    <div className="h-[20em] bg-slate-900 relative">
      <div className="absolute bottom-24 z-30 w-[9vw] left-0">
        <img
          src="/images/bottom-left.svg"
          className="bg-cover h-full w-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-30 h-max right-0">
        <img
          src="/images/bottom-right.svg"
          className="bg-cover h-full w-full"
          alt=""
        />
      </div>
    </div>
  );
}
