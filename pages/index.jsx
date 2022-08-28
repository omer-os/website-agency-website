import React, { useState } from "react";
import Image from "next/image";

export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <section class="text-white">
      <div class="max-w-screen-xl sm:px-4  sm:py-32 py-20 mx-auto lg:items-center lg:flex z-20 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-[2.3em] transition-all font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r capitalize from-green-300 via-blue-500 to-purple-600">
            we provide Web Design 
            <span class="sm:block pb-2">Services in iraq</span>
          </h1>

          <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl text-sm">
            we are team of very ambitions and creative web development agency, we provide web development and ui/ux design services. contact us and lets build something great togather.
          </p>

          <div class="flex justify-center gap-4 mt-8">
            <a
              class="sm:block flex justify-center items-center w-full sm:px-12 sm:py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full sm:px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
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
      <div className="absolute bottom-24 z-10 w-[9vw] left-0">
        <img
          src="/images/bottom-left.svg"
          className="bg-cover h-full w-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-10 h-max right-0">
        <img
          src="/images/bottom-right.svg"
          className="bg-cover h-full w-full"
          alt=""
        />
      </div>
    </section>
  );
}
