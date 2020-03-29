import React, { useContext, useEffect, useState } from 'react';
import { ICharacter } from '../Search/query';

import CharacterGrid from '../CharacterGrid';
import CharacterGridItem from '../CharacterGridItem';
import ButtonClose from '../ButtonClose';

import { SearchContext } from '../Search';

interface ISearchResults {
  data: ICharacter[];
}
type Results = ICharacter[];

const SearchResults: React.FC<ISearchResults> = ({ data = [] }) => {
  const { selectResultHandler } = useContext(SearchContext);

  const [results, setResults] = useState<Results>([]);

  useEffect(() => {
    setResults(data);
  }, [data]);

  const resultItemRemoveHandler = (id: string) => {
    setResults(results.filter((item) => item.id !== id));
  };

  if (!results.length) {
    return null;
  }

  return (
    <CharacterGrid>
      {results.map((result) => {
        return (
          <CharacterGridItem
            onClick={() => {
              selectResultHandler(result.id);
            }}
            key={result.id}
            data={result}
          >
            {{
              Control: (
                <>
                  <ButtonClose
                    onClick={(e) => {
                      e.stopPropagation();
                      resultItemRemoveHandler(result.id);
                    }}
                  />
                </>
              ),
            }}
          </CharacterGridItem>
        );
      })}
    </CharacterGrid>
  );
};
export default SearchResults;
/*

 */
