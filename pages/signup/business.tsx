import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { openAlloy, closeAlloy, initAlloy } from '../../lib/alloy';
import { ApplicationResponse } from '../../types/journeyApplication';
import { Button } from '../../components/styles';
import FormLayout from '../../components/layout/formPage';
import AccountHolderForm from '../../components/business/AccountHolderForm';
import BusinessForm from '../../components/business/BusinessForm';
import Loading from '../../components/Loading';
import { Stage } from '../../types';
import { DocVCallback } from '../../types/docv';
import {
  MainContainer,
  GridContainer,
  LeftPanel,
  FramerBox,
  Title,
  Header,
  SummaryField,
  Flex,
} from '../../components/business/style';
import { ConfigContext, DevModeContext } from '../_app';
import DevModeSwitch from '../../components/switch/DevModeSwitch';
import { domain } from '../../config.json';
const Business = () => {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>(Stage.BUSINESS);
  const [populateBusiness, setPopulateBusiness] = useState<boolean>(false);
  const [populatePrimary, setPopulatePrimary] = useState<boolean>(false);
  const [populateSecondary, setPopulateSecondary] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [response, setResponse] = useState<ApplicationResponse>();
  const { ...configContext } = React.useContext(ConfigContext);
  const [journeyToken, setJourneyToken] = useState<string | undefined>('');
  const { apiCalls, setApiCalls } = useContext(DevModeContext);
  const apiBaseUrl = domain || 'https://api.alloy.co';

  const handleGetApplication = useCallback(async () => {
    const journeyApplicationToken = response?.journey_application_token;
    const apiResponse = await fetch(
      `/api/applications/${journeyApplicationToken}?journeyToken=${journeyToken}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const responseJson = await apiResponse.json();
    setApiCalls([
      ...apiCalls,
      {
        request: JSON.stringify(
          {
            method: 'GET',
            url: `${apiBaseUrl}/applications`,
            headers: { content_type: 'application/json' },
          },
          null,
          2
        ),
        response: JSON.stringify(responseJson, null, 2),
      },
    ]);
    setResponse(responseJson);
  }, [response, apiCalls, journeyToken, setApiCalls]);

  const handleUpdateApplication = useCallback(
    (data: DocVCallback) => {
      if (data.status === 'closed') return;
      if (data.status.includes('complete')) handleGetApplication();
    },
    [handleGetApplication]
  );

  useEffect(() => {
    if (response) {
      if (response.journey_application_status !== undefined) {
        if (response.journey_application_status.toLowerCase() === 'pending') {
          setStage(Stage.VERIFICATION);
        } else if (
          response.journey_application_status.toLowerCase() === 'approved' ||
          response.journey_application_status.toLowerCase() ===
            'application review'
        ) {
          setStage(Stage.APPROVED);
          closeAlloy();
        }
      } else {
        setStage(Stage.ERROR);
      }
    }
  }, [response, handleUpdateApplication, configContext]);

  useEffect(() => {
    setJourneyToken(configContext.onboardingJourney.journey_token);
  }, [configContext]);

  const handleCreateApplication = async () => {
    const businessData = localStorage.getItem(Stage.BUSINESS);
    const primaryAccountData = localStorage.getItem(Stage.PRIMARY_OWNER);
    const secondaryAccountData = localStorage.getItem(Stage.SECONDARY_OWNER);

    if (
      !businessData ||
      !primaryAccountData ||
      (check && !secondaryAccountData)
    )
      return;

    const businessDataParsed = JSON.parse(businessData);
    const primaryAccountDataParsed = JSON.parse(primaryAccountData);
    const secondaryAccountDataParsed =
      secondaryAccountData && JSON.parse(secondaryAccountData);

    const entities = [
      {
        branch_name: 'businesses',
        entity_type: 'business',
        business_name: businessDataParsed.businessName,
        business_federal_ein: businessDataParsed.businessFederalEin,
        addresses: [
          {
            type: 'business_primary',
            city: businessDataParsed.addressCity,
            state: businessDataParsed.addressState,
            line_1: businessDataParsed.addressLine1,
            postal_code: businessDataParsed.addressPostalCode,
            country_code: 'US',
          },
        ],
        representatives: [
          {
            name_first: primaryAccountDataParsed.firstName,
            name_last: primaryAccountDataParsed.lastName,
            document_ssn: primaryAccountDataParsed.documentSsn,
            birth_date: primaryAccountDataParsed.birthDate,
            type: 'principal_owner',
            addresses: [
              {
                type: 'primary',
                city: primaryAccountDataParsed.addressCity,
                state: primaryAccountDataParsed.addressState,
                line_1: primaryAccountDataParsed.addressLine1,
                postal_code: primaryAccountDataParsed.addressPostalCode,
              },
            ],
          },
          ...(check
            ? [
                {
                  name_first: secondaryAccountDataParsed.firstName,
                  name_last: secondaryAccountDataParsed.lastName,
                  document_ssn: secondaryAccountDataParsed.documentSsn,
                  birth_date: secondaryAccountDataParsed.birthDate,
                  type: 'authorized_signer',
                  addresses: [
                    {
                      type: 'primary',
                      city: secondaryAccountDataParsed.addressCity,
                      state: secondaryAccountDataParsed.addressState,
                      line_1: secondaryAccountDataParsed.addressLine1,
                      postal_code: secondaryAccountDataParsed.addressPostalCode,
                    },
                  ],
                },
              ]
            : []),
        ],
      },
      {
        branch_name: 'persons',
        entity_type: 'person',
        name_first: primaryAccountDataParsed.firstName,
        name_last: primaryAccountDataParsed.lastName,
        phone_number: primaryAccountDataParsed.phoneNumber,
        document_ssn: primaryAccountDataParsed.documentSsn,
        email_address: primaryAccountDataParsed.email,
        birth_date: primaryAccountDataParsed.birthDate,
        addresses: [
          {
            type: 'primary',
            city: primaryAccountDataParsed.addressCity,
            state: primaryAccountDataParsed.addressState,
            line_1: primaryAccountDataParsed.addressLine1,
            postal_code: primaryAccountDataParsed.addressPostalCode,
            country_code: 'US',
          },
        ],
        iovation_blackbox: 'dsif20sJDFSIef89204j-dsfSDIFiwefj083463902t6j',
        neuro_user_id: '23489sdf-a942tj8ef-asofwe',
        site_id: '28dfa9342',
      },
      ...(check
        ? [
            {
              branch_name: 'persons',
              entity_type: 'person',
              name_first: secondaryAccountDataParsed.firstName,
              name_last: secondaryAccountDataParsed.lastName,
              phone_number: secondaryAccountDataParsed.phoneNumber,
              document_ssn: secondaryAccountDataParsed.documentSsn,
              email_address: secondaryAccountDataParsed.email,
              birth_date: secondaryAccountDataParsed.birthDate,
              addresses: [
                {
                  type: 'primary',
                  city: secondaryAccountDataParsed.addressCity,
                  state: secondaryAccountDataParsed.addressState,
                  line_1: secondaryAccountDataParsed.addressLine1,
                  postal_code: secondaryAccountDataParsed.addressPostalCode,
                  country_code: 'US',
                },
              ],
              iovation_blackbox:
                'dsif20sJDFSIef89204j-dsfSDIFiwefj083463902t6j',
              neuro_user_id: '23489sdf-a942tj8ef-asofwe',
              site_id: '28dfa9342',
            },
          ]
        : []),
    ];

    const requestObject = {
      method: 'POST',
      url: `${apiBaseUrl}/applications`,
      headers: { content_type: 'application/json' },
      body: {
        do_await_additional_entities: false,
        entities,
      },
    };

    const response = await fetch(
      '/api/applications/create?journeyToken=' + journeyToken,
      {
        method: requestObject.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestObject.body),
      }
    );

    const responseJson = await response.json();
    setApiCalls([
      ...apiCalls,
      {
        request: JSON.stringify(requestObject, null, 2),
        response: JSON.stringify(responseJson, null, 2),
      },
    ]);
    setResponse(responseJson);
  };

  if (stage === Stage.BUSINESS) {
    return (
      <BusinessForm
        stage={Stage.BUSINESS}
        title="Tell us about your business"
        header="Business Info"
        populate={populateBusiness}
        handleBack={() => {
          router.push('/');
        }}
        handleNext={() => {
          setStage(Stage.PRIMARY_OWNER);
          setPopulateBusiness(true);
        }}
      />
    );
  }

  if (stage === Stage.PRIMARY_OWNER) {
    return (
      <AccountHolderForm
        stage={Stage.PRIMARY_OWNER}
        title="Tell us more about you"
        header="Primary Account Holder Info"
        populate={populatePrimary}
        check={check}
        setCheck={setCheck}
        handleBack={() => {
          setStage(Stage.BUSINESS);
          setPopulatePrimary(true);
        }}
        handleNext={() => {
          if (check) setStage(Stage.SECONDARY_OWNER);
          else {
            setStage(Stage.LOADING);
            handleCreateApplication();
          }
          setPopulatePrimary(true);
        }}
      />
    );
  }

  if (stage === Stage.SECONDARY_OWNER) {
    return (
      <AccountHolderForm
        stage={Stage.SECONDARY_OWNER}
        title="Add Another Account Owner"
        header="Secondary Acount Holder Info"
        populate={populateSecondary}
        handleBack={() => {
          setStage(Stage.PRIMARY_OWNER);
          setPopulateSecondary(true);
        }}
        handleNext={() => {
          setStage(Stage.LOADING);
          handleCreateApplication();
          setPopulateSecondary(true);
        }}
      />
    );
  }

  if (stage === Stage.LOADING) {
    return (
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
    );
  }

  if (stage === Stage.VERIFICATION && response) {
    return (
      <MainContainer>
        <GridContainer>
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
                <Flex
                  css={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Title>Verify your Identity</Title>
                  <Button
                    onClick={() => {
                      router.push('/');
                    }}
                    variant="outline"
                  >
                    Exit
                  </Button>
                </Flex>
                <Flex
                  css={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '50%',
                  }}
                >
                  <Header css={{ marginBottom: 24 }}>
                    Help us verify your identity
                  </Header>
                  <SummaryField>
                    In the next section you will be asked to go through a
                    process to verify your identity. This process helps us
                    ensure that we are meeting the compliance standards and
                    provide the best experience tailored to you.
                  </SummaryField>
                </Flex>
                <Flex css={{ justifyContent: 'flex-end', width: ' 100%' }}>
                  <Button
                    onClick={() => {
                      if (check) setStage(Stage.SECONDARY_OWNER);
                      else setStage(Stage.PRIMARY_OWNER);
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={async () => {
                      await initAlloy({
                        journeyApplicationToken:
                          response.journey_application_token,
                        journeyToken: response._embedded.journey.journey_token,
                        alloySdkToken: configContext.configJson.sdk_keys[0].key,
                      });
                      openAlloy(handleUpdateApplication, 'alloy-overlay-root');
                    }}
                    variant="accent"
                  >
                    I am Ready
                  </Button>
                </Flex>
              </FramerBox>
            </AnimatePresence>
          </LeftPanel>
        </GridContainer>
      </MainContainer>
    );
  }

  if (stage === Stage.APPROVED) {
    return (
      <MainContainer>
        <Confetti numberOfPieces={30} gravity={0.03}></Confetti>
        <GridContainer>
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
              <FramerBox
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '$4',
                  marginLeft: '$4',
                  marginRight: '$4',
                  justifyContent: 'center',
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
                <Title
                  css={{
                    maxWidth: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  Congratulations!
                  <br /> You are approved!
                </Title>
                <Flex css={{ justifyContent: 'flex-end', width: ' 100%' }}>
                  {(configContext.isTransactionWorkflowActive ||
                    configContext.isPiiChangeActive) && (
                    <Button
                      onClick={() => {
                        router.push('/dashboard/approved');
                      }}
                      variant="accent"
                    >
                      {' '}
                      Go to dashboard{' '}
                    </Button>
                  )}
                </Flex>
              </FramerBox>
            </AnimatePresence>
          </LeftPanel>
        </GridContainer>
      </MainContainer>
    );
  }

  if (stage === Stage.ERROR) {
    return (
      <MainContainer>
        <GridContainer>
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
              <FramerBox
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '$4',
                  marginLeft: '$4',
                  marginRight: '$4',
                  justifyContent: 'center',
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
                <Title
                  css={{
                    maxWidth: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  Something went wrong.
                  <br />
                  Please check Developer Mode for details.
                </Title>
                <Flex css={{ justifyContent: 'flex-end', width: ' 100%' }}>
                  {(configContext.isTransactionWorkflowActive ||
                    configContext.isPiiChangeActive) && (
                    <Button
                      onClick={() => {
                        router.push('/');
                      }}
                      variant="accent"
                    >
                      {' '}
                      Back{' '}
                    </Button>
                  )}
                </Flex>
              </FramerBox>
            </AnimatePresence>
          </LeftPanel>
        </GridContainer>
      </MainContainer>
    );
  }
};

Business.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default Business;
