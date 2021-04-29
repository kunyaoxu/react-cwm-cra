import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    width: ${pxToRem(556)};
    height: ${pxToRem(67)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export default Wrapper;
