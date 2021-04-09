import { ProductSvg, ProductEngSvg } from 'svgs';
import MobileChtTitle from 'components/MobileChtTitle';
import { Wrapper } from './Styled';

const Title = () => (
  <Wrapper>
    {/* Desktop */}
    <ProductSvg className="only-desktop" />

    {/* Mobile */}
    <ProductEngSvg className="only-mobile" />
    <MobileChtTitle>天下永續會提供</MobileChtTitle>
  </Wrapper>
);

export default Title;
