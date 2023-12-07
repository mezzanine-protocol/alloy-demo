import { IField } from '../types/formFields/field';
import { euCountriesData } from './selector/euCountries';

export const emeaBusinessFormFields: Array<IField> = [
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
    id: 'businessId',
    styledLabel: {
      content: 'Business ID number',
    },
    input: {
      type: 'text',
      placeholder: 'Business ID',
      register: 'businessId',
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
      content: 'State/County',
    },
    input: {
      type: 'text',
      placeholder: 'State/County',
      register: 'addressState',
      required: true,
    },
  },
  {
    id: 'addressCountry',
    styledLabel: {
      content: 'Country',
    },
    input: {
      type: 'selector',
      defaultValue: euCountriesData[0].value,
      register: 'addressCountry',
      required: true,
      data: euCountriesData,
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
