import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    height: ${pxToRem(64.8)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export default Wrapper;
