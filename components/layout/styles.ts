import { keyframes, styled } from '../../stitches.config';

export const ContentContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '5fr 3fr',
  position: 'fixed',
  overflowX: 'hidden',
  height: '100%',
  width: '100%',
});

export const Box = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

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

export const AccentBackground = styled('div', {
  position: 'relative',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: ' center',
  alignItems: 'center',
  minHeight: '100vh',
  height: '100%',
  backgroundColor: '$hero-background',
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
    transform: 'translate(20vw, 100vh) ',
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
    transform: 'translate(-15vw, -100vh)  ',
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

export const ContentContainerNonApp = styled('main', {
  paddingTop: '$4',
  overflowX: 'hidden',
  backgroundColor: '$mauve1',
});
