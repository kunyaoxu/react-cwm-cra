import Title from './components/Title';
// import Carousel from './components/Carousel';
import Content01 from './containers/Content01';
import Content02 from './containers/Content02';
import Content03 from './containers/Content03';
import Content04 from './containers/Content04';
import Content05 from './containers/Content05';
import PageSlogan from './components/PageSlogan';
import { Wrapper, ContentWrapper } from './styled';

const Rights = () => (
  <Wrapper id="rights">
    {/* 標頭 */}
    <Title />
    {/* 頁面slogan */}
    <PageSlogan />

    <ContentWrapper>
      <Content01 />
      <Content02 />
      <Content03 />
      <Content04 />
      <Content05 />
    </ContentWrapper>
  </Wrapper>
);

export default Rights;
