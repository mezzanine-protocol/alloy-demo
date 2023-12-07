import React from 'react';
import { FontSize, FontWeight } from './type';
import StyledText from './Text.style';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  children?: React.ReactNode;
  size?: FontSize;
  weight?: FontWeight;
  style?: React.CSSProperties;
}

const Text: React.FC<Props> = ({ children, size, weight, style, ...props }) => {
  return (
    <StyledText {...props} size={size} weight={weight} style={style}>
      {children}
    </StyledText>
  );
};

export default Text;
