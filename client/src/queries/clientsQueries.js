import { gql } from "@apollo/client"


// get all the clients
const getClients = gql`
  query getClients {
    clients {
        name
        email
        phone
    }
  }`




export { getClients };