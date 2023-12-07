import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import {
  blueTheme,
  brownTheme,
  darkTheme,
  globalCss,
  orangeTheme,
  pinkTheme,
  purpleTheme,
  redTheme,
  yellowTheme,
} from '../stitches.config';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { NextPage } from 'next';
import GlobalStyle from '../lib/globalStyle';
import { SettingsDialog } from '../components/SettingsDialog';
import { IConfigContext, TJourney, TWorkflow } from '../types/formFields';

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden',
  },
  '*': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    backgroundColor: '$background-primary-neutral',
    minHeight: '100vh',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$background-selection',
  },
});

type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface CompanyContext {
  companyName: string;
  setCompanyName: Dispatch<SetStateAction<string>> | undefined;
  productName: string;
  setProductName: Dispatch<SetStateAction<string>> | undefined;
  productDescription: string;
  setProductDescription: Dispatch<SetStateAction<string>> | undefined;
  entityToken: string;
  setEntityToken: Dispatch<SetStateAction<string>> | '';
}

interface ConfigContext {
  configStatus: string;
  setConfigStatus: Dispatch<SetStateAction<string>> | undefined;
  configJson: IConfigContext;
  setConfigJson: Dispatch<SetStateAction<IConfigContext>> | undefined;
  usConsumerJourney: TJourney;
  setUsConsumerJourney: Dispatch<SetStateAction<TJourney>> | undefined;
  usBusinessJourney: TJourney;
  setUsBusinessJourney: Dispatch<SetStateAction<TJourney>> | undefined;
  emeaConsumerJourney: TJourney;
  setEmeaConsumerJourney: Dispatch<SetStateAction<TJourney>> | undefined;
  emeaBusinessJourney: TJourney;
  setEmeaBusinessJourney: Dispatch<SetStateAction<TJourney>> | undefined;
  piiChange: TJourney;
  setPiiChange: Dispatch<SetStateAction<TJourney>> | undefined;
  transactionVerification?: TWorkflow;
  setTransactionVerification: Dispatch<SetStateAction<TWorkflow>> | undefined;
  onboardingJourney: TJourney;
  setOnboardingJourney: Dispatch<SetStateAction<TJourney>> | undefined;
  isTransactionWorkflowActive: boolean;
  setIsTransactionWorkflowActive: Dispatch<SetStateAction<boolean>> | undefined;
  isPiiChangeActive: boolean;
  setIsPiiChangeActive: Dispatch<SetStateAction<boolean>> | undefined;
}

interface DevModeContext {
  isDevMode: boolean;
  setIsDevMode: Dispatch<SetStateAction<boolean>>;
  apiCalls: { request: string; response: string }[];
  setApiCalls: Dispatch<
    SetStateAction<{ request: string; response: string }[]>
  >;
}

export const CompanyContext = createContext<CompanyContext>({
  companyName: '',
  setCompanyName: undefined,
  productName: '',
  setProductName: undefined,
  productDescription: '',
  setProductDescription: undefined,
  entityToken: '',
  setEntityToken: '',
});

export const ConfigContext = createContext<ConfigContext>({
  configStatus: '',
  setConfigStatus: undefined,
  configJson: {} as IConfigContext,
  setConfigJson: undefined,
  usConsumerJourney: {} as TJourney,
  setUsConsumerJourney: undefined,
  usBusinessJourney: {} as TJourney,
  setUsBusinessJourney: undefined,
  emeaConsumerJourney: {} as TJourney,
  setEmeaConsumerJourney: undefined,
  emeaBusinessJourney: {} as TJourney,
  setEmeaBusinessJourney: undefined,
  piiChange: {} as TJourney,
  setPiiChange: undefined,
  transactionVerification: undefined,
  setTransactionVerification: undefined,
  onboardingJourney: {},
  setOnboardingJourney: undefined,
  isTransactionWorkflowActive: false,
  setIsTransactionWorkflowActive: undefined,
  isPiiChangeActive: false,
  setIsPiiChangeActive: undefined,
});

