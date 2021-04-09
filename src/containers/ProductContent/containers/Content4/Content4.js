import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

import ContentText from '../../components/ContentText';

export const ContentIcon04 = styled.img.attrs(() => ({
  src: '/svgs/product-content-4.svg',
}))`
  ${media.greaterThan('large')`
    width: ${pxToRem(110.7)};
  `}
  ${media.lessThan('large')`
    width: ${mPxToRem(78)};
  `}
`;
const Content4 = () => {
  return (
    <>
      {/* 桌面版文字 */}
      <ContentText className="only-desktop">
        國際政經局勢的動盪移轉、產業科技的變革創新，緊扣總體經濟發展！
      </ContentText>
      <ContentText className="only-desktop">
        如何從新局勢與科技，看見未來機會？
      </ContentText>
      <ContentText className="only-desktop">以天下永續會會員身份，</ContentText>
      <ContentText className="only-desktop">
        受邀參加天下雜誌年度經濟論壇，天下經濟論壇冬季場。
      </ContentText>

      {/* 手機版文字 */}
      <ContentText className="only-mobile">
        國際政經局勢的動盪移轉、產業科技的變革創新，
      </ContentText>
      <ContentText className="only-mobile">緊扣總體經濟發展！</ContentText>
      <ContentText className="only-mobile gap">
        如何從新局勢與科技，看見未來機會？以天下永續會會員身份，
      </ContentText>
      <ContentText className="only-mobile">
        受邀參加天下雜誌年度經濟論壇，天下經濟論壇冬季場。
      </ContentText>
    </>
  );
};

export default Content4;
