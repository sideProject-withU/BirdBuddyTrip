import styled from 'styled-components';
import { showModalProp } from '../state/typeDefs';

export const ModalContainer = styled.div<showModalProp>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? 'block' : 'none')};
  border: 10px solid red;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 10px solid black;
  backdrop-filter: blur(4px);
`;

export const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  background-color: white;
  border-radius: 10px;
  height: 432px;
`;

export const CloseButton = styled.div`
  font-size: 15px;
  justify-content: flex-end;
  display: flex;
  width: 100%;
  cursor: pointer;
  z-index: 9999;
`;
export const Icon = styled.i`
  margin: 10px;
  padding: 10px;
`;
