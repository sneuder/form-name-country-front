import { ApolloProvider } from '@apollo/client/react'
import client from './graphql'

import Notification from './components/notification.comp'
import HomePage from './pages/home.page'

import { Context } from './context'
import useGlobalContext from './hooks/global-context.hook'

function App() {
  const contextValue = useGlobalContext()

  return (
    <Context.Provider value={contextValue}>
      <ApolloProvider client={client}>
        <Notification />
        <HomePage />
      </ApolloProvider>
    </Context.Provider>
  )
}

export default App
