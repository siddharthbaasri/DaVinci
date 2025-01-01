'use client'

import { VscAccount } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"
import SignIn from '@/components/auth-buttons'
import { useState } from 'react'
import {signOut, useSession} from "next-auth/react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();


    const handleNav = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="fixed w-full h-16 shadow-xl bg-zinc-50 z-50">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="hidden sm:flex">
                    <Link href = "/">
                        <Image src = {logo} alt = "logo" width="55" height="12" className = "border-2" priority/>
                    </Link>
                    <ul className="hidden sm:flex items-center">
                        <Link href = "/courses" className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                            <li className="ml-5 uppercase hover:border-b text-l">Courses</li>
                        </Link>
                        <Link href = "" className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                            <li className="ml-5 uppercase hover:border-b text-l">Forums</li>
                        </Link>
                        <Link href = "" className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                            <li className="ml-5 uppercase hover:border-b text-l">Volunteer</li>
                        </Link>
                        <Link href = "" className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                            <li className="ml-5 uppercase hover:border-b text-l">About</li>
                        </Link>
                    </ul>
                </div>
                
                <div className="hidden sm:flex">
                    {session === null ? 
                    <div className="mr-5 flex items-center justify-center">
                        <SignIn/>
                    </div>
                    :
                    <div className="flex items-center relative group transition-all px-2 py-3">
                        <div className = "px-5">
                            <p className = "dark:text-gray-500">Hello {session?.user?.name}</p>
                        </div>
                        <div>
                            <VscAccount className="text-black text-4xl hover:text-green-200 transition duration-300 dark:hover:text-gray-400 dark:text-black"/>
                            <div className="absolute right-2 top-15 w-auto hidden flex-col gap-1 rounded-l bg-white py-3 shadow-md transition-all group-hover:flex">
                                <Link href="" className = "cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black dark:hover:text-gray-400 dark:text-black"> 
                                    Profile
                                </Link>
                                <Link href="" onClick={(e) => {
                                    e.preventDefault();
                                    signOut();
                                }} 
                                className = "cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black dark:hover:text-gray-400 dark:text-black"> 
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                    }
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
        </nav>
    )
}


export default Navbar