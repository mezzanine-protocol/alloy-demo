import { default as sc } from 'styled-components';
import { styled } from '../../stitches.config';
import { motion } from 'framer-motion';

export const MainContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
});

export const Form = styled('form', {
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

export const Box = styled('div');

export const FramerBox = styled(motion.div, {
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

export const SampleButton = styled('button', {
  position: 'absolute',
  bottom: 52,
  left: 24,
  zIndex: 2,
});

export const Line = styled('div', {
  width: '100%',
  height: 1,
  backgroundColor: '#CCCCC4',
  marginBottom: '$6',
  marginTop: '$5',
});

export const Flex = styled('div', {
  display: 'flex',
  width: '100%',
});

export const SummaryLabel = styled('label', {
  fontSize: '$3',
  color: '$mauve11',
});

export const SummaryField = styled('label', {
  fontSize: '$3',
});

export const SummaryFieldSet = styled(FieldSet, {
  width: '50%',
});

export const Label = styled('label', {
  fontSize: '$4',
  color: '$mauve11',
});

export const Checkbox = sc.input.attrs({ type: 'checkbox' })`
    border-radius: 0px;
    height: 16px;
    width: 16px;
`;
