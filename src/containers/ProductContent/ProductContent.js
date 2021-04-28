// import { ProductContent01Svg } from './svgs';
import Title from './components/Title';
// import Content from './components/Content';
import Carousel from './components/Carousel';
import Content01 from './containers/Content01';
import Content02 from './containers/Content02';
import Content03 from './containers/Content03';
import Content04 from './containers/Content04';
import Content05 from './containers/Content05';
import { Wrapper, ContentWrapper } from './styled';

const ProductContent = () => (
  <Wrapper id="product-content">
    <Title />

    <ContentWrapper>
      <Content01 />
      <Carousel />
      <Content02 />
      <Content03 />
      <Content04 />
      <Content05 />
    </ContentWrapper>
  </Wrapper>
);

export default ProductContent;
