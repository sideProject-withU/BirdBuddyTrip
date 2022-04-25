import styled from 'styled-components';
import { signInClickProp } from '../state/typeDefs';

export const Container = styled.nav`
  position: fixed;
  max-width: 768px;
  height: 5rem;
  background-color: #007580;
  width: 100%;
`;

export const UpperContainer = styled(Container)`
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

interface isActiveProp {
  isActive: boolean;
}

//DownNav
export const DownContainer = styled(Container)`
  bottom: 0;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem 0;
  margin: 0;
`;
export const NavMenuList = styled.li<isActiveProp>`
  font-size: 2rem;
  color: ${(props) => (props.isActive ? '#fed049' : '#d8ebe4')};
  display: flex;
  cursor: pointer;
`;
