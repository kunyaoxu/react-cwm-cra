import Carousel from './components/Carousel';
import { Wrapper, Description, MoreInfoButton } from './Styled';

const VideoShowcase = () => {
  return (
    <Wrapper>
      <Carousel />
      <Description>2021《 如何避免氣候災難》行動論壇精彩回顧</Description>
      <MoreInfoButton href="https://csr.cw.com.tw/article/41950">
        觀看更多精彩演講內容
      </MoreInfoButton>
    </Wrapper>
  );
};

export default VideoShowcase;
