import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;


function Client() {
   const {loading, error, data} =  useQuery(GET_CLIENTS)
   if(loading) return <p>Loading</p>
   if(error) return <p>Something went Wrong</p>
  return <>
   {!loading && !error && (
    <h1>Clients</h1>
   )}
  </>;
}

export default Client;
