import { Metadata } from "next"

export const generateMetadata = ({ params }: { params: { productId: string } }): Metadata => {
    return { title: `Product ${params.productId}` }
}
function ProductItem({ params }: { params: { productId: string } }) {

    return (
        <div>Product Item {params.productId}</div>
    )
}

export default ProductItem