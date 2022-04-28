import React from 'react';
import { Container } from '../../styled/options';

const GenderOption = () => {
  const handleOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
  };
  const genders = ['여자만', '남자만', '성별무관'];
  return (
    <Container>
      {genders.map((el, idx) => {
        return (
          <div key={idx}>
            <input type='radio' id={`${el}`} name='gender' onChange={handleOption} />
            <label htmlFor={`${el}`}>{el}</label>
          </div>
        );
      })}
    </Container>
  );
};
export default GenderOption;
