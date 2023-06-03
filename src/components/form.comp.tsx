import InputTextShared from '../shared/inputs/input-text.shared'
import SelectShared from '../shared/inputs/select.shared'
import SubmitShared from '../shared/inputs/submit.shared'

import formInstruction, {
  formBaseValues,
} from '../instructions/form.instruction'
import useForm from '../hooks/form.hook'

const FormComp = () => {
  const { handleSubmit, handleValue, valid } = useForm(formBaseValues)

  return (
    <form
      className="w-full h-fit max-w-sm mx-auto bg-white p-8 rounded-md shadow-md grid grid-cols-1 gap-6"
      onSubmit={handleSubmit}
    >
      <InputTextShared
        instruction={formInstruction.fullName}
        handlerValue={handleValue}
      />
      <SelectShared
        instruction={formInstruction.countrySelect}
        handlerValue={handleValue}
      />
      <SubmitShared instruction={formInstruction.submit} disabled={valid} />
    </form>
  )
}

export default FormComp
