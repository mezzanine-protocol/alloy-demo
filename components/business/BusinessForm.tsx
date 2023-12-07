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
} from './style';
import { IFormFields } from '../../types/formFields';
import { useForm, SubmitHandler } from 'react-hook-form';
import { businessFormFields } from '../../formFields/business';
import { IField } from '../../types/formFields/field';
import DevModeSwitch from '../switch/DevModeSwitch';

type Props = {
  stage: Stage;
  title: string;
  header: string;
  populate: boolean;
  handleBack: () => void;
  handleNext: () => void;
};

const BusinessForm = ({
  stage,
  title,
  header,
  populate,
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

  const handleFormSubmit = async (data: IFormFields) => {
    localStorage.setItem(
      stage,
      JSON.stringify({
        businessName: data.businessName,
        businessFederalEin: data.businessFederalEin,
        country: data.country,
        addressLine1: data.addressStreet,
        addressCity: data.addressCity,
        addressState: data.addressState,
        addressPostalCode: data.addressPostalCode,
      })
    );

    handleNext();
    depopulateFields();
  };

  const populateWithLocalStorage = useCallback(() => {
    const userObject = localStorage.getItem(stage);

    if (!userObject) return;

    const {
      businessName = '',
      businessFederalEin = '',
      country = '',
      addressLine1 = '',
      addressCity = '',
      addressState = '',
      addressPostalCode = '',
    } = JSON.parse(userObject);

    setValue('businessName', businessName);
    setValue('businessFederalEin', businessFederalEin);
    setValue('addressStreet', addressLine1);
    setValue('addressCity', addressCity);
    setValue('addressState', addressState);
    setValue('country', country);
    setValue('addressPostalCode', addressPostalCode);
    trigger();
  }, [stage, setValue, trigger]);

  useEffect(() => {
    if (!populate) return;
    populateWithLocalStorage();
  }, [populate, populateWithLocalStorage]);

  const populateWithSample = () => {
    setValue('businessName', faker.company.name());
    setValue('businessFederalEin', faker.random.numeric(9).toString());
    setValue('addressStreet', faker.address.streetAddress());
    setValue('addressCity', faker.address.city());
    setValue('addressState', faker.address.stateAbbr());
    setValue('country', 'United States of America');
    setValue('addressPostalCode', faker.random.numeric(5).toString());
    trigger();
  };

  const depopulateFields = () => {
    setValue('businessName', '');
    setValue('businessFederalEin', '');
    setValue('addressStreet', '');
    setValue('addressCity', '');
    setValue('addressState', '');
    setValue('country', '');
    setValue('addressPostalCode', '');
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
                {businessFormFields.map((field) => {
                  return (
                    <FieldSet key={field.id}>{handleInputType(field)}</FieldSet>
                  );
                })}
              </Box>
              <Box
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                  gap: '$2',
                }}
              >
                <Button
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

BusinessForm.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default BusinessForm;
