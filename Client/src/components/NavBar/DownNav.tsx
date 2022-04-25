import { useLocation, useNavigate } from 'react-router-dom';
import { DownContainer, NavMenu, NavMenuList } from '../../styled/Nav';

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
    <DownContainer>
      <NavMenu>
        {menus.map((menu, idx) => {
          return (
            <NavMenuList key={idx} isActive={pathname === menu.location} onClick={() => handleMenuClick(menu.location)}>
              <i className={menu.className}></i>
            </NavMenuList>
          );
        })}
      </NavMenu>
    </DownContainer>
  );
};
export default DownNav;
