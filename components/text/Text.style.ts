import styled from 'styled-components';
import { FontSize, FontWeight } from './type';

const StyledText = styled.p<{
  size?: FontSize;
  weight?: FontWeight;
}>`
  margin: 0;
  color: #191919;
  ${(props) => (props.size ? `font-size: ${props.size}` : '')};
  ${(props) => (props.weight ? `font-weight: ${props.weight}` : 400)};
`;

export default StyledText;
