import styled from 'styled-components';
export const Container = styled.article`
  display: flex;
  height: 8rem;
  border-bottom: 2px solid #789b9e;
  background-color: #e3ede9;
  padding: 1rem;
  &:hover {
    background-color: #d8ebe4;
  }
  > .col-01 {
    max-width: 6rem;
    max-height: 6rem;
    border-radius: 0.3rem;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > .col-02 {
    padding-left: 1rem;
    max-width: 38rem;
    > header {
      margin: 0.3rem 0;
      h1 {
        font-weight: bold;
        font-size: 1.3rem;
        height: 1.3rem;
        overflow: hidden;
      }
    }
    > .people-region {
      margin-bottom: 0.3rem;
    }
    > .date {
      font-size: 0.8rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
    > .options {
      > span {
        border-radius: 0.3rem;
        margin: 0 0.3rem 0 0;
        background-color: #fed1496d;
      }
    }
  }
  > .col-03 {
    padding-left: 1rem;
    margin-left: auto;
  }
`;
const Post = () => {
  return (
    <Container>
      <div className='col-01'>
        <img src='images/photo_test1.jpeg' alt='photo_test1' />
      </div>
      <div className='col-02'>
        <header>
          <h1>Post제목이 길면어떻게 될까요오오오오오</h1>
        </header>
        <div className='date'>
          <span>2022.03.01</span>
          <span>-</span>
          <span>2022.03.03</span>
        </div>
        <div className='people-region'>
          <span>인원 1/10</span>
          <span>경상북도</span>
        </div>
        <div className='options'>
          <span>성별무관</span>
          <span>익스트림</span>
        </div>
      </div>
      <div className='col-03'>
        <i className='fa-regular fa-heart'></i>
        <i className='fa-solid fa-heart'></i>
      </div>
    </Container>
  );
};

export default Post;
