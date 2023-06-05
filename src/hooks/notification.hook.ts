import { useContext } from 'react'
import { Context } from '../context'
import NotificationEnum from '../interfaces/enums/notification.enum'

const useNotification = () => {
  const { notification, dispatchContext } = useContext(Context)

  const setNotification = (notificationState: NotificationEnum) => {
    if (!dispatchContext) return
    dispatchContext('notification', notificationState)
  }

  return {
    notification: notification,
    setNotification,
  }
}

export default useNotification
