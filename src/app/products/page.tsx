import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: "Product",
    },
}
function Products() {
    return (
        <div>
            <h1>Product list</h1>
            <p><Link href={"products/1"}>prod 1</Link></p>
            <p><Link href={"products/2"}>prod 2</Link></p>
            <p><Link href={"products/3"} replace>prod 3</Link></p>
        </div>
    )
}

export default Products