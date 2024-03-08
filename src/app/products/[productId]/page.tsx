
function ProductItem({ params }: { params: { productId: string } }) {

    return (
        <div>Product Item {params.productId}</div>
    )
}

export default ProductItem