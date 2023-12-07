import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Button } from './styles';
import Logo from './logo';
import { CompanyContext, ConfigContext, DevModeContext } from '../pages/_app';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  Box,
  NavigationMenuTrigger,
  StyledCaret,
  NavigationMenuContent,
  ContentList,
  NavigationMenuLink,
  ViewportPosition,
  NavigationMenuViewPort,
} from './styles';
import React from 'react';

interface INavMenuProps {
  configStatus?: string;
}

const NavMenu = ({ configStatus }: INavMenuProps) => {
  const { setApiCalls } = useContext(DevModeContext);
  const router = useRouter();
  const { ...companyContext } = React.useContext(CompanyContext);
  const { ...configContext } = React.useContext(ConfigContext);
  const [applyButtonText, setApplyButtonText] = React.useState('Apply');

  const handleApplyButton = () => {
    if (Object.keys(configContext.onboardingJourney).length > 0) {
      // make sure we start from an empty state when we create an application
      localStorage.removeItem('user');
      localStorage.removeItem('business');
      localStorage.removeItem('primary_owner');
      localStorage.removeItem('secondary_owner');
      setApiCalls([]);

      if (
        configContext.onboardingJourney.journey_type ===
        'us_consumer_onboarding'
      ) {
        router.push('/signup/verification');
      } else if (
        configContext.onboardingJourney.journey_type ===
        'us_business_onboarding'
      ) {
        router.push('/signup/business');
      } else if (
        configContext.onboardingJourney.journey_type ===
        'emea_consumer_onboarding'
      ) {
        router.push('/signup/emea/consumer');
      } else if (
        configContext.onboardingJourney.journey_type ===
        'emea_business_onboarding'
      ) {
        router.push('/signup/emea/business');
      }
    } else {
      router.push('/dashboard/approved');
    }
  };

  React.useEffect(() => {
    if (Object.keys(configContext.onboardingJourney).length === 0) {
      setApplyButtonText('Home');
    } else {
      setApplyButtonText('Apply');
    }
  }, [configContext]);

  return (
    <NavigationMenu id="root">
      <NavigationMenuList
        id="list"
        width={{
          '@initial': 'default',
          '@phone': 'phone',
          '@tablet': 'tablet',
          '@desktop': 'desktop',
        }}
      >
        <NavigationMenuItem
          css={{
            columnGap: '$2',
          }}
        >
          <Logo companyName={companyContext.companyName} />
        </NavigationMenuItem>
        <Box css={{ display: 'flex', columnGap: '$2' }}>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Products <StyledCaret />{' '}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ContentList layout="one">
                <NavigationMenuLink>Credit Card</NavigationMenuLink>
                <NavigationMenuLink>Investing</NavigationMenuLink>
                <NavigationMenuLink>Savings</NavigationMenuLink>
              </ContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Company <StyledCaret />{' '}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ContentList layout="one">
                <NavigationMenuLink>About</NavigationMenuLink>
                <NavigationMenuLink>Careers</NavigationMenuLink>
              </ContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </Box>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$4',
          }}
        >
          <Button
            onClick={handleApplyButton}
            size={'small'}
            disabled={configStatus !== 'valid'}
            isDisabled={configStatus !== 'valid'}
          >
            {' '}
            {applyButtonText}
          </Button>
        </Box>
      </NavigationMenuList>
      <ViewportPosition>
        <NavigationMenuViewPort />
      </ViewportPosition>
    </NavigationMenu>
  );
};

export default NavMenu;
