import { IField } from './field';

export interface IVerification {
  id: string;
  css?: object;
  headerText: string;
  fields: Array<IField>;
}
