import Head from 'next/head';
import Logo from '../logo';
import { ThemeButton } from '../ThemeButton';
import CreditCard from '../CreditCard';
import React from 'react';
import { styled } from '../../stitches.config';
import { CompanyContext, DevModeContext } from '../../pages/_app';
import {
  ContentContainer,
  Box,
  AccentBackground,
  RadialBackground,
  RadialBackground2,
} from './styles';
import ResponseRecord from '../responseRecord/ResponseRecord';

type MainProps = {
  children: JSX.Element;
};

const ResponseContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$sand2',
  flexDirection: 'column',
  width: '100%',
  overflowY: 'auto',
  padding: '$6',
  gap: '$6',
  boxSizing: 'border-box',
});

export default function FormLayout({ children }: MainProps) {
  const { ...context } = React.useContext(CompanyContext);
  const { isDevMode } = React.useContext(DevModeContext);

  return (
    <div>
      <Head>
        <title>Limelight</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer>
        <Box>{children}</Box>
        {isDevMode ? (
          <ResponseContainer>
            <ResponseRecord />
          </ResponseContainer>
        ) : (
          <AccentBackground>
            <CreditCard small user companyName={context.companyName} />
            <RadialBackground />
            <RadialBackground2 />
            <ThemeButton
              css={{ bottom: 24, right: 24, top: 'auto', left: 'auto' }}
            />
            <Logo
              css={{ position: 'absolute', top: 54, right: 54 }}
              companyName={context.companyName}
            />
          </AccentBackground>
        )}
      </ContentContainer>
    </div>
  );
}
