import styled from 'styled-components';
import { ErrorProps, showModalProp } from '../state/typeDefs';

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 3rem;
`;

export const Input = styled.input<ErrorProps>`
  all: unset;
  width: 60%;
  border-bottom: 2px solid ${(props) => (props.error ? 'red' : 'rgba(0, 0, 0, 0.2)')};
  margin: 10px;
  &::placeholder {
    font-size: 15px;
  }
  &:last-child {
    margin-bottom: 10px;
    background-color: red;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 12px;
`;

export const SignUpWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignUpLink = styled.div`
  margin: 10px 0px 20px 0px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
`;

export const SignUpLead = styled(SignUpLink)``;

export const SignUpButton = styled(SignUpLink)`
  color: #007580;
  margin-left: 5px;
`;

export const LoginButton = styled.button`
  all: unset;
  width: 55%;
  color: black;
  cursor: pointer;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: 0.4s;
  color: black;
  border-radius: 10px;
  margin: 10px 0px;
  background-color: rgb(216, 235, 228);
  &:hover {
    background-color: rgba(216, 235, 228, 0.5);
  }
`;

export const SocalLoginWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SocialButton = styled.div`
  margin: 15px;
  font-size: 13px;
`;

export const SocialIcon = styled.img`
  width: 3.3rem;
  color: grey;
`;

export const ColumnoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GuestButton = styled.div``;
