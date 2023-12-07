import { IField } from '../types/formFields/field';
import { stateSelectorData } from './selector/state';

export const businessFormFields: Array<IField> = [
  {
    id: 'businessName',
    styledLabel: {
      content: 'Business Name',
    },
    input: {
      type: 'text',
      placeholder: 'Business Name',
      register: 'businessName',
      required: true,
    },
  },
  {
    id: 'businessFederalEin',
    styledLabel: {
      content: 'Business Federal EIN',
    },
    input: {
      type: 'text',
      placeholder: 'Business EIN',
      register: 'businessFederalEin',
      required: true,
    },
  },
  {
    id: 'addressStreet',
    styledLabel: {
      content: 'Business Street Address',
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
      data: stateSelectorData,
    },
  },
  {
    id: 'country',
    styledLabel: {
      content: 'Country',
    },
    input: {
      type: 'text',
      placeholder: 'United States of America',
      register: 'country',
      required: true,
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
];
