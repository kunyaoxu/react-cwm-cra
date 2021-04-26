import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { Wrapper, BannerWrapper } from './styled';
import Mobile from './mobile';
import Desktop from './desktop';

const Navbar = () => {
  return (
    <Wrapper id="navbar">
      <BannerWrapper>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.webp`}
          alt="天下永續會"
          onClick={(e) => handleClickHashLink({ e, id: 'home' })}
        />
      </BannerWrapper>

      <Mobile />
      <Desktop />
    </Wrapper>
  );
};

export default Navbar;
