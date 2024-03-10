import Link from "next/link"
function Home() {
    return (
        <>
            <div>Home</div>
            <Link href={"/products"} >Product</Link>
        </>
    )
}

export default Home