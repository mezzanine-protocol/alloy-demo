import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { Button, Input, StyledLabel } from '../../components/styles';
import { IAccountLinking } from '../../types/formFields/accountLinking';
import { faker } from '@faker-js/faker';
import {
  Form,
  GridContainer,
  LeftPanel,
  FieldSet,
  Box,
  FramerBox,
  Title,
  SampleButton,
} from '../../components/business/style';
import DevModeSwitch from '../../components/switch/DevModeSwitch';
import { useContext, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { CompanyContext, ConfigContext } from '../_app';
import { ApplicationResponse } from '../../types/journeyApplication';
import { User } from '../../types/user';

const AccountLinkingForm = () => {
  const router = useRouter();
  const { formState, handleSubmit, setValue, register, trigger } =
    useForm<IAccountLinking>({ mode: 'all' });
  const onSubmit: SubmitHandler<IAccountLinking> = (data) =>
    handleFormSubmit(data);
  const { ...configContext } = useContext(ConfigContext);
  const { ...companyContext } = useContext(CompanyContext);
  const [stage, setStage] = useState<
    'initial' | 'ongoing' | 'approved' | 'error'
  >('initial');
  const [response, setResponse] = useState<ApplicationResponse>();
  const [journeyToken, setJourneyToken] = useState<string | undefined>('');
  const [user, setUser] = useState<User>();
  const apiBaseUrl = 'https://api.alloy.co';

  useEffect(() => {
    if (response) {
      if (response.journey_application_status !== undefined) {
        if (response.journey_application_status.toLowerCase() === 'approved') {
          setStage('approved');
        }
      } else {
        setStage('error');
      }
    }
  }, [response, stage]);

  useEffect(() => {
    setJourneyToken(configContext.onboardingJourney.journey_token);
  }, [configContext]);

  useEffect(() => {
    const retrievedUser = localStorage.getItem('user');
    if (retrievedUser) setUser(JSON.parse(retrievedUser));
  }, []);

  useEffect(() => {
    user?.firstName && setValue('nameFirst', user?.firstName);
    user?.lastName && setValue('nameLast', user?.lastName);
  }, [user, setValue]);

  const populateWithSample = () => {
    setValue('financialInstitution', faker.company.name());
    setValue('accountNumber', faker.finance.account());
    setValue('routingNumber', faker.finance.routingNumber());
    trigger();
  };

  const handleFormSubmit = async (data: IAccountLinking) => {
    localStorage.setItem('account', JSON.stringify(data));

    setStage('ongoing');

    const requestObject = {
      method: 'POST',
      url: `${apiBaseUrl}/applications`,
      headers: {
        content_type: 'application/json',
      },
      body: {
        entities: [
          {
            entity_type: 'person',
            branch_name: 'funding',
            external_entity_id: companyContext.entityToken,
            name_first: data.nameFirst,
            name_last: data.nameLast,
            financialInstitution: data.financialInstitution,
            bank_account_number: data.accountNumber,
            bank_routing_number: data.routingNumber,
            address_country_code: 'US',
          },
        ],
      },
    };

    const response = await fetch(
      '/api/applications/create?journeyToken=' + journeyToken,
      {
        method: requestObject.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestObject.body),
      }
    );
    const responseJson = await response.json();
    setResponse(responseJson);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer>
        <SampleButton type="button" onClick={() => populateWithSample()}>
          sample data
        </SampleButton>
        <LeftPanel>
          <DevModeSwitch
            style={{
              position: 'fixed',
              bottom: '82px',
              left: '24px',
              zIndex: 2,
            }}
          />
          <AnimatePresence>
            {stage === 'initial' && (
              <FramerBox
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                  height: '100%',
                  padding: '$7',
                  alignItems: 'center',
                }}
                initial={{ transform: 'translateX(-500px)', opacity: 0 }}
                animate={{ transform: 'translateX(0px)', opacity: 1 }}
                exit={{ transform: 'translateX(-500px)', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
              >
                <Box
                  css={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Title>Linking an External Account</Title>
                  <Button
                    onClick={() => {
                      router.push('/dashboard/approved');
                    }}
                    variant="outline"
                  >
                    Exit
                  </Button>
                </Box>
                <Box css={{ width: '100%', maxWidth: '450px' }}>
                  By linking, you will provide your data for account
                  verification. The account must be in your name, U.S. based and
                  not be a business account.
                </Box>
                <Box
                  css={{
                    display: 'flex',
                    rowGap: '$4',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '450px',
                  }}
                >
                  <FieldSet>
                    <StyledLabel htmlFor="nameFirst">First Name</StyledLabel>
                    <Input
                      type="text"
                      placeholder="First Name"
                      id="nameFirst"
                      {...register('nameFirst', { required: true })}
                    />
                  </FieldSet>
                  <FieldSet>
                    <StyledLabel htmlFor="nameLast">Last Name</StyledLabel>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      id="nameLast"
                      {...register('nameLast', { required: true })}
                    />
                  </FieldSet>
                  <FieldSet>
                    <StyledLabel htmlFor="financialInstitution">
                      Associated Financial Institution
                    </StyledLabel>
                    <Input
                      type="text"
                      placeholder="Lorem Ipsum LLC"
                      id="financialInstitution"
                      {...register('financialInstitution', { required: true })}
                    />
                  </FieldSet>
                  <FieldSet>
                    <StyledLabel htmlFor="accountNumber">
                      Account Number
                    </StyledLabel>
                    <Input
                      type="text"
                      placeholder="96857463"
                      id="accountNumber"
                      {...register('accountNumber', { required: true })}
                    />
                  </FieldSet>
                  <FieldSet>
                    <StyledLabel htmlFor="routingNumber">
                      Routing Number
                    </StyledLabel>
                    <Input
                      type="text"
                      placeholder="142536471"
                      id="routingNumber"
                      {...register('routingNumber', { required: true })}
                    />
                  </FieldSet>
                </Box>
                <Box
                  css={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: ' 100%',
                    margin: '$3',
                    padding: '$6',
                    gap: '$2',
                  }}
                >
                  <Button
                    type="button"
                    onClick={() => {
                      router.push('/dashboard/approved');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="accent"
                    disabled={!formState.isValid}
                    isDisabled={!formState.isValid}
                  >
                    Link Account
                  </Button>
                </Box>
              </FramerBox>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 'ongoing' && (
              <FramerBox
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '$4',
                  maxWidth: '450px',
                  marginLeft: '$4',
                  marginRight: '$4',
                }}
                initial={{ transform: 'translateX(-500px)', opacity: 0 }}
                animate={{ transform: 'translateX(0px)', opacity: 1 }}
                exit={{ transform: 'translateX(-500px)', opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
              >
                <Loading />
              </FramerBox>
            )}
          </AnimatePresence>
          {stage === 'approved' && (
            <FramerBox
              css={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '$4',
                marginLeft: '$4',
                marginRight: '$4',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                padding: '$7',
              }}
              initial={{ transform: 'translateX(-500px)', opacity: 0 }}
              animate={{ transform: 'translateX(0px)', opacity: 1 }}
              exit={{ transform: 'translateX(-500px)', opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
            >
              <Box></Box>
              <Title css={{ maxWidth: '450px' }}>
                Congratulations!
                <br /> You account was linked!
              </Title>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: ' 100%',
                }}
              >
                <Button
                  onClick={() => {
                    router.push('/dashboard/approved');
                  }}
                  variant={'accent'}
                >
                  {' '}
                  Go to dashboard{' '}
                </Button>
              </Box>
            </FramerBox>
          )}
          {stage === 'error' && (
            <FramerBox
              css={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '$4',
                marginLeft: '$4',
                marginRight: '$4',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                padding: '$7',
              }}
              initial={{ transform: 'translateX(-500px)', opacity: 0 }}
              animate={{ transform: 'translateX(0px)', opacity: 1 }}
              exit={{ transform: 'translateX(-500px)', opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
            >
              <Box></Box>
              <Title css={{ maxWidth: '450px' }}>Something went wrong.</Title>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: ' 100%',
                }}
              >
                <Button
                  onClick={() => {
                    router.push('/');
                  }}
                  variant={'accent'}
                >
                  {' '}
                  Back{' '}
                </Button>
              </Box>
            </FramerBox>
          )}
        </LeftPanel>
      </GridContainer>
    </Form>
  );
};

export default AccountLinkingForm;
