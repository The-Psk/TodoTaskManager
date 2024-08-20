"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Linkcard({ url, icon, con }) {
  const pathname = usePathname();
  const isavtive = pathname.startsWith(url);
  return (
    <Link
      href={url}
      className={`hover:bg-slate-800 group  text-slate-400 hover:text-white ${
        isavtive ? "bg-slate-800 text-white" : ""
      }  transition mb-3 duration-300 p-3 w-full rounded-lg flex justify-start items-center`}
    >
      <span
        className={`group-hover:text-blue-500 ${
          isavtive ? "text-blue-500" : ""
        } transition duration-300 mr-2`}
      >
        {icon}
      </span>
      {con}
    </Link>
  );
}
