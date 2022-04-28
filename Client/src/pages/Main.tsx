import GenderOption from '../components/Options/GenderOption';
import TypeOption from '../components/Options/TypeOption';
import PostThumb from '../components/Post/PostThumb';
import { dummyPosts } from '../dummys/dummyPosts';

const Main = () => {
  return (
    <div>
      <GenderOption />
      <TypeOption />
      {dummyPosts.map((el, idx) => (
        <PostThumb key={idx} post={el} />
      ))}
    </div>
  );
};
export default Main;
