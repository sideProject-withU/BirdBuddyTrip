import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

interface isActiveProp {
  isActive: boolean;
}

const Container = styled.nav`
  height: 5rem;
  position: fixed;
  bottom: 0;
  max-width: 768px;
  width: 100%;
  background-color: #007580;
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem 0;
  margin: 0;
`;
const NavMenuList = styled.li<isActiveProp>`
  font-size: 2rem;
  color: ${(props) => (props.isActive ? '#fed049' : '#d8ebe4')};
  display: flex;
  cursor: pointer;
`;
const DownNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menus = [
    { className: 'fa-solid fa-house', location: '/main' },
    { className: 'fa-solid fa-pen-to-square', location: '/makepost' },
    { className: 'fa-solid fa-comments', location: '/chatlist' },
    { className: 'fa-solid fa-user', location: '/mypage' },
  ];

  const handleMenuClick = (location: string) => {
    navigate(location);
  };
  return (
    <Container>
      <NavMenu>
        {menus.map((menu, idx) => {
          return (
            <NavMenuList key={idx} isActive={pathname === menu.location} onClick={() => handleMenuClick(menu.location)}>
              <i className={menu.className}></i>
            </NavMenuList>
          );
        })}
      </NavMenu>
    </Container>
  );
};
export default DownNav;
