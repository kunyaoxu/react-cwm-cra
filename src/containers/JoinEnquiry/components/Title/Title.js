import { JoinEnquirySvg, JoinEngSvg } from 'svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => (
  <Wrapper>
    {/* desktop */}
    <JoinEnquirySvg className="only-desktop" />

    {/* mobile */}
    <JoinEngSvg className="only-mobile" />
    <StyledMobileChtTitle>申請表</StyledMobileChtTitle>
  </Wrapper>
);

export default Title;
