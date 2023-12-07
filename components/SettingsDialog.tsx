import React, { useContext, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import { CaretDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Input, Button } from './styles';
import { CompanyContext, ConfigContext, DevModeContext } from '../pages/_app';
import {
  FlowSelector,
  DialogOverlay,
  DialogContent,
  TopContainer,
  Title,
  Subtitle,
  CloseButton,
  FlowButton,
  FlowButtonText,
  DialogDescription,
  BoxFlex,
  StyledSelect,
} from './styles';
import Image from 'next/image';
import UsConsumerLogo from '../public/icons/consumer.png';
import UsBusinessLogo from '../public/icons/business.png';
import UkConsumerLogo from '../public/icons/globe.png';
import TransactionLogo from '../public/icons/transaction.png';
import PiiLogo from '../public/icons/pii.png';
import { TJourney } from '../types/formFields';

interface Props {
  givenCompanyName: string;
  givenProductName: string;
  givenProductDescription: string;
}

const SettingsDialog = ({
  givenCompanyName,
  givenProductName,
  givenProductDescription,
}: Props) => {
  const { ...companyContext } = useContext(CompanyContext);
  const { ...configContext } = useContext(ConfigContext);
  const { setApiCalls } = useContext(DevModeContext);
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState(givenCompanyName);
  const [productName, setProductName] = useState(givenProductName);
  const [productDescription, setProductDescription] = useState(
    givenProductDescription
  );
  const [onboardingJourney, setOnboardingJourney] = useState<TJourney>({});
  const [isTransactionSelected, setIsTransactionSelected] = useState(false);
  const [isPiiSelected, setIsPiiSelected] = useState(false);
  const [isInitialRun, setIsInitialRun] = useState(true);
  const [isInitialSetting, setIsInitialSetting] = useState(true);
  const router = useRouter();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === '/') {
      if (!isInitialRun) {
        if (!open) {
          event.preventDefault();
        }
        setOnboardingJourney(configContext.onboardingJourney);
        if (configContext.isTransactionWorkflowActive) {
          setIsTransactionSelected(true);
        }
        if (configContext.isPiiChangeActive) {
          setIsPiiSelected(true);
        }
        setOpen(true);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isInitialSetting && configContext.configStatus === 'valid') {
      setOpen(true);
      setIsInitialSetting(false);
    }
  }, [isInitialSetting, configContext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (!Object.keys(onboardingJourney).length) {
      setIsPiiSelected(false);
      setIsTransactionSelected(false);
    }
  }, [onboardingJourney]);

  const handleSave = () => {
    companyContext.setCompanyName && companyContext.setCompanyName(companyName);
    companyContext.setProductName && companyContext.setProductName(productName);
    companyContext.setProductDescription &&
      companyContext.setProductDescription(productDescription);

    localStorage.clear();
    setApiCalls([]);

    localStorage.setItem(
      'settings',
      JSON.stringify({
        companyName: companyName,
        productName: productName,
        productDescription: productDescription,
      })
    );
    setOpen(false);
    if (isInitialRun === true) {
      setIsInitialRun(false);
    }
    if (
      configContext.setOnboardingJourney &&
      configContext.setIsTransactionWorkflowActive &&
      configContext.setIsPiiChangeActive
    ) {
      configContext.setOnboardingJourney(onboardingJourney);
      configContext.setIsTransactionWorkflowActive(isTransactionSelected);
      configContext.setIsPiiChangeActive(isPiiSelected);
    }
    router.push('/');
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  const handleCancelClick = () => {
    setOpen(false);
  };

  const handleOnboardingJourney = (journey: TJourney) => {
    if (journey === onboardingJourney) {
      setOnboardingJourney({});
    } else {
      setOnboardingJourney(journey);
    }
  };

  const handleTransactionWorkflow = () => {
    setIsTransactionSelected(!isTransactionSelected);
  };

  const handlePiiChangeJourney = () => {
    setIsPiiSelected(!isPiiSelected);
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger hidden>Settings</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent
          css={{ maxHeight: 'none' }}
          onEscapeKeyDown={() => {
            !isInitialRun && setOpen(false);
          }}
        >
          <TopContainer>
            <Title>Settings</Title>
            <CloseButton
              disabled={isInitialRun}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Cross2Icon />
            </CloseButton>
          </TopContainer>
          <DialogDescription>
            <FlowSelector>
              <Subtitle>Select Onboarding Flow to Run</Subtitle>
              <FlowButton
                key={configContext.usConsumerJourney.journey_type}
                value={configContext.usConsumerJourney.journey_type}
                disabled={
                  Object.keys(configContext.usConsumerJourney).length === 0
                }
                isSelected={
                  configContext.usConsumerJourney.journey_type !== undefined
                    ? onboardingJourney.journey_type ===
                      configContext.usConsumerJourney.journey_type
                      ? 'selected'
                      : 'unselected'
                    : 'unselected'
                }
                onClick={() =>
                  handleOnboardingJourney(configContext.usConsumerJourney)
                }
              >
                <Image
                  src={UsConsumerLogo}
                  alt="US Consumer Onboarding"
                  width="24px"
                  height="24px"
                />
                <FlowButtonText>US Consumer Onboarding</FlowButtonText>
              </FlowButton>
              <FlowButton
                key={configContext.usBusinessJourney.journey_type}
                value={configContext.usBusinessJourney.journey_type}
                disabled={
                  Object.keys(configContext.usBusinessJourney).length === 0
                }
                isSelected={
                  configContext.usBusinessJourney.journey_type !== undefined
                    ? onboardingJourney.journey_type ===
                      configContext.usBusinessJourney.journey_type
                      ? 'selected'
                      : 'unselected'
                    : 'unselected'
                }
                onClick={() =>
                  handleOnboardingJourney(configContext.usBusinessJourney)
                }
              >
                <Image
                  src={UsBusinessLogo}
                  alt="US Business Onboarding"
                  width="24px"
                  height="24px"
                />
                <FlowButtonText>US Business Onboarding</FlowButtonText>
              </FlowButton>
              <FlowButton
                key={configContext.emeaConsumerJourney.journey_type}
                value={configContext.emeaConsumerJourney.journey_type}
                disabled={
                  Object.keys(configContext.emeaConsumerJourney).length === 0
                }
                isSelected={
                  configContext.emeaConsumerJourney.journey_type !== undefined
                    ? onboardingJourney.journey_type ===
                      configContext.emeaConsumerJourney.journey_type
                      ? 'selected'
                      : 'unselected'
                    : 'unselected'
                }
                onClick={() =>
                  handleOnboardingJourney(configContext.emeaConsumerJourney)
                }
              >
                <Image
                  src={UkConsumerLogo}
                  alt="UK Consumer Onboarding"
                  width="24px"
                  height="24px"
                />
                <FlowButtonText>EMEA Consumer Onboarding</FlowButtonText>
              </FlowButton>
              <FlowButton
                key={configContext.emeaBusinessJourney.journey_type}
                value={configContext.emeaBusinessJourney.journey_type}
                disabled={
                  Object.keys(configContext.emeaBusinessJourney).length === 0
                }
                isSelected={
                  configContext.emeaBusinessJourney.journey_type !== undefined
                    ? onboardingJourney.journey_type ===
                      configContext.emeaBusinessJourney.journey_type
                      ? 'selected'
                      : 'unselected'
                    : 'unselected'
                }
                onClick={() =>
                  handleOnboardingJourney(configContext.emeaBusinessJourney)
                }
              >
                <Image
                  src={UkConsumerLogo}
                  alt="EMEA Business Onboarding"
                  width="24px"
                  height="24px"
                />
                <FlowButtonText>EMEA Business Onboarding</FlowButtonText>
              </FlowButton>
            </FlowSelector>
            <FlowSelector>
              <Subtitle>Select Ongoing Flow to Run</Subtitle>
              <FlowButton
                key={configContext.transactionVerification?.workflow_type}
                value={configContext.transactionVerification?.workflow_type}
                disabled={
                  !configContext.transactionVerification ||
                  Object.keys(onboardingJourney).length === 0
                }
                isSelected={isTransactionSelected ? 'selected' : 'unselected'}
                onClick={handleTransactionWorkflow}
              >
                <Image
                  src={TransactionLogo}
                  alt="Transaction Verification"
                  width="24px"
                  height="24px"
                />
                <FlowButtonText>Transaction Verification</FlowButtonText>
              </FlowButton>
              <FlowButton
                key={configContext.piiChange.journey_type}
                value={configContext.piiChange.journey_type}
                disabled={
                  Object.keys(configContext.piiChange).length === 0 ||
                  Object.keys(onboardingJourney).length === 0
                }
                isSelected={isPiiSelected ? 'selected' : 'unselected'}
                onClick={handlePiiChangeJourney}
              >
                <Image
                  src={PiiLogo}
                  alt="PII Change"
                  width="24px"
                  height="24px"
                />
                <FlowButtonText>PII Change</FlowButtonText>
              </FlowButton>
            </FlowSelector>
            <label
              htmlFor="color"
              style={{ display: ' flex', gap: 8, flexDirection: 'column' }}
            >
              Color
              <BoxFlex
                css={{
                  position: 'relative',
                }}
              >
                <StyledSelect
                  id="color"
                  value={theme}
                  onChange={(value) => {
                    handleThemeChange(value.currentTarget.value);
                  }}
                >
                  <option value="light">Default-Green</option>
                  <option value="dark">Dark-Green</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="pink">Pink</option>
                  <option value="brown">Brown</option>
                  <option value="red">Red</option>
                </StyledSelect>
                <BoxFlex css={{ position: 'absolute', right: 12, top: 16 }}>
                  {' '}
                  <CaretDownIcon />
                </BoxFlex>
              </BoxFlex>
            </label>

            <label
              htmlFor="companyName"
              style={{ display: ' flex', gap: 8, flexDirection: 'column' }}
            >
              Company Name
              <Input
                id={'companyName'}
                defaultValue={companyContext.companyName}
                onChange={(e) => {
                  setCompanyName(e.currentTarget.value);
                }}
              />
            </label>
            <label
              htmlFor="productName"
              style={{ display: ' flex', gap: 8, flexDirection: 'column' }}
            >
              Product Name
              <Input
                id={'productName'}
                defaultValue={companyContext.productName}
                onChange={(e) => {
                  setProductName(e.currentTarget.value);
                }}
              />
            </label>
            <label
              htmlFor="productDescription"
              style={{ display: ' flex', gap: 8, flexDirection: 'column' }}
            >
              Product Description
              <Input
                id={'productDescription'}
                defaultValue={companyContext.productDescription}
                onChange={(e) => {
                  setProductDescription(e.currentTarget.value);
                }}
              />
            </label>
            <BoxFlex
              css={{
                justifyContent: 'flex-end',
                gap: '$2',
              }}
            >
              <Button
                variant={'secondary'}
                onClick={handleCancelClick}
                disabled={isInitialRun}
                isDisabled={isInitialRun}
              >
                {' '}
                Cancel{' '}
              </Button>
              <Button
                variant={'accent'}
                onClick={handleSave}
                disabled={
                  Object.keys(onboardingJourney).length === 0 &&
                  !isPiiSelected &&
                  !isTransactionSelected
                }
                isDisabled={
                  Object.keys(onboardingJourney).length === 0 &&
                  !isPiiSelected &&
                  !isTransactionSelected
                }
              >
                {' '}
                Save{' '}
              </Button>
            </BoxFlex>
          </DialogDescription>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { SettingsDialog };
