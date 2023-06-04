import {
  InputTextInstruction,
  SelectInstruction,
  SubmitInstruction,
} from '../interfaces/form-base-instruction.interface'

export interface FormInstruction {
  fullName: InputTextInstruction
  countrySelect: SelectInstruction
  submit: SubmitInstruction
}

const formInstruction: FormInstruction = {
  fullName: {
    identifier: 'name',
    placeHolder: 'Esneider Ospina',
    label: 'Full name',
  },
  countrySelect: {
    identifier: 'country',
    label: 'Country',
    defaultOption: 'Select your country',
    options: [],
  },
  submit: {
    textValue: 'Register',
  },
}

export const formBaseValues = {
  [formInstruction.fullName.identifier]: '',
  [formInstruction.countrySelect.identifier]: '',
}

export default formInstruction
