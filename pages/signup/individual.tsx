import { ReactElement } from 'react';
import { Button, Input, StyledLabel } from '../../components/styles';
import { useRouter } from 'next/router';
import FormLayout from '../../components/layout/formPage';
import { faker } from '@faker-js/faker';
import { MainContainer, FieldSet, Box, Title } from '../../styles/signup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { individualFormFields } from '../../formFields/individual';
import { IIndividual } from '../../types/formFields/individual';
import { IFormFields } from '../../types/formFields';

const Individual = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, formState, trigger } =
    useForm<IFormFields>({ mode: 'all' });
  const onSubmit: SubmitHandler<IFormFields> = (data) => handleFormSubmit(data);

  const populateWithSample = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    setValue('firstName', firstName);
    setValue('lastName', lastName);
    setValue(
      'email',
      faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase())
    );
    setValue('password', 'something');
    setValue('checkbox', true);
    trigger();
  };

  const handleFormSubmit = (data: IFormFields) => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      })
    );
    router.push('/signup/verification');
  };

  const handleInputType = (field: IIndividual) => {
    switch (field.input.type) {
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
        return (
          <>
            <StyledLabel htmlFor={field.id}>
              {field.styledLabel.content}
            </StyledLabel>
            <Input
              id={field.id}
              type={field.input.type}
              placeholder={field.input.placeholder}
              {...register(field.input.register, {
                required: field.input.required,
              })}
            ></Input>
          </>
        );
    }
  };

  return (
    <MainContainer onSubmit={handleSubmit(onSubmit)}>
      <button
        type="button"
        style={{
          position: 'absolute',
          bottom: '52px',
          left: '24px',
          zIndex: 100,
        }}
        onClick={() => {
          populateWithSample();
        }}
      >
        sample data
      </button>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '$4',
          padding: '$7',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title> Create an account</Title>
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
            flexDirection: 'column',
            rowGap: '$4',
            width: '480px',
            maxWidth: '480px',
          }}
        >
          {individualFormFields.map((field) => {
            return (
              <FieldSet key={field.id} css={{ ...field.css }}>
                {handleInputType(field)}
              </FieldSet>
            );
          })}
        </Box>
        <Box
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '$4',
            width: '100%',
          }}
        >
          <Button
            variant={'accent'}
            type="submit"
            disabled={!formState.isValid}
            isDisabled={!formState.isValid}
          >
            Create account
          </Button>
        </Box>
      </Box>
    </MainContainer>
  );
};

Individual.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default Individual;
