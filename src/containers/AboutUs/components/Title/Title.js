import { AboutSvg, AboutEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => (
  <Wrapper>
    {/* desktop */}
    <AboutSvg className="only-desktop" />

    {/* mobile */}
    <AboutEngSvg className="only-mobile" />
    <StyledMobileChtTitle>什麼是天下永續會</StyledMobileChtTitle>
  </Wrapper>
);

export default Title;
