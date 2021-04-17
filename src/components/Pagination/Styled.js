import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem from 'utils/pxToRem';

export const Dots = styled(Flex)`
  ${media.lessThan('large')`
    display:none
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;

  position: fixed;
  bottom: ${pxToRem(142)};
  right: ${pxToRem(33)};
  ul {
    list-style: none;
    padding: 0;
  }
  &.hidden {
    display: none;
  }
`;

export const Dot = styled.li`
  width: ${pxToRem(22)};
  height: ${pxToRem(22)};
  margin: ${pxToRem(14)} auto;
  border-radius: 50%;
  background-color: #cecece;
  list-style: none;
  overflow: hidden;
  transition: 0.2s;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  &.is-current {
    background-color: #006999;
    transition: 0.2s;
    &:last-child {
      background-color: #f7e082;
    }
  }
`;
