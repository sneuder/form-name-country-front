import { gql } from '@apollo/client'

const GET_COUNTRIES = gql`
  query countries {
    countries {
      name
      country
    }
  }
`

export default GET_COUNTRIES
