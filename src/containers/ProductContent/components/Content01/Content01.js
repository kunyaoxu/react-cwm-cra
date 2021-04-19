import { useState } from 'react';
import Modal from 'components/Modal';
import useMobile from 'hooks/useMobile';
import ContentText from '../ContentText';
import ModalContent from '../ModalContent';
import MobileModalContent from '../MobileModalContent';
import { LearnMoreButton, LearnMoreButtonContainer } from './Styled';

const Content01 = () => {
  const isMobile = useMobile();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {/* 桌面版文字 */}
      <ContentText className="only-desktop">
        每期會員安排一場為期兩天的永續培力工作坊，
      </ContentText>
      <ContentText className="only-desktop">
        形式包括企業參訪、個案探討、總編輯會客室、大師交流、趨勢分享等…。
      </ContentText>

      {/* 手機版文字 */}
      <ContentText className="only-mobile">
        每期會員安排一場為期兩天的永續培力工作坊，
      </ContentText>
      <ContentText className="only-mobile">
        形式包括企業參訪、個案探討、總編輯會客室、大師交流、
      </ContentText>
      <ContentText className="only-mobile">趨勢分享等…。</ContentText>

      <LearnMoreButtonContainer>
        <LearnMoreButton onClick={() => setIsModalVisible(true)}>
          瞭解
          <br />
          更多
        </LearnMoreButton>
      </LearnMoreButtonContainer>
      <Modal
        open={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        {isMobile ? (
          <MobileModalContent onCloseClick={() => setIsModalVisible(false)} />
        ) : (
          <ModalContent onCloseClick={() => setIsModalVisible(false)} />
        )}
      </Modal>
    </>
  );
};

export default Content01;
