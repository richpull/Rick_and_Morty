import styled from 'styled-components';

export const Search = styled.form`
  display: block;
  margin-bottom: 30px;
`;

export const SearchControl = styled.input`
  width: 100%;
  height: 80px;
  border: 1px solid #a0a0a0;
  padding: 0 27px;
  font-weight: 300;
  font-size: 30px;
  text-transform: uppercase;
  &::placeholder {
    text-transform: none;
  }
`;

export const Styled = {
  Search,
  SearchControl,
};
