import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#080321] text-white">
      <div className="absolute top-0 h-[120vh] w-screen bg-gradient-to-b from-[#121B4C] to-[#080321]"></div>
      <Navbar />
      <div className="sm:px-14  px-8">{children}</div>
    </div>
  );
}
