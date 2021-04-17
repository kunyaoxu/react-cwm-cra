import { LogoSvg } from 'svgs';
import { Wrapper, BannerWrapper } from './styled';
import Mobile from './mobile';
import Desktop from './desktop';

const Navbar = () => {
  return (
    <Wrapper>
      <BannerWrapper>
        <LogoSvg />
      </BannerWrapper>

      <Mobile />
      <Desktop />
    </Wrapper>
  );
};

export default Navbar;
