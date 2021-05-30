import { ReactComponent as CWSIcon } from 'containers/Mission/svgs/CWS-icon.svg';
import {
  Wrapper,
  Divider,
  SloganTextBox,
  BrandTextBox,
  PurposeTextBox,
} from './styled';

const Home = () => {
  return (
    <Wrapper id="home">
      {/* 第一行字 */}
      <SloganTextBox>共享、共學、共好</SloganTextBox>

      {/* 第二行字 */}
      <BrandTextBox>天下永續會</BrandTextBox>

      {/* 分割線 */}
      <Divider />

      {/* 分割線下文字 */}
      <PurposeTextBox>
        <CWSIcon />
        {' ESG: From compliance to competitiveness.'}
      </PurposeTextBox>
    </Wrapper>
  );
};

export default Home;
