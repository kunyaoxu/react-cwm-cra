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
  '發現企業決策納入永續的價值與方法。',
  '綜整散落企業各處的CSR亮點。',
  '優化企業利害關係人溝通，讓社會看見企業永續價值。',
  '彰顯企業ESG投資價值。',
  '掌握海內外永續評鑑重點與原則。',
  '增進企業的永續交流與網絡。',
];

const ValuesOfMembership = () => (
  <Wrapper id="values-of-membership">
    {/* 區塊Title元件 */}
    <Title />

    <GroupedImage className="only-desktop" />
    <GroupedMobileImage className="only-mobile" />

    <TextBoxContainer>
      {TEXT_LIST.map((text, i) => (
        <TextBox key={i} index={i}>
          <p>{text}</p>
        </TextBox>
      ))}
    </TextBoxContainer>
  </Wrapper>
);

export default ValuesOfMembership;
