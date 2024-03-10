"use client"
import { useRouter } from "next/navigation"
function Register() {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => { router.push("/") }}>Register</button>
        </div>
    )
}

export default Register