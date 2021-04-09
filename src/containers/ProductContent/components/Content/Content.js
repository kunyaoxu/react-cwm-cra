import ContentTitle from '../ContentTitle';
import ContentBody from '../ContentBody';

import { Wrapper, ContentImg, ContentTextContainer } from './styled';

const Content = ({ icon, title, body, imgSrc }) => {
  return (
    <Wrapper>
      <ContentTextContainer>
        <ContentTitle icon={icon}>{title}</ContentTitle>
        <ContentBody>{body}</ContentBody>
      </ContentTextContainer>

      <ContentImg src={imgSrc} />
    </Wrapper>
  );
};

export default Content;
