export default function AuthLayout({ children }) {
  return (
    <div className=" mx-auto flex h-screen justify-center items-center">
      <div className="bg-gray-900 wsh text-center p-11 rounded-lg">{children}</div>
    </div>
  );
}
