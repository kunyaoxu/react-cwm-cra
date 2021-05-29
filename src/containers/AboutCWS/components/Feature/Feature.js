import { Wrapper, FeatureTextBox } from './Styled';

const Feature = ({ num, subText, mainText }) => {
  return (
    <Wrapper>
      <div className="feature-num">{num}</div>
      <FeatureTextBox>
        <div className="feature-sub-text">{subText}</div>
        <div className="feature-main-text">{mainText}</div>
      </FeatureTextBox>
    </Wrapper>
  );
};

export default Feature;
