import { useState } from 'react';
import {
  Container,
  LoginButton,
  MyPageIcon,
  SearchIcon,
  SearchInput,
  SearchWrap,
  Selection,
  UpperContainer,
} from '../../styled/Nav';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store/store';

const UpperNav = () => {
  const [choice, setChoice] = useState<string>('');
  const [signInClick, setSignInClick] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const isLogin: boolean = useSelector((state: RootState) => state.login.value);

  console.log(isLogin);

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
    <UpperContainer>
      <Selection
        onInput={(event: React.FormEvent<HTMLSelectElement>) => setChoice((event.target as HTMLInputElement).value)}
      >
        {options}
      </Selection>
      <SearchWrap>
        <SearchInput
          onFocus={() => {
            setIsSearching(true);
          }}
          onBlur={() => {
            setIsSearching(false);
          }}
        />
        <SearchIcon>
          <i className="fas fa-search" />
        </SearchIcon>
      </SearchWrap>
      {isLogin ? (
        <MyPageIcon className="fa-solid fa-user" />
      ) : (
        <LoginButton
          signInClick={signInClick}
          onClick={() => {
            setSignInClick(!signInClick);
          }}
        >
          로그인
        </LoginButton>
      )}
    </UpperContainer>
  );
};

export default UpperNav;
