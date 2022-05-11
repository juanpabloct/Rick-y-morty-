import { gql } from "@apollo/client";

const CharactersQuery = gql`
  query Query {
    characters {
      results {
        name
        gender
        image
      }
    }
  }
`;
export default CharactersQuery;
