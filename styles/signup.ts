import { styled } from '../stitches.config';

export const MainContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$5',
  alignItems: 'center',
  overflowX: 'hidden',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
});

export const FieldSet = styled('fieldset', {
  border: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$2',
});

export const Box = styled('div');

export const Title = styled('h1', {
  fontSize: '$6',
  fontWeight: '500',
  margin: 0,
});
