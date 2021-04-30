/* eslint-disable react/no-array-index-key */
import useMobile from 'hooks/useMobile';
import Title from './components/Title';
import TextBox from './components/TextBox';
import { Wrapper, TextBoxContainer } from './styled';

const TEXT_LIST = [
  '發現企業決策納入永續的價值與方法。',
  '綜整散落企業各處的CSR亮點。',
  '優化企業利害關係人溝通，讓社會看見企業永續價值。',
  '彰顯企業ESG投資價值。',
  '掌握海內外永續評鑑重點與原則。',
  '增進企業的永續交流與網絡。',
];

const ValuesOfMembership = () => {
  const isMobile = useMobile();
  return (
    <Wrapper id="values-of-membership">
      {/* 區塊Title元件 */}
      <Title />

      <picture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/天下永續會策略_CSR_ESG_DJSI.webp`}
          media="(min-width: 1170px)"
          type="image/webp"
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/天下永續會策略_CSR_ESG_DJSI.jpeg`}
          media="(min-width: 1170px)"
          type="image/jpeg"
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/永續培力坊_企業永續報告.webp`}
          media="(max-width: 1170px)"
          type="image/webp"
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/永續培力坊_企業永續報告.jpeg`}
          media="(max-width: 1170px)"
          type="image/jpeg"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/永續培力坊_企業永續報告.jpeg`}
          alt="天下永續會策略"
          width={isMobile ? '170' : '1920'}
          height={isMobile ? '414' : '1920'}
        />
      </picture>

      <TextBoxContainer>
        {TEXT_LIST.map((text, i) => (
          <TextBox key={i} index={i}>
            <p>{text}</p>
          </TextBox>
        ))}
      </TextBoxContainer>
    </Wrapper>
  );
};

export default ValuesOfMembership;
