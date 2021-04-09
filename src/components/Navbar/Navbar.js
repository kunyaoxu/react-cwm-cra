import { LogoSvg } from 'svgs';
import { Wrapper, BannerBox, BannerWrapper } from './styled';
import Mobile from './mobile';
import Desktop from './desktop';

const Navbar = () => {
  return (
    <Wrapper>
      <BannerWrapper>
        <BannerBox>
          <LogoSvg />
        </BannerBox>
      </BannerWrapper>

      <Mobile />
      <Desktop />
    </Wrapper>
  );
};

export default Navbar;
