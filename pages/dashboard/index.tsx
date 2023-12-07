import React, { useState, ReactElement, useEffect } from 'react';
import { TopNav } from '../../components/TopNav';
import { AnimatePresence } from 'framer-motion';
import { User } from '../../types/user';
import { Button } from '../../components/styles';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import { CompanyContext } from '../../pages/_app';
import {
  Box,
  FramerBox,
  Title,
  Card,
  StyledCardIcon,
  CardTitle,
  CardBody,
  StyledSketchIcon,
  StyledChart,
} from '../../styles/dashboard';

const Dashboard = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { ...context } = React.useContext(CompanyContext);

  useEffect(() => {
    const retrievedUser = localStorage.getItem('user');
    if (retrievedUser) setUser(JSON.parse(retrievedUser));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Box
          css={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$background-secondary-neutral',
          }}
        >
          <Loading />{' '}
        </Box>
      ) : (
        <FramerBox
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Box>
            <TopNav user={user} />
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                margin: '$6',
                height: '100%',
                alignItems: 'center',
                gap: '$4',
              }}
            >
              <Box
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  gap: '$4',
                  maxWidth: '500px',
                }}
              >
                <Title>Apply today and get approved within minutes</Title>
                <Card>
                  <Box
                    css={{ display: 'flex', gap: '$2', alignItems: 'center' }}
                  >
                    <StyledCardIcon />
                    <CardTitle>
                      {context.productName
                        ? context.productName
                        : 'Credit Card'}
                    </CardTitle>
                  </Box>
                  <CardBody>
                    {context.productDescription
                      ? context.productDescription
                      : 'Absolutely zero-interest. Family-oriented rewards. Simple yet elegant design.'}
                  </CardBody>
                  <Box
                    css={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      variant={'accent'}
                      size={'small'}
                      onClick={() => {
                        router.push('/signup/verification');
                      }}
                    >
                      {' '}
                      Apply now{' '}
                    </Button>
                  </Box>
                </Card>
                <Card>
                  <Box
                    css={{ display: 'flex', gap: '$2', alignItems: 'center' }}
                  >
                    <StyledSketchIcon />
                    <CardTitle>Investing Account</CardTitle>
                  </Box>
                  <CardBody>
                    Lightning-fast. No limits. Always up-to-date data. Make your
                    best trades.
                  </CardBody>
                  <Box
                    css={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      variant={'accent'}
                      size={'small'}
                      onClick={() => {
                        router.push('/signup/verification');
                      }}
                      disabled
                      isDisabled
                    >
                      {' '}
                      Coming soon{' '}
                    </Button>
                  </Box>
                </Card>
                <Card>
                  <Box
                    css={{ display: 'flex', gap: '$2', alignItems: 'center' }}
                  >
                    <StyledChart />
                    <CardTitle>Savings Account</CardTitle>
                  </Box>
                  <CardBody>
                    High-yield savings for your rainy days. Secure by default
                    with a friendly interface to help you meet your goals.
                  </CardBody>
                  <Box
                    css={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      variant={'accent'}
                      size={'small'}
                      onClick={() => {
                        router.push('/signup/verification');
                      }}
                      disabled
                      isDisabled
                    >
                      {' '}
                      Coming soon{' '}
                    </Button>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Box>
        </FramerBox>
      )}
    </AnimatePresence>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};
export default Dashboard;
