import { useState } from 'react';
import { Drawer } from 'antd';
import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import { HamburgerSvg, DrawerCloseSvg, FaceBookIcon } from 'svgs';
import { HamburgerBox, CloseIconBox, DrawerItem, FacebookItem } from './styled';

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
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'why-now' });
            onClose();
          }}
        >
          WHY NOW
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'why-us' });
            onClose();
          }}
        >
          WHY US
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'about-us' });
            onClose();
          }}
        >
          ABOUT US
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'values-of-membership' });
            onClose();
          }}
        >
          VALUES OF MEMBERSHIP
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'product-content' });
            onClose();
          }}
        >
          PRODUCT CONTENT
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'join-enquiry' });
            onClose();
          }}
        >
          JOIN ENQUIRY
        </DrawerItem>
        <FacebookItem>
          <FaceBookIcon />
        </FacebookItem>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
