import useMobile from 'hooks/useMobile';
import { ValuesSloganSvg, ValuesEngSloganSvg } from '../../svgs';
import MobileChtTitle from 'components/MobileChtTitle';
import { Wrapper } from './Styled';

const Title = () => {
  const isMobile = useMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <>
          <ValuesEngSloganSvg />
          <MobileChtTitle>永續會價值</MobileChtTitle>
        </>
      ) : (
        <ValuesSloganSvg />
      )}
    </Wrapper>
  );
};

export default Title;
