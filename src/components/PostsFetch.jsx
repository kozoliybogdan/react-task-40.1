import { useEffect, useState } from "react"

export default function PostsFetch() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true

        async function fetchPosts() {
            try {
                setIsLoading(true)
                setError(null)

                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
                if (!res.ok) throw new Error(`Request failed: ${res.status}`)

                const data = await res.json()
                if (isMounted) setPosts(data)
            } catch (err) {
                if (isMounted) setError(err instanceof Error ? err.message : "Unknown error")
            } finally {
                if (isMounted) setIsLoading(false)
            }
        }

        fetchPosts()

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <div className="card">
            <h2>Posts (useEffect + fetch)</h2>

            {isLoading && <p>Loading...</p>}
            {error && <p className="error">Error: {error}</p>}

            {!isLoading && !error && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}