import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  > div {
    margin: 0.3rem;
    > input {
      display: none;
    }
    > label {
      font-weight: 600;
      border: 2px solid #fed049;
      padding: 0.01rem 0.3rem;
      border-radius: 1rem;
    }
    & :checked + label {
      background-color: #fed049;
    }
  }
`;
