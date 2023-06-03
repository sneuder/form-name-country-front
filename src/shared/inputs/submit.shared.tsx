import { FC } from 'react'
import { SubmitInstruction } from '../../interfaces/form-base-instruction.interface'

interface SubmitSharedProps {
  instruction: SubmitInstruction
  disabled: boolean
}

const SubmitShared: FC<SubmitSharedProps> = ({ instruction, disabled }) => {
  return (
    <input
      className="w-full bg-pink-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      type="submit"
      disabled={!disabled}
      value={instruction.textValue}
    />
  )
}

export default SubmitShared
