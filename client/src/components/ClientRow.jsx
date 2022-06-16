import React from 'react'
import { FaTrash } from "react-icons/fa"
import { useMutation } from "@apollo/client";
import { deleteClients } from "../mutations/clientsMutations";
import { getClients } from '../queries/clientsQueries';



const ClientRow = ({ client }) => {
    const [deleteClient] = useMutation(deleteClients, {
        variables:{ id:client.id } ,
        refetchQueries:[{ query: getClients },]
    } )
  return (
    
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={deleteClient} >
                    <FaTrash/>

                </button>
            </td>
        </tr>
        
    
  )
}

export default ClientRow