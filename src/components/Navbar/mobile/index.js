import { useState } from 'react';
import { Drawer } from 'antd';
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
            handleClickHashLink({ e, id: 'about-cws' });
            onClose();
          }}
        >
          ABOUT CWS
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'why-cws' });
            onClose();
          }}
        >
          WHY CWS
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'aspects' });
            onClose();
          }}
        >
          ASPECTS
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'values' });
            onClose();
          }}
        >
          VALUES
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'mission' });
            onClose();
          }}
        >
          MISSION
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'rights' });
            onClose();
          }}
        >
          RIGHTS
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'enquiry' });
            onClose();
          }}
        >
          ENQUIRY
        </DrawerItem>
        <DrawerItem
          onClick={(e) => {
            handleClickHashLink({ e, id: 'why-us' });
            onClose();
          }}
        >
          WHY US
        </DrawerItem>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
