import Link from "next/link"
import LikeButoon from "./LikeButoon"

const fetchPosts = () => {
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            validate: 60
        }
    })
        .then(res => res.json())
}

export default async function ListOfPosts() {
    const posts = await fetchPosts()
    return posts.map(post => (
        <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h2 className="text-blue-400">{post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <LikeButoon />
        </article>
    ))
}
