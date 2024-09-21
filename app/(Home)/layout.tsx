import { Metadata } from "next";
import { Header } from "../components";

export const metadata : Metadata = {
    title:"Lirux "
}

const MainLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <Header/>
            <div className=" pt-24">
                {children}
            </div>
        </>
    )
}

export default MainLayout