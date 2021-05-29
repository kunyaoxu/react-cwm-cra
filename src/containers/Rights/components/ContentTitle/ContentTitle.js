import { Wrapper, TitleText } from './styled';

const ContentTitle = ({ icon, children }) => {
  return (
    <Wrapper>
      {icon}
      <TitleText>{children}</TitleText>
    </Wrapper>
  );
};

export default ContentTitle;
