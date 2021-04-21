import { Wrapper, TitleText } from './styled';

const CHT_INDEX = ['一', '二', '三', '四', '五', '六'];

const TextBox = ({ index, children }) => {
  return (
    <Wrapper>
      <TitleText>{`價值${CHT_INDEX[index]}`}</TitleText>
      {children}
    </Wrapper>
  );
};

export default TextBox;
