import { FaceBookIcon } from 'svgs';
import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { Wrapper, ItemsBox, NavbarItem, FacebookItemBox } from './styled';

const Navbar = () => (
  <Wrapper>
    <ItemsBox>
      <NavbarItem
        href="#why-now"
        onClick={(e) => handleClickHashLink({ e, id: 'why-now' })}
      >
        WHY NOW
      </NavbarItem>
      <NavbarItem
        href="#why-us"
        onClick={(e) => handleClickHashLink({ e, id: 'why-us' })}
      >
        WHY US
      </NavbarItem>
      <NavbarItem
        href="#about-us"
        onClick={(e) => handleClickHashLink({ e, id: 'about-us' })}
      >
        ABOUT US
      </NavbarItem>
      <NavbarItem
        href="#values-of-membership"
        onClick={(e) => handleClickHashLink({ e, id: 'values-of-membership' })}
      >
        VALUES OF MEMBERSHIP
      </NavbarItem>
      <NavbarItem
        href="#product-content"
        onClick={(e) => handleClickHashLink({ e, id: 'product-content' })}
      >
        PRODUCT CONTENT
      </NavbarItem>
      <NavbarItem
        href="#join-enquiry"
        onClick={(e) => handleClickHashLink({ e, id: 'join-enquiry' })}
        style={{ marginRight: '0.259259rem' }}
      >
        JOIN ENQUIRY
      </NavbarItem>
    </ItemsBox>

    <FacebookItemBox>
      <FaceBookIcon />
    </FacebookItemBox>
  </Wrapper>
);

export default Navbar;
