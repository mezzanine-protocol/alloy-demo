import { useState, useEffect } from 'react';
import { Stage } from '../../types';
import {
  Flex,
  Line,
  SummaryLabel,
  SummaryField,
  SummaryFieldSet,
  Header,
} from './style';

type BusinessData = {
  businessName: string;
  businessFederalEin: string;
  country: string;
  addressLine1: string;
  addressCity: string;
  addressState: string;
  addressPostalCode: string;
};

const defaultValue: BusinessData = {
  businessName: '',
  businessFederalEin: '',
  country: '',
  addressLine1: '',
  addressCity: '',
  addressState: '',
  addressPostalCode: '',
};

const EmeaBusinessSummary = () => {
  const [businessData, setBusinessData] = useState<BusinessData>(defaultValue);

  const {
    businessName,
    businessFederalEin,
    country,
    addressLine1,
    addressCity,
    addressState,
    addressPostalCode,
  } = businessData;

  useEffect(() => {
    const userObject = localStorage.getItem(Stage.BUSINESS);
    if (!userObject) return;
    setBusinessData(JSON.parse(userObject));
  }, []);

  const fullAddress = `${addressLine1} ${addressCity}, ${addressState}, ${addressPostalCode}, ${country}`;

  return (
    <Flex
      css={{
        flexDirection: 'column',
        marginTop: '$6',
        justifyContent: 'center',
      }}
    >
      <Header>Business Info</Header>
      <Flex
        css={{
          justifyContent: 'flex-start',
          gap: 56,
          marginBottom: '$5',
          marginTop: '$3',
        }}
      >
        <SummaryFieldSet>
          <SummaryLabel>Business Name</SummaryLabel>
          <SummaryField>{businessName}</SummaryField>
        </SummaryFieldSet>

        <SummaryFieldSet>
          <SummaryLabel>Business Federal EIN</SummaryLabel>
          <SummaryField>{businessFederalEin}</SummaryField>
        </SummaryFieldSet>
      </Flex>

      <Flex>
        <SummaryFieldSet>
          <SummaryLabel>Business Address</SummaryLabel>
          <SummaryField>{fullAddress}</SummaryField>
        </SummaryFieldSet>
      </Flex>

      <Line />
    </Flex>
  );
};

export default EmeaBusinessSummary;
