import React from "react";

export default function PriceCard({ service }) {
  const check_price_range = service.price_range === "Small business" ? 1 : 0;

  return (
    <section
      className={`
    flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8 py-10
    ${check_price_range && "bg-blue-600"}
    `}
    >
      <h3 className="mt-5 font-display text-lg text-white">
        {service.price_range}
      </h3>
      <p
        className={`
      mt-2 text-base 
      ${check_price_range && "text-slate-400"}
      `}
      >
        {service.description}
      </p>
      <p className="order-first font-display text-5xl font-bold tracking-tight text-white">
        ${service.price}
      </p>
      <ul
        role="list"
        className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
      >
        {service.services_list.map((item, index) => (
          <li className="flex" key={index + item}>
            <svg
              aria-hidden="true"
              className={`
              h-6 w-6 flex-none fill-current stroke-current ${
                !check_price_range && "text-slate-400"
              }`}
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                strokeWidth="0"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
            </svg>
            <span className="ml-4">{item}</span>
          </li>
        ))}
      </ul>
      <a
        className={`
        group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8


        ${check_price_range && "bg-white text-black font-bold ring-0"}
        `}
        aria-label="Get started with the Starter plan for $9"
        href="/register"
      >
        Get started
      </a>
    </section>
  );
}
