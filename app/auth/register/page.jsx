import Link from "next/link";

export default function Register() {
  return (
    <div className="font-sans">
      <span className="text-3xl mb-4 block">REGISTER</span>
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
        <input id="em" className="hidden peer" type="checkbox" />
        <label
          htmlFor="em"
          className="inline-flex items-center justify-between transition duration-150 w-full p-3 mb-9 text-slate-500 bg-white border-2 border-slate-200 rounded-lg cursor-pointer dark:hover:text-slate-300 dark:border-slate-700 peer-checked:border-blue-600 hover:text-slate-600 dark:peer-checked:text-slate-300 dark:peer-checked:bg-slate-700 select-none peer-checked:text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <div className="block">
            <div className="w-full text-lg">Is Employer</div>
          </div>
        </label>
        <button className="bg-blue-600 py-3 w-full rounded-md" type="submit">
          REGISTER
        </button>
      </form>
      <Link className="block text-start text-blue-300 mt-2" href="/auth/login">
        login
      </Link>
    </div>
  );
}
