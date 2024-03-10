"use client"
function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div>
            <p>
                Error in review id Msg:{error.message}
            </p>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}

export default ErrorBoundary