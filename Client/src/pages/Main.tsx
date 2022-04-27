import PostThumb from '../components/Post/PostThumb';
import { dummyPosts } from '../dummys/dummyPosts';

const Main = () => {
  return (
    <div>
      {dummyPosts.map((el, idx) => (
        <PostThumb key={idx} post={el} />
      ))}
    </div>
  );
};
export default Main;
