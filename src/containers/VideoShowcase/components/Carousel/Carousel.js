import { useRef } from 'react';
import Carousel from 'antd/lib/carousel';
import { ReactComponent as CarouselButtonSvg } from '../../svgs/carousel-btn.svg';
import { Wrapper, CarouselContent, CarouselArrows } from './Styled';

const pauseAllVideos = function () {
  var iframes = document.querySelectorAll('iframe');
  iframes?.forEach((iframe) => {
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    );
  });
};

const CarouselComp = () => {
  const wrapperRef = useRef();
  const carouselRef = useRef();

  const handlePrevClick = () => {
    carouselRef.current.prev();
    pauseAllVideos(wrapperRef.current);
  };

  const handleNextClick = () => {
    carouselRef.current.next();
    pauseAllVideos(wrapperRef.current);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Carousel
        ref={carouselRef}
        infinite={false}
        dotPosition="top"
        draggable
        swipeToSlide
      >
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dletcr4lAck?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/dletcr4lAck?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/dletcr4lAck/maxresdefault.jpg alt='如何有效降低碳排，是台灣最緊急的議題之一！| 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="如何有效降低碳排，是台灣最緊急的議題之一！| 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aS5ccNDsWqI?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/aS5ccNDsWqI?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/aS5ccNDsWqI/maxresdefault.jpg alt='全球企業淨零減排新競爭 | 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="全球企業淨零減排新競爭 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W6PoDvbfNFM?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/W6PoDvbfNFM?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/W6PoDvbfNFM/maxresdefault.jpg alt='賴清德：不僅要減排到淨零，更要從中找出產業新契機！| 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="賴清德：不僅要減排到淨零，更要從中找出產業新契機！| 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vQDF90VbBAY?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/vQDF90VbBAY?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/vQDF90VbBAY/maxresdefault.jpg alt='彭啟明：不可輕忽的一股力量，新世代對未來的建議 | 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="彭啟明：不可輕忽的一股力量，新世代對未來的建議 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wtlGYNxXHF8?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/wtlGYNxXHF8?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/wtlGYNxXHF8/maxresdefault.jpg alt='ESG 雙雄難得同台! 台積電 何麗梅，玉山金 黃男州大秀減碳神招式 | 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="ESG 雙雄難得同台! 台積電 何麗梅，玉山金 黃男州大秀減碳神招式 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/blObjumc5LQ?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/blObjumc5LQ?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/blObjumc5LQ/maxresdefault.jpg alt='其實人人都可以做一點事，就能夠避免氣候災難｜2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="其實人人都可以做一點事，就能夠避免氣候災難｜2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/S-zja1DwF9w?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/S-zja1DwF9w?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/S-zja1DwF9w/maxresdefault.jpg alt='不僅要能源轉型，更要邁向淨零碳排 | 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="不僅要能源轉型，更要邁向淨零碳排 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gUFNJA-qOFE?enablejsapi=1"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/gUFNJA-qOFE?autoplay=1&enablejsapi=1><img src=https://img.youtube.com/vi/gUFNJA-qOFE/maxresdefault.jpg alt='全民都用同樣的態度共好，才能迎向淨零碳排的未來 | 2021《 如何避免氣候災難》行動論壇'><span>▶</span></a>"
            title="全民都用同樣的態度共好，才能迎向淨零碳排的未來 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
      </Carousel>
      <CarouselArrows className="left" onClick={handlePrevClick}>
        <CarouselButtonSvg />
      </CarouselArrows>
      <CarouselArrows className="right" onClick={handleNextClick}>
        <CarouselButtonSvg />
      </CarouselArrows>
    </Wrapper>
  );
};

export default CarouselComp;
