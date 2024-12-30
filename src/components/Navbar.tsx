'use client'

import { VscAccount } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link'
import globe from "../../public/globe.svg"
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleNav = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="fixed w-full h-16 shadow-xl bg-zinc-50 z-50">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="hidden sm:flex">
                    <Link href = "/">
                        <Image src = {globe} alt = "logo" width="55" height="12" className = "border-2" priority/>
                    </Link>
                    <ul className="hidden sm:flex items-center">
                        <Link className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400" href = "">
                            <li className="ml-5 uppercase hover:border-b text-l">Courses</li>
                        </Link>
                        <Link className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400" href = "">
                            <li className="ml-5 uppercase hover:border-b text-l">Contact Us</li>
                        </Link>
                    </ul>
                </div>
                
                <div className="hidden sm:flex">
                    <div className="mr-5 flex items-center justify-center">
                        <button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm bg-transparent relative text-stone-700 hover:text-stone-700 border-stone-500 hover:bg-transparent duration-150 hover:border-stone-600 rounded-lg hover:opacity-60 hover:shadow-none">Login</button>
                    </div>

                    <Link href ="" className="items-center relative group transition-all px-2 py-3">
                        <VscAccount className="text-black-500 text-4xl hover:text-green-200 transition duration-300"/>
                        <div className="absolute right-2 top-15 w-auto hidden flex-col gap-1 rounded-l bg-white py-3 shadow-md transition-all group-hover:flex">
                            <Link href="" className = "cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"> 
                                Profile
                            </Link>
                            <Link href="" className = "cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"> 
                                Logout
                            </Link>
                        </div>
                    </Link>
                </div>
                <div onClick = {handleNav} className="sm:hidden cursor-pointer">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                isOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration 500" 
                : "fixed left-[-100%] top-0 w-[65%] p-10 ease-in duration 500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick = {handleNav} className = "cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className = "flex-col py-4">
                    <ul>
                        <Link href = "">
                            <li onClick = {() => setIsOpen(false)} className="py-4">Courses</li>
                        </Link>
                        <Link href = "">
                            <li onClick = {() => setIsOpen(false)} className="py-4">Contact Us</li>
                        </Link>
                        <Link href = "">
                            <li onClick = {() => setIsOpen(false)} className="py-4">Profile</li>
                        </Link>
                    </ul>
                </div>
            </div>
            {/* <VscAccount className="text-blue-500 text-4xl hover:text-green-200 transition duration-300"/> */}
        </nav>
    )
}


export default Navbar