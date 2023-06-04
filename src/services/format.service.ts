export const selectCountry = (countries: { name: string }[]) => {
  return countries.map((country: { name: string }) => {
    return {
      text: country.name,
      value: country.name,
    }
  })
}
