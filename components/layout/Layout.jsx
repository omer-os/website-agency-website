import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white sm:px-14 px-8">
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  );
}
