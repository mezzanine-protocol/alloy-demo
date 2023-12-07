import { IVerification } from '../types/formFields/verification';
import { stateSelectorData } from './selector/state';

export const verificationFormFields: Array<IVerification> = [
  {
    id: 'personalInfo',
    headerText: 'Personal Info',
    fields: [
      {
        id: 'firstName',
        styledLabel: {
          content: 'First name',
        },
        input: {
          type: 'text',
          placeholder: 'First name',
          register: 'firstName',
          required: true,
        },
      },
      {
        id: 'lastName',
        styledLabel: {
          content: 'Last Name',
        },
        input: {
          type: 'text',
          placeholder: 'Last Name',
          register: 'lastName',
          required: true,
        },
      },
      {
        id: 'email',
        styledLabel: {
          content: 'Email',
        },
        input: {
          type: 'email',
          placeholder: 'Email',
          register: 'email',
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
      },
      {
        id: 'birthDate',
        styledLabel: {
          content: 'Date of Birth',
        },
        input: {
          type: 'date',
          placeholder: '12/16/1994',
          register: 'birthDate',
          required: true,
        },
      },
      {
        id: 'ssn',
        styledLabel: {
          content: 'Social Security Number',
        },
        input: {
          type: 'tel',
          placeholder: '111111111',
          register: 'ssn',
          required: true,
          pattern: {
            value: /^[0-9]*$/,
            message: 'Invalid social security number',
          },
          minLength: {
            value: 9,
            message: 'Invalid social security number',
          },
          maxLength: {
            value: 9,
            message: 'Invalid social security number',
          },
        },
      },
      {
        id: 'phoneNumber',
        styledLabel: {
          content: 'Phone number',
        },
        input: {
          type: 'tel',
          placeholder: '99999999999',
          register: 'phoneNumber',
          required: true,
          minLength: {
            value: 10,
            message: 'Invalid phone number',
          },
        },
      },
      {
        id: 'income',
        styledLabel: {
          content: 'Income',
        },
        input: {
          type: 'number',
          placeholder: '72000',
          register: 'income',
          required: true,
        },
      },
      {
        id: 'checkbox',
        css: {
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: '$2',
        },
        styledLabel: {
          content: 'I certify that I am 18 years of age or older.',
        },
        input: {
          type: 'checkbox',
          register: 'checkbox',
          required: true,
        },
      },
    ],
  },
  {
    id: 'address',
    css: {
      marginTop: '$2',
    },
    headerText: 'Address',
    fields: [
      {
        id: 'addressStreet',
        styledLabel: {
          content: 'Street Address',
        },
        input: {
          type: 'text',
          placeholder: '271 icon way',
          register: 'addressStreet',
          required: true,
        },
      },
      {
        id: 'addressCity',
        styledLabel: {
          content: 'City',
        },
        input: {
          type: 'text',
          placeholder: 'New York',
          register: 'addressCity',
          required: true,
        },
      },
      {
        id: 'addressState',
        styledLabel: {
          content: 'State',
        },
        input: {
          type: 'selector',
          defaultValue: 'NY',
          register: 'addressState',
          required: true,
          data: stateSelectorData,
        },
      },
      {
        id: 'addressPostalCode',
        styledLabel: {
          content: 'Postal Code',
        },
        input: {
          type: 'text',
          placeholder: '10003',
          register: 'addressPostalCode',
          required: true,
        },
      },
    ],
  },
];
