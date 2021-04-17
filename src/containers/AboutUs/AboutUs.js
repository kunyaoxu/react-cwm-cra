import Card from './components/Card';
import Title from './components/Title';
import Slogan from './components/Slogan';
import { Wrapper, CardContainer, EarthImg } from './styled';

const AboutUs = () => (
  <Wrapper id="about-us">
    {/* About Us Title */}
    <Title />

    <Slogan />

    <CardContainer>
      <Card
        title="公司治理"
        contents={[
          '董事會運作實例探討',
          '資訊揭露程度與方向',
          '風險與機會辨識實務',
          '永續與經營策略結合之道',
          '外部評鑑的掌握',
        ]}
      />
      <Card
        title="企業承諾"
        contents={[
          '人才培育制度的建立',
          '幸福職場的形塑',
          '工作與生活平衡的打造',
          '供應鏈管理與攜手的模式',
          '對客戶、消費者承諾的創新實務',
        ]}
      />
      <Card
        title="環境永續"
        contents={[
          '企業淨零排放目標的制定與實踐',
          '與經營策略結合的環境行動',
          '擴大改善層面',
          '創新環境行動探討',
          '環境影響力的擴大與擴散',
        ]}
      />
      <Card
        title="社會參與"
        contents={[
          'SDGs選題與呈現原則',
          '企業志工氛圍形塑',
          '本業核心職能的連結之道',
          '擴大供應商、客戶參與',
          '社會投資影響力最大化',
        ]}
      />
    </CardContainer>
    <EarthImg />
  </Wrapper>
);

export default AboutUs;
