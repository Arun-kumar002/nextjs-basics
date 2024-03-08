

export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h2>Feature products</h2>
        </>
    )
}
