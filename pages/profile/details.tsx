import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { faker } from '@faker-js/faker';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Button from '../../components/button/Button';
import { ButtonVariant } from '../../components/button/type';
import Text from '../../components/text/Text';
import { Input } from '../../components/styles';
import SnackBarToast from '../../components/snackBarToast/SnackBarToast';
import { initAlloy } from '../../lib/alloy';
import { TopNav } from '../../components/TopNav';
import VerifyIdentityModal from '../../components/profile/modals/VerifyIdentityModal';
import { User } from '../../types/user';
import { StyledSideNavButton } from '../../styles/profile';
import styles from './details.module.css';
import { DevModeContext } from '../_app';
import { ResponseContainer } from '../../styles/pages';
import ResponseRecord from '../../components/responseRecord/ResponseRecord';
import DevModeSwitch from '../../components/switch/DevModeSwitch';
import { ApplicationResponse } from '../../types/journeyApplication';
import { CompanyContext, ConfigContext } from '../_app';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormFields } from '../../types/formFields';
import { domain } from '../../config.json';
type ToastProps = {
  duration: number;
  title: string;
  type: string;
};

export const toastProps: ToastProps = {
  duration: 5000,
  title: 'Failed to send payment',
  type: 'danger',
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: '5fr 3fr',
  height: '100%',
  width: '100%',
};

const ProfileSideNav = ({ currentPathName }: { currentPathName: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '250px',
      height: '100%',
      borderRight: '1px solid var(--cl-gray-300)',
      padding: 'var(--cl-space-3) var(--cl-space-2) 0 0',
    }}
  >
    <StyledSideNavButton
      isCurrentPathName={currentPathName.includes('overview')}
    >
      Overview
    </StyledSideNavButton>
    <StyledSideNavButton
      isCurrentPathName={currentPathName.includes('details')}
    >
      Personal Details
    </StyledSideNavButton>
    <StyledSideNavButton
      isCurrentPathName={currentPathName.includes('security')}
    >
      Sign-in & Security
    </StyledSideNavButton>
    <StyledSideNavButton
      isCurrentPathName={currentPathName.includes('settings')}
    >
      Account Settings
    </StyledSideNavButton>
    <StyledSideNavButton isCurrentPathName={currentPathName.includes('alerts')}>
      Alerts
    </StyledSideNavButton>
    <StyledSideNavButton
      isCurrentPathName={currentPathName.includes('preferences')}
    >
      Payment Preferences
    </StyledSideNavButton>
  </div>
);

