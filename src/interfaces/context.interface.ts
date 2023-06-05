import NotificationEnum from './enums/notification.enum'

interface ContextGlobal {
  notification: NotificationEnum
  dispatchContext?: (property: string, value: string | number) => void
}

export default ContextGlobal
