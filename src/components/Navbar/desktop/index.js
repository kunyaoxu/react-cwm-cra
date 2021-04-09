import { FaceBookIcon } from 'svgs';
import { Wrapper, ItemsBox, NavbarItem, FacebookItemBox } from './styled';

const Navbar = () => (
  <Wrapper>
    <ItemsBox>
      <NavbarItem href="#why-now">WHY NOW</NavbarItem>
      <NavbarItem href="#why-us">WHY US</NavbarItem>
      <NavbarItem href="#about-us">ABOUT US</NavbarItem>
      <NavbarItem href="#values-of-membership">VALUES OF MEMBERSHIP</NavbarItem>
      <NavbarItem href="#product-content">PRODUCT CONTENT</NavbarItem>
      <NavbarItem href="#join-enquiry" style={{ marginRight: '0.259259rem' }}>
        JOIN ENQUIRY
      </NavbarItem>
    </ItemsBox>

    <FacebookItemBox>
      <FaceBookIcon />
    </FacebookItemBox>
  </Wrapper>
);

export default Navbar;
