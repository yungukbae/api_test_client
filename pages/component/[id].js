import {useEffect} from "react";

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths =  data.map(users => {
        // console.log(users);
        return {
            params: {id: users.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id;
    const res =  await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props: { users: data }
    }

}

const Details = ({ users }) => {
    return(
        <div>
            <h2>{users.name}</h2>
            <p>{users.email}</p>
            <p>{users.website}</p>
            <p>{users.address.city}</p>
        </div>
    );
}

export default Details