import { Wrapper, TitleText } from './styled';

const TextBox = ({ index, children }) => {
  return (
    <Wrapper>
      <TitleText>{`0${index}`}</TitleText>
      {children}
    </Wrapper>
  );
};

export default TextBox;
