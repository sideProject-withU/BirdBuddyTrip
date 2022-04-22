import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  position: fixed;
  max-width: 768px;
  height: 5rem;
  background-color: #007580;
  top: 0;
  width: 100%;
`;

const Selection = styled.select`
  width: 5.5rem;
  padding: 0.5em 0.5em;
  font-weight: bold;
`;

const UpperNav = () => {
  const [choice, setChoice] = useState<string>('');
  const [searchClick, setFind] = useState<boolean>(false);
  const lists = [
    '지역',
    '서울',
    '경기도',
    '인천',
    '강원도',
    '대전',
    '충청남도',
    '충청북도',
    '광주',
    '전라남도',
    '전라북도',
    '대구',
    '경상북도',
    '경상남도',
    '울산',
    '부산',
  ];

  const options = lists.map((list, i) => {
    return (
      <option key={i} value={lists[i]}>
        {list}
      </option>
    );
  });

  return (
    <Container>
      <Selection
        onInput={(event: React.FormEvent<HTMLSelectElement>) => setChoice((event.target as HTMLInputElement).value)}
      >
        {options}
      </Selection>
      <div></div>
    </Container>
  );
};

export default UpperNav;
