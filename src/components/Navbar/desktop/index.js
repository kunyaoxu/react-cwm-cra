import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { NAV_ITEMS_PROPS } from '../constants';
import { Wrapper, ItemsBox, NavbarItem } from './styled';

const Navbar = () => (
  <Wrapper>
    <ItemsBox>
      {NAV_ITEMS_PROPS.map((props, i) => {
        const { id, title, text } = props;
        const href = '#' + id;
        return (
          <NavbarItem
            key={i}
            href={href}
            title={title}
            onClick={(e) => handleClickHashLink({ e, id })}
          >
            {text}
          </NavbarItem>
        );
      })}
    </ItemsBox>
  </Wrapper>
);

export default Navbar;
