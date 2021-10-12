import Link from 'next/link'

const Navbar = () => {

    return(
        <nav>
            <div className="logo">
                <h1>Note list</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/component"><a>Book</a></Link>
            <Link href="/component/test"><a>Test</a></Link>
        </nav>
    )
}

export default Navbar