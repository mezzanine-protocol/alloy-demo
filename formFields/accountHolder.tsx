import { IField } from '../types/formFields/field';
import { stateSelectorData } from './selector/state';

export const accountHolderFormFields: Array<IField> = [
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
      content: 'Last name',
    },
    input: {
      type: 'text',
      placeholder: 'Last name',
      register: 'lastName',
      required: true,
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
    id: 'phoneNumber',
    styledLabel: {
      content: 'Phone number',
    },
    input: {
      type: 'tel',
      placeholder: '18189399028',
      register: 'phoneNumber',
      required: true,
      minLength: {
        value: 10,
        message: 'Invalid phone number',
      },
    },
  },
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
  {
    id: 'checkbox',
    css: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: '$2',
    },
    styledLabel: {
      content: 'This account will have multiple owners',
    },
    input: {
      type: 'checkbox',
      register: 'checkbox',
      required: true,
    },
  },
];
