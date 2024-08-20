"use client";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa6";

export default function Auc({ title, body, emp }) {
  const [aucop, setaucop] = useState(false);
  return (
    <div className=" mx-3 my-4  rounded-md  bg-slate-800">
      <button
        onClick={() => setaucop(!aucop)}
        className="flex justify-between w-full px-3 py-4 items-center "
      >
        <span>{title}</span>
        <svg
          className="fill-white opacity-70  ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              aucop && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              aucop && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-opacity-60 ${
          aucop ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
          <div className=" mx-3 my-4 ">
            <span className="block h-1 m-3 border-b border-b-slate-700 "></span>
            <div className="text-center my-2 flex items-center text-white">
              <FaUserTie size={"1rem"} className="mr-2 text-blue-500" />
              {emp}
            </div>
            <div className=" bg-slate-900 p-3 rounded">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
