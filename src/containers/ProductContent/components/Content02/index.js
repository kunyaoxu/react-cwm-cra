import React from 'react';
import useMobile from 'hooks/useMobile';
import ContentText from '../ContentText';

const Content02 = () => {
  const isMobile = useMobile();

  if (isMobile)
    return (
      <>
        <ContentText>政經界意見領袖齊聚一堂，提供意見與觀念的溝通</ContentText>
        <ContentText>平台，經由相互交流、分享，可以尋找企業成長的</ContentText>
        <ContentText>新思維、新動能。兩場企業家晚宴</ContentText>
        <ContentText>(2000大晚宴+CWEF冬季場晚宴)，在掌握國際與</ContentText>
        <ContentText>產業趨勢的同時，進行企業家的深度交流與激盪。</ContentText>
      </>
    );

  return (
    <>
      <ContentText>
        政經界意見領袖齊聚一堂，提供意見與觀念的溝通平台，
      </ContentText>
      <ContentText>
        經由相互交流、分享，可以尋找企業成長的新思維、新動能。
      </ContentText>
      <ContentText className="gap">
        兩場企業家晚宴(2000大晚宴+CWEF冬季場晚宴)，
      </ContentText>
      <ContentText>
        在掌握國際與產業趨勢的同時，進行企業家的深度交流與激盪。
      </ContentText>
    </>
  );
};

export default Content02;
