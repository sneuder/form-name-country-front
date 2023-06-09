import { useMemo } from 'react'

import InputTextShared from '../shared/inputs/input-text.shared'
import SelectShared from '../shared/inputs/select.shared'
import SubmitShared from '../shared/inputs/submit.shared'

import formInstruction, {
  formBaseValues,
} from '../instructions/form.instruction'

import useForm from '../hooks/form.hook'
import { useCreateUser } from '../hooks/user.hook'
import { useGetAllCountries } from '../hooks/country.hook'

import * as formatService from '../services/format.service'

const FormComp = () => {
  const { loading, countries } = useGetAllCountries()
  const { handleCreateUser } = useCreateUser()

  const { handleSubmit, handleValue, valid } = useForm(
    formBaseValues,
    handleCreateUser
  )

  const countriesMemoized = useMemo(() => {
    if (loading) return []
    return formatService.selectCountry(countries)
  }, [loading])

  formInstruction.countrySelect.options = countriesMemoized

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
