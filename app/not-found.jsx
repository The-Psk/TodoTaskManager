import Link from "next/link";
export default function () {
  return (
    <div className=" h-screen items-center mx-auto flex flex-col text-center justify-center">
      <div className="lg:text-6xl text-4xl">PAGE NOT FOUND</div>
      <Link
        className="my-9 text-blue-600 py-3 font-semibold px-7 rounded-md text-center "
        href={"/"}
      >
        BACK
      </Link>
    </div>
  );
}
