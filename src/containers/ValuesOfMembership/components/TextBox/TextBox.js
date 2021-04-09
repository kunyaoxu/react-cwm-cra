import { Wrapper, TitleText } from './styled';

const TextBox = ({ index, children }) => {
  return (
    <Wrapper>
      <TitleText>
        <p>{`0${index}`}</p>
      </TitleText>
      {children}
    </Wrapper>
  );
};

export default TextBox;
