import React from 'react';
import { StyledCard, StyledCardHeader, StyledCardContent } from './Card.style';

type BaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface CardProps extends BaseProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, style, header, ...rest }, ref) => (
    <StyledCard style={style} {...rest} ref={ref}>
      <StyledCardHeader>{header}</StyledCardHeader>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  )
);

Card.displayName = 'Card';

export default Card;
