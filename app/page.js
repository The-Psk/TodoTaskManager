import Link from "next/link";
import Image from "next/image";
import { FaSquareCheck } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="select-none overflow-hidden h-svh">
      <h1 className="bg-blue-600 text-center p-11 font-sans text-7xl ">
        TODO LIST
      </h1>
      <Image
        src={"/to-do-list.png"}
        alt="todo"
        className="block mx-auto relative bottom-16"
        draggable={false}
        width={200}
        height={200}
      />

      <h2 className="absolute bottom-36 text-3xl font-semibold left-0 right-0 text-center">DON'T FORGET TODO LIST</h2>

      <div className="flex absolute w-full bottom-0 text-center font-sans border-t border-t-black">
        <Link
          className=" basis-1/2 py-10 bg-blue-600 transition duration-300 hover:bg-blue-700 text-xl border-r border-r-black"
          href={"auth/login"}
        >
          LOGIN
        </Link>
        <Link
          className=" basis-1/2 py-10 bg-blue-600 transition duration-300 hover:bg-blue-700 text-xl "
          href={"auth/register"}
        >
          REGISTER
        </Link>
      </div>
    </div>
  );
}
