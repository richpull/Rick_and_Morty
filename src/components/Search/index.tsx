import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { Styled } from './styles';

import { GET_CHARACTER, ICharacterData, ICharacter } from './query';

import ResultsSearch from '../SearchResults';
import Party from '../Party';

type SelectResultItem = ICharacter | undefined;

export interface ISearchContext {
  selectResultHandler: (id: string) => void;
  results: ICharacter[];
}
export const SearchContext = React.createContext<ISearchContext>({
  selectResultHandler() {},
  results: [],
});
export const Provider = SearchContext.Provider;

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectResultItem, setSelectResultItem] = useState<SelectResultItem>(undefined);
  const [getCharacter, { data = {}, loading }] = useLazyQuery<ICharacterData>(GET_CHARACTER);
  const searchQueryMinSize = 2;
  useEffect(() => {
    if (searchQuery.length < searchQueryMinSize) {
      return;
    }
    const timeout = setTimeout(() => {
      getCharacter({ variables: { name: searchQuery } });
    }, 300); // delay
    return () => clearTimeout(timeout);
  }, [searchQuery]);
  const { results = [] } = data.characters || {};

  const selectResultHandler = (id: string) => {
    const set = results.filter((item) => item.id === id)[0] || false;
    if (set) {
      setSelectResultItem(set);
    }
  };

  const searchControlChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value.trim());
  };
  return (
    <>
      <Styled.Search>
        <Styled.SearchControl
          className="ellipsis"
          type="text"
          placeholder="Enter character name..."
          value={searchQuery}
          onChange={(e) => searchControlChangeHandler(e)}
        />
      </Styled.Search>
      {loading ? (
        <div>loading ...</div>
      ) : !results.length && searchQuery.length >= searchQueryMinSize ? (
        <div>Nothing found for your request</div>
      ) : null}
      <Provider
        value={{
          selectResultHandler,
          results,
        }}
      >
        {results !== null && (
          <>
            <ResultsSearch data={results} />
            <Party scrollTo setMatchName={['rick', 'morty']} item={selectResultItem} />
          </>
        )}
      </Provider>
    </>
  );
};
export default Search;
