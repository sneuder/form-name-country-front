import { gql } from '@apollo/client'

const GET_COUNTRIES = gql`
  query countries {
    countries {
      name
    }
  }
`

export default GET_COUNTRIES
