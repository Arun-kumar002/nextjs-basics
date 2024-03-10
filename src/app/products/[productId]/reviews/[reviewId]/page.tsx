import { notFound } from "next/navigation"
function ReviewDetail({ params }: any) {
    if (Number(params.reviewId) > 1000) {
        notFound();
    }
    if (params.productId == "1") {
        throw new Error("Prodct id not valid")
    }
    return (
        <div>
            product:{params.productId}
            Review:{params.reviewId}
        </div>
    )
}

export default ReviewDetail