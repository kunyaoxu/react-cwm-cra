import ContentTitle from '../ContentTitle';

import { Wrapper, ContentBody, ContentTextContainer } from './styled';

const Content = ({ icon, title, children, imgSrc }) => {
  return (
    <Wrapper>
      <ContentTextContainer>
        <ContentTitle icon={icon}>{title}</ContentTitle>
        <ContentBody>{children}</ContentBody>
      </ContentTextContainer>

      <picture>
        <source srcSet={`${imgSrc}.webp`} type="image/webp" />
        <img
          src={`${imgSrc}.jpeg`}
          alt="天下永續會會員時程表，第一期7月1日到9月30日，第二期10月1日到12月31日"
          width="338"
          height="433"
        />
      </picture>
    </Wrapper>
  );
};

export default Content;
