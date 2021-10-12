import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Book = ({ users }) => {

    return(
        <>
            <Head>
                <title>Next Page | Book</title>
            </Head>
            <h1>All books</h1>
            {users.map(users => (
                <div key={users.id}>
                    <Link href={'/component/' + users.id} key={users.id}><a>
                        <h3>{users.name}</h3>
                    </a>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Book