import { ApolloProvider } from '@apollo/client/react'
import client from './graphql'

import HomePage from './pages/home.page'

function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  )
}

export default App
