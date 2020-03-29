import gql from 'graphql-tag';

export interface ICharacter {
  name: string;
  image: string;
  id: string;
}

export interface ICharacterData {
  characters?: {
    results: ICharacter[];
  };
}

export const GET_CHARACTER = gql`
  query($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;
