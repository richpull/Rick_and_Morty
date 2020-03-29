import React from 'react';
import { Styled } from './styles';

import CharacterGridItem from '../CharacterGridItem';

interface ICharacterGrid {
  data?: any[];
}

const CharacterGrid: React.FC<ICharacterGrid & React.HTMLAttributes<HTMLDivElement>> = ({
  data,
  children,
  ...props
}) => {
  if (children) {
    return <Styled.CharacterGrid {...props}>{children}</Styled.CharacterGrid>;
  }
  return data && data.length ? (
    <Styled.CharacterGrid {...props}>
      {data.map((item) => (
        <CharacterGridItem data={item} />
      ))}
    </Styled.CharacterGrid>
  ) : null;
};

export default CharacterGrid;
