import { createContext } from 'react'
import NotificationEnum from '../interfaces/enums/notification.enum'
import ContextGlobal from '../interfaces/context.interface'

export const initialContext: ContextGlobal = {
  notification: NotificationEnum.OFF,
}

export const Context = createContext(initialContext)
