import Routers from './Routers';
import styled, { keyframes } from 'styled-components';

const flyingAnimation = keyframes`
 0% { left: 0%; bottom: 0%;}
 100% { left: 100%; bottom: 100%; }
`;

const FlyingBird = styled.img`
  position: fixed;
  width: 20rem;
  z-index: -5;
  animation-name: ${flyingAnimation};
  animation-duration: 20s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
`;

function App() {
  return (
    <div>
      <FlyingBird src="images/dove.png" alt="flyingBird" />
      <Routers />
    </div>
  );
}

export default App;
