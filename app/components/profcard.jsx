import Image from "next/image";
import { BiClipboard } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";

export default function Procard({ src, username, task, respect }) {
  setTimeout(() => {
    return (
      <div className=" m-3 rounded-lg py-3 px-3 justify-between  flex items-center bg-slate-800">
        <div className="flex items-center">
          <Image
            src={src}
            alt=""
            width={50}
            height={50}
            className="rounded-full mr-3"
          />
          <span>{username}</span>
        </div>
        <div className=" flex items-center">
          <span
            data-tooltip-target="toltipres"
            className="flex items-center select-none text-white font-mediumtext-sm px-5 py-2.5 text-center"
          >
            <TiStarFullOutline className=" mr-1" size={"1.2rem"} />
            {task}
          </span>

          <span
            data-tooltip-target="tooltiptask"
            className="flex items-center select-none text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <BiClipboard className=" mr-1" size={"1.2rem"} />
            {respect}
          </span>
        </div>
      </div>
    );
  }, 10000);
}
