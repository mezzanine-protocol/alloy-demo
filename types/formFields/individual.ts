import { IFormFields } from '.';

export interface IIndividual {
  id: string;
  css?: object;
  styledLabel: {
    content: string;
  };
  input: {
    type: string;
    placeholder?: string;
    register: keyof IFormFields;
    required: boolean;
  };
}
