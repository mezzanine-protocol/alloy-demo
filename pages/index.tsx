import NavMenu from '../components/NavBar';
import { ReactElement } from 'react';
import NonAppLayout from '../components/layout/nonApp';
import CreditCard from '../components/CreditCard';
import React from 'react';
import { CompanyContext, ConfigContext } from './_app';
import {
  Box,
  HeroBackground,
  RadialBackground,
  RadialBackground2,
  Grid,
  HeroText,
  HeroSubTitle,
} from '../styles/pages';

const Home = () => {
  const { ...companyContext } = React.useContext(CompanyContext);
  const { ...configContext } = React.useContext(ConfigContext);

  return (
    <>
      <NavMenu configStatus={configContext.configStatus} />
      <HeroBackground>
        <RadialBackground />
        <RadialBackground2 />
        {configContext.configStatus === 'loading' ? (
          <>
            <Box
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: ' column',
                height: ' 100%',
                width: ' 100%',
                maxWidth: '700px',
                paddingLeft: '$6',
              }}
            >
              <HeroSubTitle css={{ zIndex: 5 }}>
                Demo App is loading...
              </HeroSubTitle>
              <HeroSubTitle css={{ zIndex: 5 }}>Please wait</HeroSubTitle>
            </Box>
          </>
        ) : configContext.configStatus === 'valid' ? (
          <>
            <Grid
              width={{
                '@desktop': 'desktop',
              }}
            >
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: ' column',
                  height: ' 100%',
                  width: ' 100%',
                  maxWidth: '500px',
                  paddingLeft: '$6',
                }}
              >
                <HeroText css={{ zIndex: 5 }}>
                  Put financial power in your family{`'`}s hands
                </HeroText>
                <HeroSubTitle css={{ zIndex: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </HeroSubTitle>
              </Box>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: ' 100%',
                  width: ' 100%',
                  paddingRight: ' $6',
                }}
              >
                <CreditCard companyName={companyContext.companyName} />
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Box
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: ' column',
                height: ' 100%',
                width: ' 100%',
                maxWidth: '700px',
                paddingLeft: '$6',
              }}
            >
              <HeroText css={{ zIndex: 5 }}>
                Couldn{`'`}t load {`"`}config.json{`"`}
              </HeroText>
              <HeroSubTitle css={{ zIndex: 5 }}>
                Check if the file exists or if it{`'`}s empty
              </HeroSubTitle>
              <HeroSubTitle css={{ zIndex: 5 }}>
                ({`"`}config.json{`"`} needs to be in the root folder of the
                Demo App)
              </HeroSubTitle>
            </Box>
          </>
        )}
      </HeroBackground>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <NonAppLayout>{page}</NonAppLayout>;
};
export default Home;
