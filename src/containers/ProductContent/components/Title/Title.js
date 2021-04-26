import useMobile from 'hooks/useMobile';
import { ProductSvg, ProductEngSvg } from '../../svgs';
import MobileChtTitle from 'components/MobileChtTitle';
import { Wrapper } from './Styled';

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
