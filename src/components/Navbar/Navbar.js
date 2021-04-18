import { LogoSvg } from 'svgs';
import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { Wrapper, BannerWrapper } from './styled';
import Mobile from './mobile';
import Desktop from './desktop';

const Navbar = () => {
  return (
    <Wrapper id="navbar">
      <BannerWrapper>
        <LogoSvg onClick={(e) => handleClickHashLink({ e, id: 'home' })} />
      </BannerWrapper>

      <Mobile />
      <Desktop />
    </Wrapper>
  );
};

export default Navbar;
