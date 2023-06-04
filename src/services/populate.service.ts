import { SelectInstruction } from '../interfaces/form-base-instruction.interface'

export const countryInstruction = (
  countries: { name: string }[],
  countrySelect: SelectInstruction
) => {
  countries.forEach((country: { name: string }) => {
    countrySelect.options.push({
      text: country.name,
      value: country.name,
    })
  })
}
