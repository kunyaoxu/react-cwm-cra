import MobileChtTitle from 'components/MobileChtTitle';
import { ReactComponent as TitleSvg } from 'svgs/schedule.svg';
import { ReactComponent as MobileTitleSvg } from 'svgs/schedule-eng.svg';
import { Wrapper } from './Styled';

const Title = () => (
  <Wrapper>
    {/* Desktop */}
    <TitleSvg className="only-desktop" />

    {/* Mobile */}
    <MobileTitleSvg className="only-mobile" />
    <MobileChtTitle>天下永續會會員時程表</MobileChtTitle>
  </Wrapper>
);

export default Title;
