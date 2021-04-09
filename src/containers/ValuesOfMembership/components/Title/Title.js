import { ValuesSloganSvg, ValuesEngSloganSvg } from 'svgs';
import MobileChtTitle from 'components/MobileChtTitle';
import { Wrapper } from './Styled';

const Title = () => (
  <Wrapper>
    {/* desktop */}
    <ValuesSloganSvg className="only-desktop" />

    {/* mobile */}
    <ValuesEngSloganSvg className="only-mobile" />
    <MobileChtTitle>永續會價值</MobileChtTitle>
  </Wrapper>
);

export default Title;
