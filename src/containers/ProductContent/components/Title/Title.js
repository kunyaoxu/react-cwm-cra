import useMobile from 'hooks/useMobile';
import MobileChtTitle from 'components/MobileChtTitle';
import { Wrapper } from './Styled';
import { ReactComponent as ProductEngSvg } from '../../svgs/product-eng.svg';
import { ReactComponent as ProductSvg } from '../../svgs/product.svg';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <ProductEngSvg />
          <MobileChtTitle>天下永續會提供</MobileChtTitle>
        </>
      ) : (
        <ProductSvg />
      )}
    </Wrapper>
  );
};

export default Title;
