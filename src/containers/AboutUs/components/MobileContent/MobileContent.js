import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import { mPxToRem } from 'utils/pxToRem';

const Wrapper = styled(Box)`
  color: white;
  font-family: Noto Sans TC;
  font-size: ${mPxToRem(10)};
  line-height: ${mPxToRem(12)};
  letter-spacing: ${mPxToRem(0.5)};
  text-shadow: 0 0 ${mPxToRem(5)} rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-top: ${mPxToRem(46.6)};

  ${media.greaterThan('large')`
    display: none;
  `}
`;

const ContentImg = styled.img`
  width: ${mPxToRem(335.5)};
  height: ${mPxToRem(308)};
  margin-top: ${mPxToRem(47)};
`;

const MobileContent = () => (
  <Wrapper>
    <p>針對企業面對當前經營的需求與痛點，</p>
    <p>鎖定精進公司治理、企業承諾、社會參與、環境永續四大面向，</p>
    <p>打造企業家追求永續的交流、共享、共學平台，</p>
    <p>是動盪新時代下最能掌握新機遇的企業永續社群。</p>

    <ContentImg
      src="/images/about-us-mobile-content.webp"
      alt="關於天下讀書會"
    />
  </Wrapper>
);

export default MobileContent;
