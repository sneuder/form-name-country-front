import { useMutation } from '@apollo/client'
import CREATE_USER from '../graphql/mutations/user-create-mutation'
import { CreateUser } from '../interfaces/user.interface'

export const useCreateUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER)

  const handleCreateUser = (userToCreate: CreateUser) => {
    createUser({ variables: { userToCreate } })
  }

  return {
    loading,
    error,
    handleCreateUser,
  }
}
