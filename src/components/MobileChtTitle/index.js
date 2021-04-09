import styled from 'styled-components';
import media from 'styled-media-query';
import H2 from 'components/H2';
import { mPxToRem } from 'utils/pxToRem';

export const MobileTitleChtText = styled(H2)`
  color: #262626;
  padding-bottom: 0;
  border-bottom: 0;
  letter-spacing: ${mPxToRem(2.2)};
  margin-top: ${mPxToRem(9.2)};

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export default MobileTitleChtText;
