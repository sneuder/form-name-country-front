import NotificationEnum from '../interfaces/enums/notification.enum'

const notificationInstruction = {
  [NotificationEnum.SUCCESS]: {
    bgColor: 'bg-green-100',
    color: 'text-green-700',
    title: 'Success',
    textContent: 'New user created',
  },
  [NotificationEnum.PROGRESS]: {
    bgColor: 'bg-blue-100',
    color: 'text-blue-700',
    title: 'On progress',
    textContent: 'Your request was sent',
  },
  [NotificationEnum.ERROR]: {
    bgColor: 'bg-red-100',
    color: 'text-red-700',
    title: 'Error',
    textContent: 'Your request was not sent',
  },
}

export default notificationInstruction
