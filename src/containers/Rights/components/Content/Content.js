import ContentTitle from '../ContentTitle';

import { Wrapper, ContentBody, ContentTextContainer } from './styled';

const Content = ({ icon, alt, title, children, imgSrc }) => {
  return (
    <Wrapper>
      <ContentTextContainer>
        <ContentTitle icon={icon}>{title}</ContentTitle>
        <ContentBody className="product-content-card-body">
          {children}
        </ContentBody>
      </ContentTextContainer>

      <picture>
        <source srcSet={`${imgSrc}.webp`} type="image/webp" />
        <img src={`${imgSrc}.jpeg`} alt={alt} width="338" height="433" />
      </picture>
    </Wrapper>
  );
};

export default Content;
