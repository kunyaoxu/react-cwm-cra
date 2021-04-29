import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  ${media.greaterThan('large')`
    height: ${pxToRem(66)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export default Wrapper;