const PersonalDetails = () => {
  const [user, setUser] = useState<User>();
  const [isVerifyIdentityModalOpen, setIsVerifyIdentityModalOpen] =
    useState(false);
  const [submitPiiChangeLoading, setSubmitPiiChangeLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const { isDevMode, apiCalls, setApiCalls } = useContext(DevModeContext);
  const router = useRouter();
  const handleToast = () => setToast(!toast);
  const apiBaseUrl = domain || 'https://api.alloy.co';
  const { ...configContext } = useContext(ConfigContext);
  const { ...companyContext } = useContext(CompanyContext);
  const { register, handleSubmit, setValue, formState } = useForm<IFormFields>({
    mode: 'all',
    defaultValues: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.number('###-###-####'),
    },
  });
  const onSubmit: SubmitHandler<IFormFields> = (data) => handleFormSubmit(data);

  useEffect(() => {
    const retrievedUser = localStorage.getItem('user');
    if (retrievedUser) setUser(JSON.parse(retrievedUser));
  }, []);

  useEffect(() => {
    user?.firstName && setValue('firstName', user?.firstName);
    user?.lastName && setValue('lastName', user?.lastName);
    user?.phoneNumber && setValue('phoneNumber', user?.phoneNumber);
  }, [user, setValue]);

  const handleFormSubmit = async (data: IFormFields) => {
    const evalData = {
      name_first: data.firstName,
      name_last: data.lastName,
      phone_number: data.phoneNumber,
    };

    const payload = {
      entities: [
        {
          branch_name: 'persons',
          entity_type: 'person',
          external_entity_id: companyContext.entityToken,
          data: evalData,
        },
      ],
    };

    try {
      setSubmitPiiChangeLoading(true);
      const response = await fetch(
        `/api/applications/create?journeyToken=${configContext.piiChange.journey_token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      const responseJson: ApplicationResponse = await response.json();
      setApiCalls([
        ...apiCalls,
        {
          request: JSON.stringify(
            {
              method: 'POST',
              url: `${apiBaseUrl}/applications/create`,
              headers: {
                content_type: 'application/json',
              },
              body: payload,
            },
            null,
            2
          ),
          response: JSON.stringify(responseJson, null, 2),
        },
      ]);

      if (
        responseJson.journey_application_token &&
        responseJson._embedded.journey.journey_token
      ) {
        initAlloy({
          journeyToken: responseJson._embedded.journey.journey_token,
          alloySdkToken: configContext.configJson.sdk_keys[0].key,
          journeyApplicationToken: responseJson.journey_application_token,
        });
      }
      setIsVerifyIdentityModalOpen(true);
    } catch (error) {
      toastProps.title = `Failed to update personal details`;
      toastProps.duration = 2000;
      toastProps.type = 'danger';
      handleToast();
    }
    setSubmitPiiChangeLoading(false);
  };

  return (
    <div style={{ height: '70vh' }}>
      <div style={isDevMode ? gridStyles : {}}>
        <div>
          <TopNav user={user} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: 'var(--cl-space-4)',
              padding: 'var(--cl-space-4)',
              height: '100%',
            }}
          >
            <Button
              variant={ButtonVariant.tertiary}
              onClick={() => {
                router.push('/dashboard/approved');
              }}
            >
              <ArrowLeftIcon />
              Back to Dashboard
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 'var(--cl-space-5)',
                height: '100%',
              }}
            >
              <ProfileSideNav currentPathName={router.pathname} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 'var(--cl-space-5)',
                    paddingTop: 'var(--cl-space-5',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 'var(--cl-font-size-4)',
                      fontWeight: 'var(--cl-font-weight-medium)',
                    }}
                  >
                    Personal Details
                  </Text>
                  <Text
                    style={{
                      fontSize: 'var(--cl-font-size-3)',
                      lineHeight: 'var(--cl-font-size-4)',
                      maxWidth: '900px',
                    }}
                  >{`
                    Your primary address is where you live—typically, what's on your driver's license or other government-issued ID.
                    If you'd like us to send your mail for any accounts to a different address or addresses, choose "Add" above. 
                    (If you don't see an "Add" button, you aren't authorized to add an address.)
                  `}</Text>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 'var(--cl-space-2)',
                      maxWidth: '700px',
                      marginTop: 'var(--cl-space-5)',
                      width: '100%',
                    }}
                  >
                    <div className={styles.TextFieldContainer}>
                      <label>First Name</label>
                      <Input
                        type="text"
                        className={styles.InputText}
                        placeholder={user?.firstName || 'First Name'}
                        disabled={
                          submitPiiChangeLoading ||
                          !configContext.isPiiChangeActive
                        }
                        {...register('firstName', { required: true })}
                      />
                    </div>
                    <div className={styles.TextFieldContainer}>
                      <label>Last Name</label>
                      <Input
                        type="text"
                        className={styles.InputText}
                        placeholder={user?.lastName || 'Last Name'}
                        disabled={
                          submitPiiChangeLoading ||
                          !configContext.isPiiChangeActive
                        }
                        {...register('lastName', { required: true })}
                      />
                    </div>
                    <div className={styles.TextFieldContainer}>
                      <label>Phone Number</label>
                      <Input
                        type="text"
                        className={styles.InputText}
                        placeholder={user?.phoneNumber || 'Phone Number'}
                        disabled={
                          submitPiiChangeLoading ||
                          !configContext.isPiiChangeActive
                        }
                        {...register('phoneNumber', { required: true })}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant={ButtonVariant.primary}
                      style={{ marginTop: 'var(--cl-space-5)' }}
                      disabled={
                        !formState.isValid || !configContext.isPiiChangeActive
                      }
                    >
                      Update Details
                    </Button>
                    {!configContext.isPiiChangeActive && (
                      <Text
                        style={{
                          fontSize: 'var(--cl-font-size-2)',
                          lineHeight: 'var(--cl-font-size-4)',
                          maxWidth: '900px',
                          color: '#E00',
                        }}
                      >{`
                        (PII Change journey is not selected, please select the journey in the settings modal and try again)
                      `}</Text>
                    )}
                    <SnackBarToast
                      open={toast}
                      setOpen={handleToast}
                      duration={toastProps.duration}
                      title={toastProps.title}
                      type={toastProps.type}
                    />
                  </div>
                </div>
              </form>
            </div>
            <DevModeSwitch />
          </div>
        </div>
        {isDevMode && (
          <div>
            <ResponseContainer>
              <ResponseRecord />
            </ResponseContainer>
          </div>
        )}
      </div>
      <VerifyIdentityModal
        isOpen={isVerifyIdentityModalOpen}
        setIsOpen={setIsVerifyIdentityModalOpen}
      />
    </div>
  );
};

export default PersonalDetails;
