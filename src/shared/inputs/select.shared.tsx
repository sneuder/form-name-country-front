import { FC, ChangeEvent } from 'react'
import { SelectInstruction } from '../../interfaces/form-base-instruction.interface'

interface SelectSharedProps {
  instruction: SelectInstruction
  handlerValue: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectShared: FC<SelectSharedProps> = ({ instruction, handlerValue }) => {
  const { label, identifier, options, defaultOption } = instruction
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
        defaultValue={'default'}
      >
        <option disabled value={'default'}>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectShared
