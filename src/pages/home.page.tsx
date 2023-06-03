import FormComp from '../components/form.comp'

const HomePage = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
      <FormComp />
    </section>
  )
}

export default HomePage
