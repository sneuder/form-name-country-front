import { gql } from '@apollo/client'

const CREATE_USER = gql`
  mutation CreateUser($userToCreate: UserInput!) {
    createUser(userToCreate: $userToCreate) {
      name
    }
  }
`
export default CREATE_USER
