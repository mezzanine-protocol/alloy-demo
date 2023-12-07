export interface IFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  checkbox: boolean;
  birthDate: string;
  ssn: string;
  phoneNumber: string;
  income: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressCounty: string;
  addressCountry: string;
  addressPostalCode: string;
  businessName: string;
  businessFederalEin: string;
  businessId: string;
  country: string;
}

export interface ISendPaymentFields {
  recipient: string;
  paymentType: string;
  amount: string;
  paymentDate: string;
  memo: string;
}

export interface IConfigContext {
  sdk_keys: [
    {
      key: string;
    }
  ];
  journeys: [
    {
      journey_token: string;
      journey_type: string;
      journey_name: string;
    }
  ];
  workflows: [
    {
      workflow_token: string;
      workflow_type: string;
      workflow_name: string;
    }
  ];
  api_credentials: {
    workflow_token: string;
  };
  domain: string;
}

export type TWorkflow = {
  workflow_token: string;
  workflow_type: string;
  workflow_name: string;
};

export type TJourney = {
  journey_token?: string;
  journey_type?: string;
  journey_name?: string;
};
