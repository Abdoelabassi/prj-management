import { gql, useQuery } from "@apollo/client";

const getClients = gql`
  query getClients {
    clients {
        name
        email
        phone
    }
  }`



export default function Clients(){

    const { loading, error, data } = useQuery(getClients);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :somthing went wrong</p>;


    return (
        <>
            { !loading && !error && <h1>Clients</h1>}
        </>
    )
}