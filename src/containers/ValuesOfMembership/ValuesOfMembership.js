/* eslint-disable react/no-array-index-key */
import Title from './components/Title';
import TextBox from './components/TextBox';
import {
  Wrapper,
  GroupedImage,
  GroupedMobileImage,
  TextBoxContainer,
} from './styled';

const TEXT_LIST = [
  '協助企業發現公司營運決策納入永續的方法與價值。',
  '為企業縱整散落各處的CSR亮點。',
  '協助企業的利害關係人溝通，讓社會看見企業的永續價值。',
  '提升企業彰顯ESG投資價值。',
  '增進與豐富企業家的永續交流及網絡。',
];

const ValuesOfMembership = () => (
  <Wrapper id="values-of-membership">
    {/* 區塊Title元件 */}
    <Title />

    <GroupedImage className="only-desktop" />
    <GroupedMobileImage className="only-mobile" />

    <TextBoxContainer>
      {TEXT_LIST.map((text, i) => (
        <TextBox key={i} index={i + 1}>
          <p>{text}</p>
        </TextBox>
      ))}
    </TextBoxContainer>
  </Wrapper>
);

export default ValuesOfMembership;
