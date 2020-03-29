import React from 'react';
import { Styled } from './styles';

interface IButtonClose {
  onClick?: (e: React.MouseEvent) => void;
}

const ButtonClose: React.FC<IButtonClose> = ({ onClick: handleClick, children }) => (
  <Styled.ButtonClose onClick={handleClick}>
    {children ? children : <i className="fas fa-times" />}
  </Styled.ButtonClose>
);

export default ButtonClose;
