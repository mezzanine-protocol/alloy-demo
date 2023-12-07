import { IEmeaConsumer } from '../types/formFields/emeaConsumer';
import { euCountriesData } from './selector/euCountries';

export const emeaConsumerFormFields: Array<IEmeaConsumer> = [
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
          placeholder: 'dd/mm/yyyy',
          register: 'birthDate',
          required: true,
        },
      },
      {
        id: 'phoneNumber',
        styledLabel: {
          content: 'Phone number',
        },
        input: {
          type: 'tel',
          placeholder: '+44 20 7234 3456',
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
          placeholder: '123 Example Street',
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
          placeholder: 'City',
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
          placeholder: 'XXXX XXX',
          register: 'addressPostalCode',
          required: true,
        },
      },
    ],
  },
];
