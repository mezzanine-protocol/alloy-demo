import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { getGlobalStyleSheet } from './globalStyleHelper';

/* This function exports a GlobalStyle component which injects to the :root our design tokens. getGlobalStyleSheet returns a our design tokens in a string format. It is then passed into createGlobalStyle function from styled-components to create this component. */
const GlobalStyle = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  const globalStyles = getGlobalStyleSheet(theme);
  const GlobalStyleComponent = createGlobalStyle`${globalStyles}`;

  return <GlobalStyleComponent />;
};

export default GlobalStyle;
