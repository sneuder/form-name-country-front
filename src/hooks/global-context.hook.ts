import { useState } from 'react'
import { initialContext } from '../context'

const useGlobalContext = () => {
  const [context, setContext] = useState(initialContext)

  const dispatchContext = (property: string, value: string | number) => {
    setContext({
      ...context,
      [property]: value,
    })
  }

  return { context, dispatchContext }
}

export default useGlobalContext
