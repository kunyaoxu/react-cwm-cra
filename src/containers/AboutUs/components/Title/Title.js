import useMobile from 'hooks/useMobile';
import { AboutSvg, AboutEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <AboutEngSvg />

          <StyledMobileChtTitle>什麼是天下永續會</StyledMobileChtTitle>
        </>
      ) : (
        <AboutSvg />
      )}
    </Wrapper>
  );
};

export default Title;
