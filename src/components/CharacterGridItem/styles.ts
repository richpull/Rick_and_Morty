import styled from 'styled-components';

export const CharacterGridItem = styled.div`
  line-height: 0;
  background-color: #dadada;
  position: relative;
  height: 220px;
  overflow: hidden;
  > * {
    position: relative;
  }
`;
export const CharacterGridItem__img = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
  z-index: 150;
`;
export const CharacterGridItem__name = styled.div`
  position: absolute;
  z-index: 100;
  left: 10px;
  right: 10px;
  bottom: 28px;
  text-transform: uppercase;
  color: #fff;
  line-height: 1;
  text-align: center;
`;
export const CharacterGridItem__control = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px;
  z-index: 200;
  align-items: center;
  justify-content: right;
  * > {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;
export const Styled = {
  CharacterGridItem,
  CharacterGridItem__img,
  CharacterGridItem__name,
  CharacterGridItem__control,
};
