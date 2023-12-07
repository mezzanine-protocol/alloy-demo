import { IIndividual } from '../types/formFields/individual';

export const individualFormFields: Array<IIndividual> = [
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
    },
  },
  {
    id: 'password',
    styledLabel: {
      content: 'Password',
    },
    input: {
      type: 'password',
      placeholder: 'Password',
      register: 'password',
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
];
