import styled from 'styled-components';
export const ButtonClose = styled.div`
  display: inline-flex;
  cursor: pointer;
  height: 30px;
  min-width: 30px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.75);
  transition: background-color 0.25s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;
export const Styled = {
  ButtonClose,
};
