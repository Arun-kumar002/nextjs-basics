import { notFound } from "next/navigation"
function ReviewDetail({ params }: { [key: string]: any }) {
    if (Number(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>

            product:{params.productId}
            Review:{params.reviewId}
        </div>
    )
}

export default ReviewDetail