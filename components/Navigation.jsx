import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'About',
    route: '/about'
}, {
    label: 'Posts',
    route: '/posts'
}]

export default function Navigation() {
    return (
        <header className='border p-2 m-3'>
            <nav>
                <ul className='flex'>
                    {links.map(({ label, route }) => (
                        <li key={route} className='mx-2'>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
