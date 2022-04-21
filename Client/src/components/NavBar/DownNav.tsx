import styled from 'styled-components';

const Container = styled.nav`
  height: 5rem;
  position: fixed;
  bottom: 0;
  max-width: 768px;
  width: 100%;
  background-color: yellow;
`;
const DownNav = () => {
  return <Container>하단네비</Container>;
};
export default DownNav;
