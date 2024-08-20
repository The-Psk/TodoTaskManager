import "./globals.css";
// import { Provider } from "react-redux";
// import { store } from "@/(store)/store";


export const metadata = {
  title: "Todo Task Manager",
  description: "sample project for Emoloyer and developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Provider store={store}></Provider> */}
        {children}
      </body>
    </html>
  );
}
