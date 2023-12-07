import { IFormFields } from '.';
import { ISelectorData } from './selector';

export interface IField {
  id: string;
  css?: object;
  styledLabel: {
    content: string;
  };
  input: {
    type?: string;
    placeholder?: string;
    register: keyof IFormFields;
    required?: boolean;
    defaultValue?: string;
    data?: Array<ISelectorData>;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
}
