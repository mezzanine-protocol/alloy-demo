import { keyframes, styled } from '../stitches.config';
import { PersonIcon, BackpackIcon, CheckIcon } from '@radix-ui/react-icons';

export const Box = styled('div', {});

const gradientMove = keyframes({
  '0%': {
    transform: 'translate(0,0) ',
  },
  '25%': {
    transform: 'translate(-10%, 10%) ',
  },
  '50%': {
    transform: 'translate(0px, 0px) scale(0.5)',
  },
  '75%': {
    transform: 'translate(10%, -10%) ',
  },
  '100%': {
    transform: 'translate(0px,0px) ',
  },
});

export const HeroBackground = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  backgroundColor: '$hero-background',
  alignItems: 'center',
  overflow: 'hidden',
  color: '$text-accent',
  '&:before': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: '0.6',
    content: ' ',
    background: 'url("noise_2.svg")',
  },
  '&:after': {
    position: 'absolute',
    top: '25%',
    left: '0',
    width: '100%',
    height: '50%',
    content: ' ',
    background: '$hero-center-radial',
    filter: 'blur(100px)',
    animation: `${gradientMove} 25s infinite`,
  },
});

const gradientBallMove = keyframes({
  '0%': {
    transform: 'translate(0, 0) ',
  },
  '50%': {
    transform: 'translate(100vw, 10vh) scale(1.1) ',
  },
  '100%': {
    transform: 'translate(0px,0px) ',
  },
});

const gradientBall2Move = keyframes({
  '0%': {
    transform: 'translate(0, 0) ',
  },
  '50%': {
    transform: 'translate(-100vw, -10vh) scale(0.8) ',
  },
  '100%': {
    transform: 'translate(0px,0px) ',
  },
});

export const RadialBackground = styled('div', {
  position: 'absolute',
  top: '-5%',
  left: '-5%',
  width: '20%',
  height: '20%',
  backgroundColor: '$hero-radial',
  borderRadius: '100%',
  filter: 'blur(85px)',
  opacity: 0.5,
  transition: 'all 500ms ease',
  animation: `${gradientBallMove} 25s infinite`,
});
export const RadialBackground2 = styled('div', {
  position: 'absolute',
  bottom: '-5%',
  right: '-5%',
  width: '35%',
  height: '35%',
  backgroundColor: '$hero-radial',
  borderRadius: '100%',
  filter: 'blur(100px)',
  opacity: 0.5,
  animation: `${gradientBall2Move} 25s infinite`,
});

export const HeroText = styled('h1', {
  fontSize: '2.5rem',
  lineHeight: '2.875rem',
  marginBottom: '$3',
});

export const HeroSubTitle = styled('h3', {
  fontSize: '1.5rem',
  lineHeight: '1.875rem',
  marginTop: '$3',
  fontWeight: 400,
});

export const Grid = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: '$5',
  marginTop: 'auto',
  marginBottom: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  variants: {
    width: {
      desktop: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'calc($9 + $7)',
      },

      default: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'calc($9 + $7)',
      },
    },
  },
});

export const BoxSignup = styled('div');

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '$5',
  alignItems: 'center',
  overflowX: 'hidden',
  height: '100vh',
  padding: '$7',
  width: '100%',
});
export const Title = styled('span', {
  fontSize: '$6',
  fontWeight: '500',
});
export const Card = styled('div', {
  display: 'flex',
  width: '100%',
  outline: 'none',
  flexDirection: 'column',
  padding: '$4',
  border: '1px solid $border-secondary',
  boxShadow: '0px 0px 1px $colors$shadow-default',
  backgroundColor: '$background-primary-neutral',
  borderRadius: '$2',
  rowGap: '$3',
  cursor: 'pointer',
  transition: 'all 150ms ease',
  '&:hover': {
    border: '1px solid $border-contrast',
  },
  '&:focus-visible': {
    border: '1px solid $colors$border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
  },
});

export const CardTitle = styled('h3', {
  margin: 0,
  fontWeight: '500',
  fontSize: '$4',
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
});

export const StyledPersonIcon = styled(PersonIcon, {
  size: '$5',
  color: '$background-cta',
});
export const StyledBackPackIcon = styled(BackpackIcon, {
  size: '$5',
  color: '$background-cta',
});
export const StyledCheckIcon = styled(CheckIcon, {
  size: '$5',
  color: '$background-cta',
});

export const ResponseContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$sand2',
  flexDirection: 'column',
  width: '100%',
  overflowY: 'auto',
  padding: '$6',
  gap: '$6',
  boxSizing: 'border-box',
});
