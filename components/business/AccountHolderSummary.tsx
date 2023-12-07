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

type AccountHolderData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  documentSsn: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressCity: string;
  addressState: string;
  addressPostalCode: string;
};

const defaultValue: AccountHolderData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  documentSsn: '',
  email: '',
  phoneNumber: '',
  addressLine1: '',
  addressCity: '',
  addressState: '',
  addressPostalCode: '',
};

const AccountHolderSummary = () => {
  const [accountHolderData, setAccountHolderData] =
    useState<AccountHolderData>(defaultValue);

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    addressLine1,
    addressCity,
    addressState,
    addressPostalCode,
  } = accountHolderData;

  useEffect(() => {
    const userObject = localStorage.getItem(Stage.PRIMARY_OWNER);
    if (!userObject) return;
    setAccountHolderData(JSON.parse(userObject));
  }, []);

  const fullAddress = `${addressLine1} ${addressCity}, ${addressState}, ${addressPostalCode}`;

  return (
    <Flex css={{ flexDirection: 'column' }}>
      <Header>Primary Account Holder</Header>
      <Flex
        css={{
          justifyContent: 'flex-start',
          gap: 56,
          marginBottom: '$5',
          marginTop: '$3',
        }}
      >
        <SummaryFieldSet>
          <SummaryLabel>Primary Owner</SummaryLabel>
          <SummaryField>{`${firstName} ${lastName}`}</SummaryField>
        </SummaryFieldSet>

        <SummaryFieldSet>
          <SummaryLabel>Address</SummaryLabel>
          <SummaryField>{fullAddress}</SummaryField>
        </SummaryFieldSet>
      </Flex>

      <Flex css={{ justifyContent: 'flex-start', gap: 56, marginBottom: 24 }}>
        <SummaryFieldSet>
          <SummaryLabel>Email</SummaryLabel>
          <SummaryField>{email}</SummaryField>
        </SummaryFieldSet>

        <SummaryFieldSet>
          <SummaryLabel>Phone</SummaryLabel>
          <SummaryField>{phoneNumber}</SummaryField>
        </SummaryFieldSet>
      </Flex>

      <Line />
    </Flex>
  );
};

export default AccountHolderSummary;
