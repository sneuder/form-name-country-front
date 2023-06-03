import { FC, ChangeEvent } from 'react'
import { InputTextInstruction } from '../../interfaces/form-base-instruction.interface'

interface InputTextSharedProps {
  instruction: InputTextInstruction
  handlerValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputTextShared: FC<InputTextSharedProps> = ({
  instruction,
  handlerValue,
}) => {
  const { label, identifier } = instruction

  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={identifier}
      >
        {label}
      </label>
      <input
        className="h-10 w-full rounded border p-2 text-sm focus:border-pink-600 focus:outline-none"
        type="text"
        id={identifier}
        name={identifier}
        placeholder="Esneider Ospina"
        onInput={handlerValue}
      />
    </div>
  )
}

export default InputTextShared
