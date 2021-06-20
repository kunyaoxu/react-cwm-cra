import { useState } from 'react';
import { Drawer } from 'antd';
import { NAV_ITEMS_PROPS } from '../constants';
import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { HamburgerSvg, DrawerCloseSvg } from '../svgs';
import { HamburgerBox, CloseIconBox, DrawerItem } from './styled';

const bodyStyle = {
  padding: '2.246376rem 0',
  textAlign: 'center',
};

const MobileNavbar = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const onHamburgerClick = () => {
    setVisible(true);
  };

  return (
    <>
      <HamburgerBox onClick={onHamburgerClick}>
        <HamburgerSvg />
      </HamburgerBox>
      <Drawer
        placement="left"
        visible={visible}
        onClose={onClose}
        bodyStyle={bodyStyle}
        closable
        closeIcon={
          <CloseIconBox>
            <DrawerCloseSvg />
          </CloseIconBox>
        }
      >
        {NAV_ITEMS_PROPS.map((props, i) => {
          const { id, text } = props;
          return (
            <DrawerItem
              key={i}
              onClick={(e) => {
                handleClickHashLink({ e, id });
                onClose();
              }}
            >
              {text}
            </DrawerItem>
          );
        })}
      </Drawer>
    </>
  );
};

export default MobileNavbar;
