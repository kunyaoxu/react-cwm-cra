import { useState } from 'react';
import Modal from 'components/Modal';
import useMobile from 'hooks/useMobile';
import ContentText from '../ContentText';
import MobileContentText from '../MobileContentText';
import ModalContent from '../ModalContent';
import MobileModalContent from '../MobileModalContent';
// import { LearnMoreButton, LearnMoreButtonContainer } from './Styled';

const Content01 = () => {
  const isMobile = useMobile();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {isMobile ? (
        <MobileContentText>
          「永續培力工作坊」為永續會的一大特色，是針對每期會員一場為期二天的培力工作坊。將針對公司治理、企業承諾、社會參與、環
          境永續四大面向，各以Best
          practice與分組討論兩形式展開各以典範借鏡與分組討論兩形式展開。
        </MobileContentText>
      ) : (
        <>
          <ContentText>
            「永續培力工作坊」為永續會的一大特色，是針對每期會員一場為期二天
          </ContentText>
          <ContentText>
            的培力工作坊。將針對公司治理、企業承諾、社會參與、環境永續四大
          </ContentText>
          <ContentText>
            面向，各以Best practice與分組討論兩形式展開各以典範借鏡與分組
          </ContentText>
          <ContentText>討論兩形式展開。</ContentText>
        </>
      )}

      {/* <LearnMoreButtonContainer>
        <LearnMoreButton onClick={() => setIsModalVisible(true)}>
          瞭解
          <br />
          更多
        </LearnMoreButton>
      </LearnMoreButtonContainer> */}
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
