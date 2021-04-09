import { useState } from 'react';
import { Drawer } from 'antd';
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
        <DrawerItem>WHY NOW</DrawerItem>
        <DrawerItem>WHY US</DrawerItem>
        <DrawerItem>ABOUT US</DrawerItem>
        <DrawerItem>VALUES OF MEMBERSHIP</DrawerItem>
        <DrawerItem>PRODUCT CONTENT</DrawerItem>
        <DrawerItem>JOIN ENQUIRY</DrawerItem>
        <FacebookItem>
          <FaceBookIcon />
        </FacebookItem>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
