import Image from "next/image";
import { IoIosCamera } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import Auc from "@/app/components/auc";
import Procard from "@/app/components/profcard";
import { Suspense } from "react";

export default function profile() {
  return (
    <div className=" flex gap-1 items-center h-screen justify-center">
      <div className="bg-slate-900 rounded-3xl h-9- m-5 w-3/12 flex flex-col overflow-hidden relative">
        <Image
          src={"/Untitled.jpeg"}
          className="object-contain"
          alt="profile user"
          width={600}
          height={600}
        />
        <span className="p-3 flex justify-start items-center transition cursor-pointer duration-200 hover:bg-opacity-90 bg-slate-950 bg-opacity-50 absolute top-0 ">
          <IoIosCamera size={"3rem"} />
          <span className=" text-2xl font-semibold font-mono pt-1 pl-2">
            edit profile
          </span>
        </span>
        <p className="text-center text-3xl font-medium py-4">username</p>
        <div className="h-2/5 mt-auto flex justify-center items-center gap-7 m-6">
          <div className="flex flex-col h-3/5 w-1/2 border border-blue-800 border-3 rounded-2xl gap-5 p-6 bg-blue-950 bg-opacity-50">
            <div className="text-center flex justify-center items-center">
              <FaPeopleGroup className="mr-2" />
              Social
            </div>
            <div className="flex text-xs items-center">
              <MdPeopleAlt size={"1.2rem"} className="mr-2 text-orange-400" />
              Teammate : 2
            </div>
            <div className="flex text-xs items-center">
              <FaUserTie size={"1.2rem"} className="mr-2 text-purple-500" />
              Employer : 3
            </div>
            <div className="flex text-xs items-center">
              <TiStarFullOutline
                size={"1.3rem"}
                className="mr-2 text-yellow-400"
              />
              Respect : 10
            </div>
          </div>
          <div className="flex flex-col h-3/5 w-1/2 border border-blue-800 border-3 rounded-2xl gap-5 p-6 bg-blue-950 bg-opacity-50">
            <div className="text-center flex justify-center items-center">
              <FaTasks className="mr-2" />
              Tasks
            </div>
            <div className="flex text-xs items-center">
              <BiClipboard size={"1.1rem"} className="mr-2 text-blue-500" />
              All task: 25
            </div>
            <div className="flex text-xs items-center ">
              <BiTask size={"1.1rem"} className="mr-2 text-green-500" />
              Complete task: 12
            </div>
            <div className="flex text-xs items-center">
              <BiTaskX size={"1.1rem"} className="mr-2 text-red-600" />
              !Complete task: 13
            </div>
          </div>
        </div>
      </div>
      <div className=" h-9- flex gap-9 flex-col m-4 w-3/12">
        <span className="  rounded-3xl h-1/2 bg-slate-900 overflow-scroll">
          <div className=" p-4 border-b border-b-blue-900 flex justify-between items-center">
            <span className=" text-xl font-medium flex items-center">
              <FaUserTie size={"1.2rem"} className="mr-2 text-purple-500" />
              Employers
            </span>
          </div>
        </span>
        <span className="  rounded-3xl h-1/2 overflow-scroll bg-slate-900">
          <div className=" px-4 py-4 border-b border-b-blue-900 flex justify-between items-center">
            <span className=" text-xl font-medium flex items-center">
              <BiTask size={"1.4rem"} className="mr-2 text-green-500" />
              Complete Task
            </span>
          </div>
        </span>
      </div>

      <div className=" h-9- flex gap-9 flex-col m-4 w-3/12">
        <span className="  rounded-3xl h-1/2 overflow-scroll bg-slate-900">
          <div className=" px-4 py-2 border-b border-b-blue-900 flex justify-between items-center">
            <span className=" text-xl font-medium flex items-center">
              <MdPeopleAlt size={"1.4rem"} className="mr-2 text-orange-400" />
              My Teammate
            </span>
            <span className="flex items-center text-blue-500 font-semibold hover:bg-slate-800 transition duration-200 cursor-pointer py-2 rounded-full px-4">
              <FaPlus className="mr-1" size={"1.2rem"} />
              add
            </span>
          </div>
          <Suspense fallback={<div>loading...</div>}>
            <Procard
              src={"/Untitled.jpeg"}
              username={"mosafa"}
              task={12}
              respect={5}
            />
          </Suspense>
        </span>
        <span className="  rounded-3xl h-1/2 overflow-scroll bg-slate-900">
          <div className=" p-4 border-b border-b-blue-900 flex justify-between items-center">
            <span className=" text-xl font-medium flex items-center">
              <BiTaskX size={"1.4rem"} className="mr-2 text-red-600" />
              Not Complete task
            </span>
          </div>
          <Auc
            title={"hii"}
            body={`
          distinctio illum eius eveniet, atque animi consequatur quis ea?`}
            emp={"jonh"}
          />
        </span>
      </div>
    </div>
  );
}
