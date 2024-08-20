import Image from "next/image";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { IoCheckboxOutline } from "react-icons/io5";
import Linkcard from "@/app/components/linkcard";
import { FiLogOut } from "react-icons/fi";
import { GoBell } from "react-icons/go";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <div className=" flex flex-col p-5 pt-1 bg-slate-900 w-80">
        <a className="flex justify-start items-center mb-3" href="/">
          <Image
            src={`/to-do-list.png`}
            width={60}
            height={60}
            alt="google logo"
            className="ml-1 mr-4"
          />
          <span className="text-3xl">TODO LIST</span>
        </a>
        <Linkcard
          icon={<FiUser size={"1.3rem"} />}
          url={"/dashboard/profile"}
          con={"Dashboard"}
        />
        <Linkcard
          icon={<IoCheckboxOutline size={"1.3rem"} />}
          url={"/dashboard/notes"}
          con={"Notes"}
        />
        <Linkcard
          icon={<GoBell size={"1.3rem"} />}
          url={"/dashboard/notification"}
          con={"Notification"}
        />
        <Link
          href={"/logout"}
          className="bg-slate-800 group text-slate-400 hover:text-white mt-auto transition duration-300 p-3 w-full rounded-lg flex justify-start items-center"
        >
          <Image
            src={`/Untitled.jpeg`}
            width={40}
            height={40}
            alt="google logo"
            className="rounded-full mr-2"
          />{" "}
          username
          <FiLogOut className="ml-auto group-hover:text-red-600 transition duration-300" />
        </Link>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
