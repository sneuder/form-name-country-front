import { useContext } from 'react'
import { Context } from '../context'
import NotificationEnum from '../interfaces/enums/notification.enum'

const useNotification = () => {
  const { context, dispatchContext } = useContext(Context)

  const setNotification = (notificationState: NotificationEnum) => {
    dispatchContext('notification', notificationState)
  }

  return {
    notification: context.notification,
    setNotification,
  }
}

export default useNotification
