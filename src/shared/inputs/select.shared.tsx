import { FC } from 'react'
import { SelectInstruction } from '../../interfaces/form-base-instruction.interface'

interface SelectSharedProps {
  instruction: SelectInstruction
  handlerValue: any
}

const SelectShared: FC<SelectSharedProps> = ({ instruction, handlerValue }) => {
  const { label, identifier, options } = instruction
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={identifier}
      >
        {label}
      </label>
      <select
        className="h-10 w-full rounded border p-2 text-sm focus:border-pink-600 focus:outline-none bg-white"
        name={identifier}
        id={identifier}
        onInput={handlerValue}
      >
        <option disabled selected>
          Select your country
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectShared
