import { IField } from './field';

export interface IEmeaConsumer {
  id: string;
  css?: object;
  headerText: string;
  fields: Array<IField>;
}
