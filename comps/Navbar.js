import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    return(
        <nav>
            <div className="logo">
                <Image src="/google.png" width={128} height={128}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/component"><a>Book</a></Link>
            <Link href="/component/test"><a>Test</a></Link>
        </nav>
    )
}

export default Navbar