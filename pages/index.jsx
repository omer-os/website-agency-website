import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <section className="text-white">
      <div className="max-w-screen-xl flex flex-col sm:px-4  sm:py  -32 py-20 mx-auto lg:items-center lg:flex z-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[2.3em] transition-all font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r capitalize from-green-300 via-blue-500 to-purple-600">
            we provide Web Design
            <span className="sm:block pb-2">Services in iraq</span>
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl text-sm">
            we are team of very ambitions and creative web development agency,
            we provide web development and ui/ux design services. contact us and
            lets build something great togather.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link href="/">
              <a className="sm:block flex justify-center items-center w-full sm:px-12 sm:py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring">
                Contact Us
              </a>
            </Link>

            <Link href="/">
              <a className="block w-full sm:px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring">
                Our Projects
              </a>
            </Link>
          </div>
        </div>

        <div className="mx-auto w-4/6 h-1 mt-32 mb-12 rounded-full bg-blue-800"></div>
        <div className="text-3xl text-center font-bold">Main Services</div>
        <div className="text-center mx-auto sm:w-3/6 mt-2 text-gray-400">
          We can help your business increase revenue, decrease expenses, and
          keep employees safe in these challenging times{" "}
        </div>

        <div className="grid mt-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full ">
          <div className="flex flex-col gap-2 object-cover">
            <img
              src="/images/services/seo.svg"
              className="p-2 bg-[#121A4D] rounded-xl w-[4em] h-[4em] object-cover"
              alt="seo optimized"
            />
            <div className="font-bold text-xl">SEO Friendly</div>
            <div className="text-sm text-gray-300">
              SEO-friendly content is the type of content that's created in a
              way that helps the search engines rank it high.{" "}
            </div>
          </div>
          <div className="flex flex-col gap-2 object-cover">
            <div className="p-2 bg-[#121A4D] rounded-xl w-[4em] h-[4em] object-cover flex items-center justify-center">
              <svg
                width="40"
                fill="#4A6CF7"
                height="41"
                viewBox="0 0 40 41"
                class="a26"
              >
                <path
                  opacity="0.5"
                  d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                ></path>
                <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z"></path>
              </svg>
            </div>
            <div className="font-bold text-xl">
              Completely custom web design
            </div>
            <div className="text-sm">
              All of our designers are hand-vetted and rated for their quality,
              so you’ll know you’re working with the best.
            </div>
          </div>
          <div className="flex flex-col gap-2 object-cover">
            <img
              src="/images/services/brand-design.png"
              className="p-2 bg-[#121A4D] rounded-xl w-[4em] h-[4em] object-cover"
              alt="seo optimized"
            />
            <div className="font-bold text-xl">Branding & Design</div>
            <div className="text-sm">
              Our experienced professionals will work on creating breathtaking
              designs to reach your customers and keep up with the brand's
              identity.
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
