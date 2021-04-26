import { WhyUsSvg, WhyEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => (
  <Wrapper>
    {/* desktop */}
    <WhyUsSvg className="only-desktop" />

    {/* mobile */}
    <WhyEngSvg className="only-mobile" />
    <StyledMobileChtTitle>為什麼是天下雜誌</StyledMobileChtTitle>
  </Wrapper>
);

export default Title;
