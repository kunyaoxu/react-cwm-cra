import React from 'react';
import ReactModal from 'react-modal';
import { Wrapper } from './Styled';

const customStyle = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    touchAction: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'static',
    backgroundColor: 'transparent',
    overflow: 'initial',
    border: 'none',
    WebkitOverflowScrolling: 'touch',
  },
};

const ModalComponent = ({
  open,
  onRequestClose,
  closeOnOverlayClick = false,
  children,
}) => {
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <ReactModal
      isOpen={open}
      onAfterOpen={disableScroll}
      onAfterClose={enableScroll}
      onRequestClose={onRequestClose} // triggered when clicking on overlay or pressing ESC
      shouldCloseOnOverlayClick={closeOnOverlayClick}
      style={customStyle}
    >
      <Wrapper>{children}</Wrapper>
    </ReactModal>
  );
};

export default ModalComponent;
