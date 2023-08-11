import Link from "next/link"

const fetchSinglePosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
    return await res.json()
}


export default async function Post({ params, children }) {
    const { id } = params

    const post = await fetchSinglePosts(id)

    return (
        <article>
            <h1 className="text-lg font-bold">{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Comentarios</Link>
            {children}
        </article>
    )
}
