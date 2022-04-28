import GenderOption from '../components/Options/GenderOption';
import TypeOption from '../components/Options/TypeOption';
import PostThumb from '../components/Post/PostThumb';
import { dummyPosts } from '../dummys/dummyPosts';
import { OptionContainer } from '../styled/options';

const Main = () => {
  return (
    <div>
      <OptionContainer>
        <GenderOption />
        <TypeOption />
      </OptionContainer>
      {dummyPosts.map((el, idx) => (
        <PostThumb key={idx} post={el} />
      ))}
    </div>
  );
};
export default Main;
