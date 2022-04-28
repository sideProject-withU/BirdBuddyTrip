import React from 'react';
import { Container } from '../../styled/options';

const TypeOption = () => {
  const handleOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
  };
  const types = ['익스트림', '호캉스', '식도락', '힐링'];
  return (
    <Container>
      {types.map((el, idx) => {
        return (
          <div key={idx}>
            <input type='radio' id={`${el}`} name='type' onChange={handleOption} />
            <label htmlFor={`${el}`}>{el}</label>
          </div>
        );
      })}
    </Container>
  );
};

export default TypeOption;
