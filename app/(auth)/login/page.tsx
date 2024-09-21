'use client';

import styled from 'styled-components'
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <Wapper>
            <main className="flex justify-center items-center h-screen">
                <div className=" border-medium border-content2 backdrop-blur-md !w-screen lg:!w-7/12 lg:!h-[620px] rounded-md box bg-[#18181b]">
                    <div className="md:!w-6/12 sm:!w-full p-8 mt-24 mx-auto sm:!mx-0">
                        <h1 className='text-4xl'>ورود</h1>
                        <p className='text-small text-content3 mt-5'>ثبت نام نکرده اید ؟ <Link className='text-primary' href="/register">ثبت نام</Link> </p>
                        <div className=' grid grid-cols-4 sm:grid-cols-5 grid-rows-3 gap-5 mt-8'>
                            <div className='col-span-2'>
                                <Input type="text" label="نام کاربری" className=' rounded-lg'/>
                            </div>
                            <div className='col-span-2'>
                                <Input type="text" label="نام" className=' rounded-lg'/>
                            </div>
                            <div className='col-span-4'>
                                <Input type="email" label="ایمیل"/>
                            </div>
                            <div className='col-span-4'>
                                <Input type="password" label="password" className='rounded-lg'/>
                            </div>
                            <Button className='col-span-4 h-12 !duration-400 transition-color' color="success" variant='ghost'>
                                ورود
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </Wapper>
    )
}

const Wapper = styled.div`

.box{
    background-image:
    linear-gradient(to left, #18181b 60%, rgba(0, 0, 0, 0)),
    url('/img/linuxWall.webp');
    background-size: cover;
}

@media only screen and (max-width: 768px) {
  .box{
    background-image:none;
    background-color:#18181b !important;
  }
}

`

export default LoginPage