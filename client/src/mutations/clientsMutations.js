import { gql } from "@apollo/client";

const deleteClients = gql`
 mutation deleteClient($id:ID!){
    deleteClient(id:$id){
        id
        name
        email
        phone
    }
 }
`


export { deleteClients };