import { useRouter } from 'next/router';
import { MouseEvent, ReactElement, useState } from 'react';
import { Button } from '../components/styles';
import FormLayout from '../components/layout/formPage';
import {
  MainContainer,
  Box,
  Title,
  Card,
  CardTitle,
  StyledPersonIcon,
  StyledBackPackIcon,
  StyledCheckIcon,
} from '../styles/pages';
import DevModeSwitch from '../components/switch/DevModeSwitch';

const Signup = () => {
  const router = useRouter();

  const [active, setActive] = useState('');

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === active) {
      return;
    }

    setActive(e.currentTarget.id);
  };

  const activeStyle = {
    border: '2px solid $border-tertiary',
    backgroundColor: '$background-mutedAccent',
    opacity: 0.85,
  };

  return (
    <MainContainer>
      <Box
        css={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title>Get started</Title>
        <Button
          onClick={() => {
            router.push('/');
          }}
          variant={'outline'}
        >
          Exit
        </Button>
      </Box>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '$4',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <Card
          onClick={(e) => {
            handleCardClick(e);
          }}
          tabIndex={1}
          id="individual"
          css={active === 'individual' ? activeStyle : {}}
        >
          <CardTitle>
            {' '}
            {active === 'individual' ? (
              <StyledCheckIcon />
            ) : (
              <StyledPersonIcon />
            )}{' '}
            Individual
          </CardTitle>
        </Card>

        <Card
          tabIndex={1}
          onClick={(e) => {
            handleCardClick(e);
          }}
          id="business"
          css={active === 'business' ? activeStyle : {}}
        >
          <CardTitle>
            {' '}
            {active === 'business' ? (
              <StyledCheckIcon />
            ) : (
              <StyledBackPackIcon />
            )}{' '}
            Business
          </CardTitle>
        </Card>
      </Box>

      <Box
        css={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <DevModeSwitch />
        <Button
          onClick={() => {
            localStorage.setItem('active', active);
            router.push('/dashboard');
          }}
          variant={'accent'}
        >
          Next
        </Button>
      </Box>
    </MainContainer>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};
export default Signup;
