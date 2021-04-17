import { Wrapper, SloganTextBox, BrandTextBox, PurposeTextBox } from './styled';

const Home = () => {
  return (
    <Wrapper id="home">
      <SloganTextBox>共享、共學、共好</SloganTextBox>
      <BrandTextBox>天下永續會</BrandTextBox>
      <PurposeTextBox>
        在企業間搭建一座橋樑，協助企業培植永續競爭力
      </PurposeTextBox>
    </Wrapper>
  );
};

export default Home;
