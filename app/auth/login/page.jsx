import Link from "next/link";
export default function login() {
  return (
    <div className="font-sans">
      <span className="text-3xl mb-4 block">LOGIN</span>
      <form>
        <span className="text-start block">Username</span>
        <input
          className="block bg-slate-800 mx-auto mb-7 mt-2 p-3 rounded-md w-full outline-none"
          placeholder="UserName"
          type="text"
        />
        <span className="text-start block">Password</span>

        <input
          className="block bg-slate-800 mx-auto mb-9 mt-2 p-3 rounded-md w-full outline-none"
          placeholder="Password"
          type="password"
        />
        <button className="bg-blue-600 py-3 w-full rounded-md " type="submit">
          LOGIN
        </button>
      </form>
        <Link className="block text-start text-blue-300 mt-2" href={`/auth/register`}>register</Link>

    </div>
  );
}
