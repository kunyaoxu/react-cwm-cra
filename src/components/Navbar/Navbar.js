import useMobile from 'hooks/useMobile';
import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { Wrapper, BannerWrapper } from './styled';
import Mobile from './mobile';
import Desktop from './desktop';

const Navbar = () => {
  const isMobile = useMobile();
  return (
    <Wrapper id="navbar">
      <BannerWrapper>
        <picture onClick={(e) => handleClickHashLink({ e, id: 'home' })}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/logo.webp`}
            type="image/webp"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="天下永續會"
            width={isMobile ? '144.7' : '212.3'}
            height={isMobile ? '48.8' : '71.6'}
          />
        </picture>
      </BannerWrapper>

      {isMobile ? <Mobile /> : <Desktop />}
    </Wrapper>
  );
};

export default Navbar;
