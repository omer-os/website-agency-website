import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PriceCard } from "../components/Files";

export default function Index() {
  const [show, setShow] = useState(false);

  const PriceCardData = [
    {
      price: "9",
      price_range: "starter",
      description:
        "Good for anyone who is self-employed and just getting started.",
      services_list: [
        "Send 10 quotes and invoices",
        "Connect up to 2 bank accounts",
        "Track up to 15 expenses per month",
        "Manual payroll support",
        "Export up to 3 reports",
      ],
    },

    {
      price: "15",
      price_range: "Small business",
      description: "Perfect for small / medium sized businesses.",
      services_list: [
        "Send 25 quotes and invoices",
        "Connect up to 5 bank accounts",
        "Track up to 50 expenses per month",
        "Automated payroll support",
        "Export up to 12 reports",
        "Bulk reconcile transactions",
        "Track in multiple currencies",
      ],
    },
    {
      price: "39",
      price_range: "Enterprise",
      description: "For even the biggest enterprise companies.",
      services_list: [
        "Send unlimited quotes and invoices",
        "Connect up to 15 bank accounts",
        "Track up to 200 expenses per month",
        "Automated payroll support",
        "Export up to 25 reports, including TPS",
      ],
    },
  ];

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
            <div className="relative p-2.5 bg-[#121A4D] w-max h-max rounded-xl flex items-center justify-center">
              <Image
                src="/images/services/seo.svg"
                className=""
                alt="seo optimized"
                layout="intrinsic"
                height={38}
                width={38}
              />
            </div>
            <div className="font-bold text-xl">SEO Friendly</div>
            <div className="text-sm text-gray-300">
              SEO-friendly content is the type of content that{"'"}s created in
              a way that helps the search engines rank it high.{" "}
            </div>
          </div>
          <div className="flex flex-col gap-2 object-cover">
            <div className="p-2 bg-[#121A4D] rounded-xl w-[4em] h-[4em] object-cover flex items-center justify-center">
              <div className="relative p-2.5 bg-[#121A4D] w-max h-max rounded-xl flex items-center justify-center">
                <Image
                  src="/images/services/custom-web-design.png"
                  layout="intrinsic"
                  width={38}
                  height={38}
                />
              </div>
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
            <div className="relative p-2.5 bg-[#121A4D] w-max h-max rounded-xl flex items-center justify-center">
              <Image
                src="/images/services/brand-design.png"
                alt="seo optimized"
                layout="intrinsic"
                height={38}
                width={38}
              />
            </div>
            <div className="font-bold text-xl">Branding & Design</div>
            <div className="text-sm">
              Our experienced professionals will work on creating breathtaking
              designs to reach your customers and keep up with the brand{"'"}s
              identity.
            </div>
          </div>
        </div>

        <div className="mx-auto w-4/6 h-1 sm:mt-32 mt-20 mb-12 rounded-full bg-blue-800"></div>

        <div className="text-3xl text-center font-bold ">Pricing</div>
        <div className="text-gray-400 lg:w-3/6 mt-2 sm:w-4/6 text-center mx-auto">
          We always try to provide our services without exaggeration in price.
          Also, if you have any offer, contact us via telegram
        </div>
        <div className="grid mt-10 lg:w-11/12   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-20  ">
          {PriceCardData.map((service) => (
            <PriceCard key={service.price_range} service={service} />
          ))}
        </div>

        <div className="mx-auto w-4/6 h-1 mt-32 mb-12 rounded-full bg-blue-800"></div>

        {/* Our Work Process */}
      </div>
    </section>
  );
}
