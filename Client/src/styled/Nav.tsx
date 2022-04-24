import styled from 'styled-components';
import { signInClickProp } from '../state/typeDefs';

export const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 768px;
  height: 5rem;
  background-color: #007580;
  top: 0;
  width: 100%;
  padding: 30px;
`;

export const Selection = styled.select`
  width: 5.5rem;
  padding: 0.5em 0.5em;
  font-weight: bold;
  background-color: #d8ebe4;
  color: #282846;
  outline: none;
`;

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 13rem;
  text-decoration: none;
  border: none;
  padding: 10px 0px;
  background-color: transparent;
  font-size: 20px;
  border-bottom: 2px solid #d8ebe4;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  color: #d8ebe4;
  font-size: 30px;
  position: absolute;
  right: 3%;
  top: 0;
  margin-top: 5px;
`;

export const MyPageIcon = styled.i`
  font-size: 2rem;
  color: #d8ebe4;
`;

export const LoginButton = styled.button<signInClickProp>`
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => (props.signInClick ? '#fed049' : '#d8ebe4')};
  font-size: 20px;
  border: 0;
  background-color: transparent;
  cursor: grab;
`;