export const DevModeContext = createContext<DevModeContext>({
  isDevMode: false,
  setIsDevMode: () => false,
  apiCalls: [],
  setApiCalls: () => [],
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();
  const [mounted, setMounted] = useState(false);
  const [companyName, setCompanyName] = useState('Limelight');
  const [productName, setProductName] = useState('Credit Card');
  const [configStatus, setConfigStatus] = useState('loading');
  const [configJson, setConfigJson] = useState({} as IConfigContext);
  const [isDevMode, setIsDevMode] = useState(false);
  const [usConsumerJourney, setUsConsumerJourney] = useState<TJourney>({});
  const [usBusinessJourney, setUsBusinessJourney] = useState<TJourney>({});
  const [emeaConsumerJourney, setEmeaConsumerJourney] = useState<TJourney>({});
  const [emeaBusinessJourney, setEmeaBusinessJourney] = useState<TJourney>({});
  const [piiChange, setPiiChange] = useState<TJourney>({});
  const [entityToken, setEntityToken] = useState('' as string);
  const [transactionVerification, setTransactionVerification] = useState(
    {} as TWorkflow
  );
  const [apiCalls, setApiCalls] = useState<
    { request: string; response: string }[]
  >([]);
  const [productDescription, setProductDescription] = useState(
    'placeholder description'
  );
  const [onboardingJourney, setOnboardingJourney] = useState({} as TJourney);
  const [isTransactionWorkflowActive, setIsTransactionWorkflowActive] =
    useState(false);
  const [isPiiChangeActive, setIsPiiChangeActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch('/api/config/create', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.status === 200
          ? setConfigStatus('valid')
          : setConfigStatus('notValid');
        return response.json();
      })
      .then((response) => {
        setConfigJson(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem('settings');
    if (storage) {
      setCompanyName(JSON.parse(storage).companyName);
      setProductName(JSON.parse(storage).productName);
      setProductDescription(JSON.parse(storage).productDescription);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(configJson).length > 0) {
      configJson.journeys
        .filter((journey) => journey.journey_type === 'us_consumer_onboarding')
        .map((filteredJourney) => setUsConsumerJourney(filteredJourney));
      configJson.journeys
        .filter((journey) => journey.journey_type === 'us_business_onboarding')
        .map((filteredJourney) => setUsBusinessJourney(filteredJourney));
      configJson.journeys
        .filter(
          (journey) => journey.journey_type === 'emea_consumer_onboarding'
        )
        .map((filteredJourney) => setEmeaConsumerJourney(filteredJourney));
      configJson.journeys
        .filter(
          (journey) => journey.journey_type === 'emea_business_onboarding'
        )
        .map((filteredJourney) => setEmeaBusinessJourney(filteredJourney));
      configJson.journeys
        .filter((journey) => journey.journey_type === 'pii_change')
        .map((filteredJourney) => setPiiChange(filteredJourney));
      configJson.workflows
        .filter(
          (workflow) => workflow.workflow_type === 'transaction_verification'
        )
        .map((filteredWorkflow) =>
          setTransactionVerification(filteredWorkflow)
        );
    }
  }, [configJson]);

  const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    );
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{
        light: 'light-theme',
        dark: darkTheme.className,
        blue: blueTheme.className,
        purple: purpleTheme,
        orange: orangeTheme,
        yellow: yellowTheme,
        pink: pinkTheme,
        red: redTheme,
        brown: brownTheme,
      }}
      defaultTheme="purple"
    >
      <GlobalStyle />
      <div id="alloy-overlay-root" style={{ pointerEvents: 'visible' }} />
      <ConfigContext.Provider
        value={{
          configStatus,
          setConfigStatus,
          configJson,
          setConfigJson,
          usConsumerJourney,
          setUsConsumerJourney,
          usBusinessJourney,
          setUsBusinessJourney,
          emeaConsumerJourney,
          setEmeaConsumerJourney,
          emeaBusinessJourney,
          setEmeaBusinessJourney,
          piiChange,
          setPiiChange,
          transactionVerification,
          setTransactionVerification,
          onboardingJourney,
          setOnboardingJourney,
          isTransactionWorkflowActive,
          setIsTransactionWorkflowActive,
          isPiiChangeActive,
          setIsPiiChangeActive,
        }}
      >
        <CompanyContext.Provider
          value={{
            companyName,
            setCompanyName,
            productName,
            setProductName,
            productDescription,
            setProductDescription,
            entityToken,
            setEntityToken,
          }}
        >
          <DevModeContext.Provider
            value={{
              isDevMode,
              setIsDevMode,
              apiCalls,
              setApiCalls,
            }}
          >
            {getLayout(<Component {...pageProps} />)}
            <SettingsDialog
              givenProductName={productName}
              givenProductDescription={productDescription}
              givenCompanyName={companyName}
            />
          </DevModeContext.Provider>
        </CompanyContext.Provider>
      </ConfigContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
