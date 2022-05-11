import { gql } from "@apollo/client";

const CharacterQuery = gql`
  query Query($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender

      image

      created
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;
export default CharacterQuery;
