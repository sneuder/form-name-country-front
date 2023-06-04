import { useQuery } from '@apollo/client'
import GET_COUNTRIES from '../graphql/queries/countries-all.query'

export const useGetAllCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)
  const countries = data ? data.countries : data

  return { loading, error, countries }
}
