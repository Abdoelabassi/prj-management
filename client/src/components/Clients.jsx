import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { getClients } from "../queries/clientsQueries";
import Spinner from "./Spinner";





export default function Clients(){

    const { loading, error, data } = useQuery(getClients);

    if (loading) return <Spinner/>;
    if (error) return <p>Error :somthing went wrong</p>;


    return (
        <>
            { !loading && !error && (
              <table className="table table-hover" >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {data.clients.map((client, index)=>(
                    <ClientRow key={index} client={client} />
                  ))}
                </tbody>
              </table>
            )}
        </>
    )
}