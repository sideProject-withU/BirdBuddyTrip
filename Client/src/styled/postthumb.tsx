import styled from 'styled-components';
export const PostThumbContainer = styled.article`
  display: flex;
  height: 8rem;
  border-bottom: 2px solid #789b9e;
  background-color: #e3ede9;
  padding: 1rem;
  &:hover {
    background-color: #d8ebe4;
  }
`;
export const PhotoColumn = styled.div`
  max-width: 6rem;
  max-height: 6rem;
  border-radius: 0.3rem;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const DetailColumn = styled.div`
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
  > .date {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }
  > .people-location {
    margin-bottom: 0.3rem;
    > .people {
      font-weight: 600;
      margin: 0 0.5rem 0 0;
    }
    > .location {
      font-weight: 600;
    }
  }
  > .options {
    > span {
      border-radius: 0.3rem;
      margin: 0 0.5rem 0 0;
      background-color: #fed1496d;
    }
  }
`;
export const LikeColumn = styled.div`
  font-size: 1.3rem;
  padding-left: 1rem;
  margin-left: auto;
  > .likes {
    > .fa-solid {
      color: #007580;
    }
    > .fa-regular {
      color: #789b9e;
    }
  }
`;
