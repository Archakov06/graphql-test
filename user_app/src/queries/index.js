import { gql } from 'apollo-boost';

export const GET_USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      name
      full_name
      age
      city
      tag
      url
      knowledge {
        language
        frameworks
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query {
    allUsers {
      id
      name
      age
      knowledge {
        language
      }
    }
  }
`;

export const CHANGE_USER_CITY = gql`
  mutation changeUserCity($userID: ID!, $city: String!) {
    updateUserCity(userID: $userID, city: $city) {
      city
    }
  }
`;
