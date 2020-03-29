import React, { ReactNode } from 'react';
import { Styled } from './styles';

export interface ICharacterGridItemData {
  image?: string | undefined;
  name?: string;
}

interface ICharacterGridItem {
  data?: ICharacterGridItemData;
  onClick?: (e: React.MouseEvent) => void;
  children?: {
    Control?: ReactNode;
  };
}

const CharacterGridItem: React.FC<ICharacterGridItem> = ({
  data = {},
  children = {},
  onClick: handleClick,
}) => {
  const { image, name, Control } = Object.assign({}, data, children);
  return (
    <Styled.CharacterGridItem
      onClick={handleClick}
      style={{ cursor: handleClick ? 'pointer' : 'default' }}
    >
      {Control && <Styled.CharacterGridItem__control>{Control}</Styled.CharacterGridItem__control>}
      {image && <Styled.CharacterGridItem__img src={image} alt={name || ''} />}
      {name && <Styled.CharacterGridItem__name>{name}</Styled.CharacterGridItem__name>}
    </Styled.CharacterGridItem>
  );
};
export default CharacterGridItem;
