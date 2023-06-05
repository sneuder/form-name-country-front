import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://form-name-country.onrender.com/graphql',
  cache: new InMemoryCache(),
})

export default client
