import React from "react";
import { PageExtraBackrounds } from "../Files";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-[#080321] text-white">
        <div className="absolute top-0 h-[120vh] w-screen bg-gradient-to-b from-[#121B4C] to-[#080321]"></div>
        <Navbar />
        <div className="sm:px-14  px-8">{children}</div>
        <Footer />
      </div>
      <div className="absolute top-0 z-10 h-[70vh] right-0">
        <img
          src="/images/right-svg.svg"
          className="bg-cover h-full w-full"
          alt=""
        />
      </div>
      <div className="absolute top-0 z-10 h-[40vh] left-0">
        <img
          src="/images/left-svg.svg"
          className="bg-cover h-full w-full"
          alt=""
        />
      </div>
    </>
  );
}
