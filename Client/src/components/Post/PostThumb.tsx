import React, { useState } from 'react';
import { PostThumbContainer, PhotoColumn, DetailColumn, LikeColumn } from '../../styled/postthumb';
import { PostProps } from '../../propstype/PostProps';

const PostThumb: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  //임시로 넣은 값(채팅 참여자수)
  const chatpeople = 1;

  return (
    <PostThumbContainer>
      <PhotoColumn>
        <img src={post.image} alt='photo_test1' />
      </PhotoColumn>
      <DetailColumn>
        <header>
          <h1>{post.title}</h1>
        </header>
        <div className='date'>
          <span className='start-date'>{post.start_date}</span>
          <span> - </span>
          <span className='finish-date'>{post.finish_date}</span>
        </div>
        <div className='people-location'>
          <span>인원 </span>
          <span className='people'>
            {chatpeople}/{post.people}
          </span>
          <span className='location'>{post.location}</span>
        </div>
        <div className='options'>
          <span className='gender'>{post.option_gender}</span>
          <span className='type'>{post.option_type}</span>
        </div>
      </DetailColumn>
      <LikeColumn>
        <span className='likes' onClick={handleLike}>
          {isLiked ? <i className='fa-solid fa-heart'></i> : <i className='fa-regular fa-heart'></i>}
        </span>
      </LikeColumn>
    </PostThumbContainer>
  );
};

export default PostThumb;
