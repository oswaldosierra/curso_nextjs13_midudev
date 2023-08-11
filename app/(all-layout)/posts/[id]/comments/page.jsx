import Image from "next/image"

const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
        .then(res => res.json())
}

export default async function Post({ params }) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul>
            {comments.map(comment => (
                <li className="border shadow-md my-5 p-3" key={comment.id}>
                    <Image src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${comment.email}`} alt="avatar" width={40} height={40} />
                    <h2 className="font-bold">📎{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
