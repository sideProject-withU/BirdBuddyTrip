import styled from 'styled-components';
export const Container = styled.article`
  height: 8rem;
  border: 5px solid #d8ebe4;
  padding: 1rem;
  > header {
    font-size: 1.5rem;
  }
`;
export const PeopleRegion = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
export const JourneyDate = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
export const Options = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
const Post = () => {
  return (
    <Container>
      <header>
        <h1>Post제목</h1>
      </header>
      <PeopleRegion>
        <span>인원</span>
        <span>지역</span>
      </PeopleRegion>
      <JourneyDate>
        <span>시작날짜</span>
        <span>종료날짜</span>
      </JourneyDate>
      <Options>
        <span>태그1</span>
        <span>태그2</span>
      </Options>
    </Container>
  );
};

export default Post;
