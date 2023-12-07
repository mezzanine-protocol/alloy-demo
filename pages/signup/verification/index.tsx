import React, { ReactElement, useEffect, useState, useContext } from 'react';
import { openAlloy, initAlloy, setAlloySDKTheme } from '../../../lib/alloy';
import { Button, Input, StyledLabel } from '../../../components/styles';
import { AnimatePresence } from 'framer-motion';
import { ApplicationResponse } from '../../../types/journeyApplication';
import FormLayout from '../../../components/layout/formPage';
import { CompanyContext, ConfigContext, DevModeContext } from '../../_app';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';
import { DocVCallback } from '../../../types/docv';
import Loading from '../../../components/Loading';
import InputField from '../../../components/InputField';
import Selector from '../../../components/Selector';
import { useTheme } from 'next-themes';
import { faker } from '@faker-js/faker';
import {
  MainContainer,
  GridContainer,
  LeftPanel,
  FieldSet,
  Body,
  Box,
  FramerBox,
  Form,
  Title,
  Header,
  Mask,
} from '../../../styles/verification';
import { useForm, SubmitHandler } from 'react-hook-form';
import { verificationFormFields } from '../../../formFields/verification';
import { IFormFields } from '../../../types/formFields';
import { IField } from '../../../types/formFields/field';
import DevModeSwitch from '../../../components/switch/DevModeSwitch';
import { domain } from '../../../config.json';
const Verification = () => {
  const router = useRouter();
  const { productName, companyName } = useContext(CompanyContext);
  const { apiCalls, setApiCalls } = useContext(DevModeContext);
  const [stage, setStage] = useState<
    'initial' | 'ongoing' | 'action_needed' | 'pending' | 'approved' | 'error'
  >('initial');
  const [response, setResponse] = useState<ApplicationResponse>();
  const [mask, setMask] = useState(false);
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, errors },
    trigger,
  } = useForm<IFormFields>({ mode: 'all' });
  const onSubmit: SubmitHandler<IFormFields> = (data) =>
    handleCreateApplication(data);
  theme ? setAlloySDKTheme(theme) : null;
  const { ...configContext } = React.useContext(ConfigContext);
  const { ...companyContext } = React.useContext(CompanyContext);
  const [journeyToken, setJourneyToken] = useState<string | undefined>('');
  const apiBaseUrl = domain || 'https://api.alloy.co';

  useEffect(() => {
    if (response) {
      if (response.journey_application_status !== undefined) {
        if (response.journey_application_status.toLowerCase() === 'pending') {
          initAlloy({
            journeyApplicationToken: response.journey_application_token,
            journeyToken: response._embedded.journey.journey_token,
            alloySdkToken: configContext.configJson.sdk_keys[0].key,
          });
          setStage('pending');
        } else if (
          response.journey_application_status.toLowerCase() === 'approved'
        ) {
          setStage('approved');
        } else {
          if (stage !== 'ongoing') setStage('ongoing');
        }
      } else {
        setStage('error');
      }
    }
  }, [response, stage, configContext]);

  useEffect(() => {
    if (stage !== 'action_needed') return;

    (async () => {
      const journeyApplicationToken = response?.journey_application_token;

      const apiResponse = await fetch(
        `/api/applications/${journeyApplicationToken}?journeyToken=${journeyToken}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const apiResponseJson = await apiResponse.json();
      setResponse(apiResponseJson);
      setApiCalls([
        ...apiCalls,
        {
          request: JSON.stringify(
            {
              method: 'GET',
              url: `${apiBaseUrl}/applications`,
              headers: {
                content_type: 'application/json',
              },
            },
            null,
            2
          ),
          response: JSON.stringify(apiResponseJson, null, 2),
        },
      ]);
    })();
  }, [stage, response, apiCalls, setApiCalls, journeyToken]);

  useEffect(() => {
    setJourneyToken(configContext.onboardingJourney.journey_token);
  }, [configContext]);

  const populateWithSample = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    setValue('firstName', firstName);
    setValue('lastName', lastName);
    setValue(
      'email',
      faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase())
    );
    setValue('birthDate', '1987-06-05');
    setValue('ssn', '111111111');
    setValue('phoneNumber', faker.phone.number('555-555-####'));
    setValue('income', '72000');
    setValue('addressStreet', faker.address.streetAddress());
    setValue('addressCity', faker.address.cityName());
    setValue('addressState', faker.address.stateAbbr());
    setValue('addressPostalCode', faker.address.zipCode());
    setValue('checkbox', true);
    trigger();
  };

  const externalEntityId = faker.random.alphaNumeric(5);

  const handleCreateApplication = async (data: IFormFields) => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        externalEntityId: externalEntityId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        birth_date: data.birthDate,
        document_ssn: data.ssn,
        phone_number: data.phoneNumber,
        income: data.income,
        addresses: [
          {
            type: 'primary',
            line_1: data.addressStreet,
            line_2: 'Suite 1408',
            city: data.addressCity,
            state: data.addressState,
            postal_code: data.addressPostalCode,
            country_code: 'US',
          },
        ],
      })
    );

    companyContext.setEntityToken &&
      companyContext.setEntityToken(externalEntityId);
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
            external_entity_id: externalEntityId,
            phone_number: data.phoneNumber,
            name_first: data.firstName,
            name_last: data.lastName,
            email_address: data.email,
            birth_date: data.birthDate,
            document_ssn: data.ssn,
            addresses: [
              {
                type: 'primary',
                line_1: data.addressStreet,
                line_2: 'Suite 1408',
                city: data.addressCity,
                state: data.addressState,
                postal_code: data.addressPostalCode,
                country_code: 'US',
              },
            ],
            income: data.income,
            branch_name: 'persons',
            entity_type: 'person',
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
    setApiCalls([
      ...apiCalls,
      {
        request: JSON.stringify(requestObject, null, 2),
        response: JSON.stringify(responseJson, null, 2),
      },
    ]);
    setResponse(responseJson);
  };

  const handleUpdateApplication = async (data: DocVCallback) => {
    if (data.status === 'closed') return;
    if (data.status.includes('complete')) setStage('action_needed');
  };

  const callback = (data: DocVCallback) => {
    handleUpdateApplication(data);
    setMask(false);
  };
  const onOpen = () => {
    const elementId = 'alloy-overlay-root';
    openAlloy(callback, elementId);
  };

  const handleDocV = () => {
    setMask(true);
    onOpen();
  };

  const handleInputType = (field: IField) => {
    switch (field.input.type) {
      case 'selector':
        return (
          <>
            <StyledLabel htmlFor={field.id}>
              {field.styledLabel.content}
            </StyledLabel>
            <Selector
              id={field.id}
              defaultValue={field.input.defaultValue}
              register={register}
              required={field.input.required}
              data={field.input.data}
              value={field.input.register}
            ></Selector>
          </>
        );

      case 'checkbox':
        return (
          <>
            <Input
              id={field.id}
              type={field.input.type}
              css={{
                borderRadius: '0px',
                height: '16px',
                width: '16px',
              }}
              placeholder={field.input.placeholder}
              {...register(field.input.register, {
                required: field.input.required,
              })}
            ></Input>
            <StyledLabel htmlFor={field.id}>
              {field.styledLabel.content}
            </StyledLabel>
          </>
        );

      default:
        return <InputField errors={errors} field={field} register={register} />;
    }
  };

  return (
    <MainContainer>
      {stage === 'approved' && (
        <Confetti numberOfPieces={30} gravity={0.03}></Confetti>
      )}
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
          <button
            style={{
              position: 'fixed',
              bottom: '52px',
              left: '24px',
              zIndex: 2,
            }}
            onClick={() => {
              populateWithSample();
            }}
          >
            sample data
          </button>
          <AnimatePresence>
            {stage === 'initial' && (
              <Form
                onSubmit={handleSubmit(onSubmit)}
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
                  <Title>Tell us more about you</Title>
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
                    display: 'flex',
                    rowGap: '$4',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '450px',
                  }}
                >
                  {verificationFormFields.map((fieldSection) => {
                    return (
                      <Box
                        key={fieldSection.id}
                        css={{
                          display: 'flex',
                          rowGap: '$4',
                          flexDirection: 'column',
                        }}
                      >
                        <Header css={{ ...fieldSection.css }}>
                          {fieldSection.headerText}
                        </Header>
                        {fieldSection.fields.map((field) => {
                          return (
                            <FieldSet key={field.id} css={{ ...field.css }}>
                              {handleInputType(field)}
                            </FieldSet>
                          );
                        })}
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  css={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    paddingTop: '25px',
                    paddingBottom: '50px',
                  }}
                >
                  <Button
                    type="submit"
                    variant={'accent'}
                    disabled={!isValid}
                    isDisabled={!isValid}
                  >
                    Next
                  </Button>
                </Box>
              </Form>
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
          <AnimatePresence>
            {stage === 'pending' && (
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
                <Box
                  css={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Title>Verify your identity</Title>
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
                    display: 'flex',
                    rowGap: '$4',
                    flexDirection: 'column',
                    maxWidth: '450px',
                  }}
                >
                  <Title> Help us verify your identity</Title>
                  <Body>
                    You will be asked to go through a process to verify your
                    identity. This process helps us ensure that we are meeting
                    the compliance standards and provide the best experience
                    tailored to you.
                  </Body>
                </Box>
                <Box
                  css={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: ' 100%',
                  }}
                >
                  <Button
                    onClick={() => {
                      handleDocV();
                    }}
                    variant={'accent'}
                  >
                    {' '}
                    I{"'"}m ready{' '}
                  </Button>
                </Box>
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
                <br /> You were approved for {companyName} {productName}!
              </Title>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: ' 100%',
                }}
              >
                {(configContext.isTransactionWorkflowActive ||
                  configContext.isPiiChangeActive) && (
                  <Button
                    onClick={() => {
                      router.push('/dashboard/approved');
                    }}
                    variant={'accent'}
                  >
                    {' '}
                    Go to dashboard{' '}
                  </Button>
                )}
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
              <Title css={{ maxWidth: '450px' }}>
                Something went wrong.
                <br />
                Please check Developer Mode for details.
              </Title>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: ' 100%',
                }}
              >
                {(configContext.isTransactionWorkflowActive ||
                  configContext.isPiiChangeActive) && (
                  <Button
                    onClick={() => {
                      router.push('/');
                    }}
                    variant={'accent'}
                  >
                    {' '}
                    Back{' '}
                  </Button>
                )}
              </Box>
            </FramerBox>
          )}
        </LeftPanel>
      </GridContainer>
      {mask && <Mask />}
    </MainContainer>
  );
};

Verification.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default Verification;
