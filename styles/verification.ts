import { styled } from '../stitches.config';
import { motion } from 'framer-motion';

export const MainContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
});
export const GridContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  height: '100%',
});

export const LeftPanel = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  overflow: 'auto',
  padding: '$5',
});

export const FieldSet = styled('fieldset', {
  border: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$2',
});

export const Body = styled('p', {
  fontSize: '$5',
  lineHeight: '150%',
});

export const Box = styled('div');

export const FramerBox = styled(motion.div, {
  position: 'absolute',
});

export const Form = styled(motion.form, {
  position: 'absolute',
});

export const Title = styled('h1', {
  fontSize: '$6',
  fontWeight: '500',
  margin: 0,
  lineHeight: '32px',
});

export const Header = styled('h3', {
  fontSize: '$5',
  fontWeight: '500',
  margin: 0,
  color: '$mauve11',
});

export const Mask = styled(motion.div, {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: '$background-overlay',
  backdropFilter: 'blur(10px)',
  transition: 'all 350ms ease',
  zIndex: 2,
});

export const StyledSelect = styled('select', {
  boxSizing: 'border-box',
  position: 'relative',
  height: '$7',
  padding: '$1 $6 $1 $3',
  fontSize: '$4',
  borderRadius: '$2',
  border: '1px solid $border-tertiary',
  backgroundColor: 'transparent',
  outline: 'none',
  width: '100%',
  transition: 'all 150ms ease',
  appearance: 'none',
  '&:hover': {
    backgroundColor: '$background-primary-hover',
  },
  '&:focus-visible': {
    border: '1px solid $colors$border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
    backgroundColor: '$background-primary-neutral',
  },
});
