import { ReactElement, useEffect, useCallback } from 'react';
import { faker } from '@faker-js/faker';
import { setAlloySDKTheme } from '../../lib/alloy';
import { Button, StyledLabel } from '../styles';
import { AnimatePresence } from 'framer-motion';
import FormLayout from '../layout/formPage';
import { useRouter } from 'next/router';
import Selector from '../Selector';
import InputField from '../InputField';
import { useTheme } from 'next-themes';
import BusinessSummary from './BusinessSummary';
import AccountHolderSummary from './AccountHolderSummary';
import { Stage } from '../../types';
import {
  Form,
  GridContainer,
  LeftPanel,
  FieldSet,
  Box,
  FramerBox,
  Title,
  Header,
  SampleButton,
  Label,
  Checkbox,
} from './style';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormFields } from '../../types/formFields';
import { accountHolderFormFields } from '../../formFields/accountHolder';
import { IField } from '../../types/formFields/field';
import DevModeSwitch from '../switch/DevModeSwitch';

type Props = {
  stage: Stage;
  title: string;
  header: string;
  populate: boolean;
  check?: boolean;
  setCheck?: (arg0: boolean) => void;
  handleBack: () => void;
  handleNext: () => void;
};

const AccountHolderForm = ({
  stage,
  title,
  header,
  populate,
  check,
  setCheck,
  handleBack,
  handleNext,
}: Props) => {
  const router = useRouter();

  const { theme } = useTheme();

  theme ? setAlloySDKTheme(theme) : null;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, errors },
    trigger,
  } = useForm<IFormFields>({ mode: 'all' });
  const onSubmit: SubmitHandler<IFormFields> = (data) => handleFormSubmit(data);

  const populateWithLocalStorage = useCallback(() => {
    const userObject = localStorage.getItem(stage);

    if (!userObject) return;

    const {
      firstName = '',
      lastName = '',
      birthDate = '',
      documentSsn = '',
      email = '',
      phoneNumber = '',
      addressLine1 = '',
      addressCity = '',
      addressState = '',
      addressPostalCode = '',
    } = JSON.parse(userObject);

    setValue('firstName', firstName);
    setValue('lastName', lastName);
    setValue('birthDate', birthDate);
    setValue('ssn', documentSsn);
    setValue('email', email);
    setValue('phoneNumber', phoneNumber);
    setValue('addressStreet', addressLine1);
    setValue('addressCity', addressCity);
    setValue('addressState', addressState);
    setValue('addressPostalCode', addressPostalCode);
    trigger();
  }, [stage, setValue, trigger]);

  useEffect(() => {
    if (!populate) return;
    populateWithLocalStorage();
  }, [populate, populateWithLocalStorage]);

  const populateWithSample = () => {
    const first = faker.name.firstName().split("'").join('');
    const last = faker.name.lastName().split("'").join('');
    setValue('firstName', first);
    setValue('lastName', last);
    setValue('birthDate', '1987-06-05');
    setValue('ssn', faker.random.numeric(9).toString());
    setValue('email', `${first}.${last}@hotmail.com`);
    setValue('phoneNumber', faker.phone.number('##########').toString());
    setValue('addressStreet', faker.address.streetAddress());
    setValue('addressCity', faker.address.city());
    setValue('addressState', faker.address.stateAbbr());
    setValue('addressPostalCode', faker.random.numeric(5).toString());
    trigger();
  };

  const depopulateFields = () => {
    setValue('firstName', '');
    setValue('lastName', '');
    setValue('birthDate', '');
    setValue('ssn', '');
    setValue('email', '');
    setValue('phoneNumber', '');
    setValue('addressStreet', '');
    setValue('addressCity', '');
    setValue('addressState', 'NY');
    setValue('addressPostalCode', '');
    trigger();
  };

  const handleFormSubmit = async (data: IFormFields) => {
    localStorage.setItem(
      stage,
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        documentSsn: data.ssn,
        email: data.email,
        phoneNumber: data.phoneNumber,
        addressLine1: data.addressStreet,
        addressCity: data.addressCity,
        addressState: data.addressState,
        addressPostalCode: data.addressPostalCode,
      })
    );
    handleNext();
    depopulateFields();
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
            />
          </>
        );

      case 'checkbox':
        return (
          stage === Stage.PRIMARY_OWNER && (
            <FieldSet css={{ ...field.css }}>
              <Checkbox
                type={field.input.type}
                id={field.id}
                checked={check}
                onChange={() => {
                  setCheck && setCheck(!check);
                }}
              />
              <Label htmlFor={field.id}>{field.styledLabel.content}</Label>
            </FieldSet>
          )
        );

      default:
        return <InputField errors={errors} field={field} register={register} />;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer>
        <SampleButton
          type="button"
          onClick={() => {
            populateWithSample();
          }}
        >
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
                <Title>{title}</Title>
                <Button
                  onClick={() => {
                    router.push('/');
                  }}
                  variant="outline"
                >
                  Exit
                </Button>
              </Box>

              <Box css={{ width: '100%', maxWidth: '450px' }}>
                {stage !== Stage.BUSINESS && <BusinessSummary />}
                {stage === Stage.SECONDARY_OWNER && <AccountHolderSummary />}
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
                <Header>{header}</Header>

                {accountHolderFormFields.map((field) => {
                  return (
                    <FieldSet key={field.id}>{handleInputType(field)}</FieldSet>
                  );
                })}
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
                    handleBack();
                  }}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  disabled={!isValid}
                  isDisabled={!isValid}
                >
                  Continue
                </Button>
              </Box>
            </FramerBox>
          </AnimatePresence>
        </LeftPanel>
      </GridContainer>
    </Form>
  );
};

AccountHolderForm.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default AccountHolderForm;
