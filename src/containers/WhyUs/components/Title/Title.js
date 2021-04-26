import useMobile from 'hooks/useMobile';
import { WhyUsSvg, WhyEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <WhyEngSvg />
          <StyledMobileChtTitle>為什麼是天下雜誌</StyledMobileChtTitle>
        </>
      ) : (
        <WhyUsSvg />
      )}
    </Wrapper>
  );
};

export default Title;
