import { FC } from 'react'
import { SubmitInstruction } from '../../interfaces/form-base-instruction.interface'

interface SubmitSharedProps {
  instruction: SubmitInstruction
}

const SubmitShared: FC<SubmitSharedProps> = ({ instruction }) => {
  return (
    <input
      className="w-full bg-pink-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer"
      type="submit"
      value={instruction.textValue}
    />
  )
}

export default SubmitShared
