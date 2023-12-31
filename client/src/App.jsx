import Header from "./components/Header.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Client from "./components/Client.jsx";
const client = new ApolloClient({
  uri : 'http://localhost:5000/graphql',
  cache : new InMemoryCache()
});

function App() {
  return (
    <>
     <ApolloProvider client={client}>
      <Header />
      <Client />
      </ApolloProvider>
    </>
  );
}

export default App;
