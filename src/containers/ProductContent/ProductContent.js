import Title from './components/Title';
import Content from './components/Content';
import contents from './contents';
import { Wrapper, ContentWrapper } from './styled';

const ProductContent = () => (
  <Wrapper id="product-content">
    <Title />

    <ContentWrapper>
      {contents.map((o, i) => (
        <Content key={i} {...o} />
      ))}
    </ContentWrapper>
  </Wrapper>
);

export default ProductContent;
