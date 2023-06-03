import InputTextShared from '../shared/inputs/input-text.shared'
import SelectShared from '../shared/inputs/select.shared'
import SubmitShared from '../shared/inputs/submit.shared'

import formInstruction from '../instructions/form.instruction'

const FormComp = () => {
  return (
    <form className="w-full h-fit max-w-sm mx-auto bg-white p-8 rounded-md shadow-md grid grid-cols-1 gap-6">
      <InputTextShared instruction={formInstruction.fullName} />
      <SelectShared instruction={formInstruction.countrySelect} />
      <SubmitShared instruction={formInstruction.submit} />
    </form>
  )
}

export default FormComp
