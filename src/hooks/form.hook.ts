import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

interface formBaseValuesProps {
  [key: string]: string | number
}

const useForm = (formBaseValues: formBaseValuesProps) => {
  const [values, setValues] = useState(formBaseValues)
  const [valid, setValid] = useState(false)

  const handleValid = () => {
    const validator = !Object.values(values).some((value) => value === '')
    if (validator) return setValid(true)
    setValid(false)
  }

  const handleValue = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value
    const key = event.target.name

    setValues({ ...values, [key]: value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!valid) return
  }

  useEffect(() => {
    handleValid()
  }, [values])

  return {
    handleValue,
    handleSubmit,
    valid,
  }
}

export default useForm
