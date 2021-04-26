import { WhyNowSvg, WhyEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => (
  <Wrapper>
    {/* desktop */}
    <WhyNowSvg className="only-desktop" />

    {/* mobile */}
    <WhyEngSvg className="only-mobile" />
    <StyledMobileChtTitle className="only-mobile">
      為什麼是現在
    </StyledMobileChtTitle>
  </Wrapper>
);

export default Title;
