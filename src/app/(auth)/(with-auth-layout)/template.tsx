"use client"
import { usePathname, useRouter } from "next/navigation"
import "./style.css"
import { useState } from "react";
import Link from "next/link"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const [state, setState] = useState("")
    return (
        <>
            <input type="texx" name="" id="" value={state} onChange={(e) => setState(e.target.value)} />
            <h2>Auth layout</h2>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>

            {children}
        </>
    )
}
