export interface InputTextInstruction {
  identifier: string
  placeHolder: string
  label: string
}

export interface SelectInstruction {
  identifier: string
  label: string
  defaultOption: string
  options: {
    value: string
    text: string
  }[]
}

export interface SubmitInstruction {
  textValue: string
}
