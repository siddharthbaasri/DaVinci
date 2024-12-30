'use client'

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return (
    <button onClick={() => signIn()}
            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all ease-in disabled:opacity-50 
                    disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm bg-transparent relative text-stone-700 hover:text-stone-700 border-stone-500 
                    hover:bg-transparent duration-150 hover:border-stone-600 rounded-lg hover:opacity-60 hover:shadow-none" type = "submit">Login</button>
  )
}