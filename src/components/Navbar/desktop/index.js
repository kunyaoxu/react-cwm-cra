import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { Wrapper, ItemsBox, NavbarItem } from './styled';

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
        href="#about-cws"
        onClick={(e) => handleClickHashLink({ e, id: 'about-cws' })}
      >
        ABOUT CWS
      </NavbarItem>
      <NavbarItem
        href="#why-cws"
        onClick={(e) => handleClickHashLink({ e, id: 'why-cws' })}
      >
        WHY CWS
      </NavbarItem>
      <NavbarItem
        href="#aspects"
        onClick={(e) => handleClickHashLink({ e, id: 'aspects' })}
      >
        ASPECTS
      </NavbarItem>
      <NavbarItem
        href="#values"
        onClick={(e) => handleClickHashLink({ e, id: 'values' })}
      >
        VALUES
      </NavbarItem>
      <NavbarItem
        href="#mission"
        onClick={(e) => handleClickHashLink({ e, id: 'mission' })}
      >
        MISSION
      </NavbarItem>
      <NavbarItem
        href="#rights"
        onClick={(e) => handleClickHashLink({ e, id: 'rights' })}
      >
        RIGHTS
      </NavbarItem>
      <NavbarItem
        href="#enquiry"
        onClick={(e) => handleClickHashLink({ e, id: 'enquiry' })}
      >
        ENQUIRY
      </NavbarItem>
      <NavbarItem
        href="#why-us"
        onClick={(e) => handleClickHashLink({ e, id: 'why-us' })}
      >
        WHY US
      </NavbarItem>
    </ItemsBox>
  </Wrapper>
);

export default Navbar;
