'use client';

import { Button } from "@nextui-org/button"
import { useRouter } from "next/navigation";
const Header = () => {
    const router = useRouter();

    return (
        <>
            <header className="h-14 border-b-small border-content2 flex items-center justify-around backdrop-blur-xl fixed top-0 inset-x-0">
                <div className="flex items-center">
                    <h2 className="font-bold text-2xl me-6">LIRux</h2>
                    <ul className=" list-none flex flex-row items-center gap-5">
                        <li className="list-item text-content4 text-sm hover:text-white transition-colors duration-75">بلاگ</li>
                        <li className="list-item text-content4 text-sm hover:text-white transition-colors duration-75">پرسش و پاسخ</li>
                        <li className="list-item text-content4 text-sm hover:text-white transition-colors duration-75">لینوکس</li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <Button color="primary" variant="shadow" className="h-10 rounded-md" onClick={() => router.push("/login")}>
                        ورود
                    </Button>
                    <Button color="primary" variant="light" className="rounded-md border-sm border-small border-primary transition-colors duration-75" onClick={() => router.push("/register")}>
                        ثبت نام
                    </Button>
                </div>
            </header>
        </>
    )
}

export default Header