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
`;
// add clients
const addClients = gql`
  mutation addClient($id:ID!, $name:String!, $email:String!, $phone:String!){
    addClient(id:$id, name:$name, email:$email, phone:$phone){
        id
        name
        email
        phone
    }
  }
`


export { deleteClients, addClients };