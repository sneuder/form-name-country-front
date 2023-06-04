import { useMutation } from '@apollo/client'
import { CreateUser } from '../interfaces/user.interface'
import CREATE_USER from '../graphql/mutations/user-create-mutation'

import useNotification from './notification.hook'
import NotificationEnum from '../interfaces/enums/notification.enum'

export const useCreateUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER)
  const { setNotification } = useNotification()

  const handleCreateUser = (userToCreate: CreateUser) => {
    setNotification(NotificationEnum.PROGRESS)
    createUser({ variables: { userToCreate } })
      .then((_response) => setNotification(NotificationEnum.SUCCESS))
      .catch((_error) => setNotification(NotificationEnum.ERROR))
      .finally(() =>
        setTimeout(() => setNotification(NotificationEnum.OFF), 5000)
      )
  }

  return {
    loading,
    error,
    handleCreateUser,
  }
}
