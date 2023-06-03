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
    identifier: 'fullName',
    placeHolder: 'Esneider Ospina',
    label: 'Full name',
  },
  countrySelect: {
    identifier: 'country',
    label: 'Country',
    defaultOption: 'Select your country',
    options: [
      {
        text: 'value',
        value: 'value',
      },
      {
        text: 'value',
        value: 'value',
      },
    ],
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
