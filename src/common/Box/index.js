import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const styleProps = compose(
  flexbox,
  space,
  color,
  layout,
  border,
  background,
  position,
  shadow,
  system,
  typography
);

export const Box = styled.div`
  ${styleProps}
`;

Box.displayName = 'Box';

Box.propTypes = {
  ...propTypes.flex,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.typography,
};

export default Box;
