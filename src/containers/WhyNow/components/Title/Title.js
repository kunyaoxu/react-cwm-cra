import useMobile from 'hooks/useMobile';
import { WhyNowSvg, WhyEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <WhyEngSvg />
          <StyledMobileChtTitle>為什麼是現在</StyledMobileChtTitle>
        </>
      ) : (
        <WhyNowSvg />
      )}
    </Wrapper>
  );
};

export default Title;
