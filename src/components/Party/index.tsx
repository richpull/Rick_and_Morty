import React, { useEffect, useState, useRef } from 'react';
import CharacterGrid from '../CharacterGrid';
import CharacterGridItem from '../CharacterGridItem';

type Character = {
  name: string;
  image: string;
};

type IParty = {
  setMatchName: string[];
  item?: Character;
  cacheClear?: boolean;
  scrollTo?: any;
};

type PartyCollection = {
  [key: string]: Character;
};

const Party: React.FC<IParty> = ({
  scrollTo = false,
  setMatchName = [],
  item,
  cacheClear = false,
}) => {
  const [partyCollection, setPartyCollection] = useState<PartyCollection>({});
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (scrollTo && item && element.current) {
      window.scroll({
        top: element.current.offsetTop - 30,
        left: 0,
        behavior: 'smooth',
      });
    }
    if (item) {
      let overlapKey =
        setMatchName.find((name) => item['name'].search(new RegExp(name, 'ig')) > -1) || '';
      setPartyCollection(cacheClear ? {} : { ...partyCollection, [overlapKey]: item });
    }
  }, [item, cacheClear, scrollTo]);

  return (
    <div ref={element}>
      {setMatchName.length && Object.keys(partyCollection).length ? (
        <>
          <h1 className="uppercase text-center">Party</h1>
          <CharacterGrid className="mb-0">
            {setMatchName.map((name) => (
              <CharacterGridItem
                key={name}
                data={{
                  image: partyCollection[name] && partyCollection[name]['image'],
                  name,
                }}
              />
            ))}
          </CharacterGrid>
        </>
      ) : null}
    </div>
  );
};
export default Party;
