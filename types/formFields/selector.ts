import { UseFormRegister } from 'react-hook-form';
import { IFormFields } from '.';

export interface ISelectorData {
  value: string;
  content: string;
}

export interface ICountryData {
  value: string;
  content: string;
  locale?: string;
  stateOrCounty?: string;
}

export interface ISelectorProps {
  id?: string;
  defaultValue?: string;
  register: UseFormRegister<IFormFields>;
  required?: boolean;
  data?: Array<ISelectorData>;
  value: keyof IFormFields;
}
