import { Wrapper, SloganTextBox, BrandTextBox, PurposeTextBox } from './styled';

const Home = () => {
  return (
    <Wrapper id="home">
      <SloganTextBox>共享、共學、共好</SloganTextBox>
      <BrandTextBox>天下永續會</BrandTextBox>
      <PurposeTextBox>ESG: From compliance to competitiveness.</PurposeTextBox>
    </Wrapper>
  );
};

export default Home;
