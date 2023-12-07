import React, { useState, useEffect, useContext } from 'react';
import { faker } from '@faker-js/faker';
import PaymentPendingModal from './PaymentPendingModal';
import { User } from '../../../types/user';
import SendPaymentModalDialog from '../../modalDialog/SendPaymentModalDialog';
import SnackBarToast from '../../snackBarToast/SnackBarToast';
import {
  ConfigContext,
  DevModeContext,
  CompanyContext,
} from '../../../pages/_app';
import { ISendPaymentFields } from '../../../types/formFields';
import * as config from '../../../config.json';
import * as path from 'path';

type Recipient = {
  nameFirst: string;
  nameLast: string;
  accountNumber: string;
};

type ToastProps = {
  duration: number;
  title: string;
  type: string;
};

export const recipients: Recipient[] = [
  {
    nameFirst: faker.name.firstName(),
    nameLast: faker.name.lastName(),
    accountNumber: faker.finance.account(),
  },
  {
    nameFirst: faker.name.firstName(),
    nameLast: faker.name.lastName(),
    accountNumber: faker.finance.account(),
  },
  {
    nameFirst: faker.name.firstName(),
    nameLast: faker.name.lastName(),
    accountNumber: faker.finance.account(),
  },
];

export const recipientToString = (recipient: Recipient) => {
  if (!recipient) return 'Unknown Recipient';
  return `${recipient.nameFirst} ${
    recipient.nameLast
  } (...${recipient.accountNumber.substring(
    recipient.accountNumber.length - 4
  )})`;
};

export const toastProps: ToastProps = {
  duration: 5000,
  title: 'Failed to send payment',
  type: 'danger',
};

const SendPaymentModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [sendPaymentLoading, setSendPaymentLoading] = useState(false);
  const [showPaymentPendingModal, setShowPaymentPendingModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [user, setUser] = useState<User>();
  const { ...configContext } = React.useContext(ConfigContext);
  const { ...companyContext } = React.useContext(CompanyContext);
  const [workflowToken, setWorkflowToken] = useState('');
  const { apiCalls, setApiCalls } = useContext(DevModeContext);
  const [pendingPaymentData, setPendingPaymentData] =
    useState<ISendPaymentFields>();
  const apiBaseUrl = config.domain || 'https://api.alloy.co';

  const handleToast = () => setToast(!toast);

  useEffect(() => {
    if (configContext.transactionVerification) {
      setWorkflowToken(configContext.transactionVerification.workflow_token);
    }
  }, [configContext]);

  useEffect(() => {
    const retrievedUser = localStorage.getItem('user');
    if (retrievedUser) setUser(JSON.parse(retrievedUser));
  }, []);

  const handleAmount = (amount: string) => {
    const dollars = amount.split('.')[0];
    const cents = amount.split('.')[1];
    return dollars + (cents || '00');
  };

  const sendPayment = async (paymentData: ISendPaymentFields) => {
    const payload = {
      transaction_id: `${Math.floor(Math.random() * 10000)}`,
      transaction_date: paymentData.paymentDate,
      amount: parseInt('-' + handleAmount(paymentData.amount)),
      currency: 'USD',
      name_first: user?.firstName || 'Lorem',
      name_last: user?.lastName || 'Ipsum',
      is_approved: true,
      transaction_type: paymentData.paymentType,
      type_description: 'transfer',
      source: {
        external_account_id: `${
          user?.firstName || 'Lorem'
        }-external-account-id`,
        account_class: 'deposit',
        product_name: 'Deposit Account',
        name_on_card:
          user?.firstName || 'Lorem' + ' ' + user?.lastName || 'Ipsum',
        account_number_last4: '3541',
      },
      destination: {
        account_name: `${paymentData.recipient.split('/')[0]} Checking Account`,
        account_number: paymentData.recipient.split('/')[1],
        account_type: 'personal',
        product_name: 'Checking',
      },
      account_snapshot: {
        timestamp: paymentData.paymentDate,
        meta: {},
        details: {
          status_description: 'active',
          ach_push_limit: 500000,
          ach_pull_limit: 500000,
          name_first: user?.firstName || 'Lorem',
          name_last: user?.lastName || 'Ipsum',
          email_address: user?.email || 'lorem@ipsum.com',
          phone_number: user?.phoneNumber || '+15555555555',
          mailing_address_line1: user?.addressLine1 || '41 E. 11th St',
          mailing_address_line2: user?.addressLine2 || 'Suite 1408',
          mailing_address_city: user?.addressCity || 'New York',
          mailing_address_state: user?.addressState || 'NY',
          mailing_address_postal_code: user?.addressPostalCode || '10013',
          mailing_address_country_code: user?.addressCountryCode || 'US',
          birth_date: user?.birthDate || '1987-03-12',
          income: user?.income || '90000',
          document_ssn: user?.documentSsn || '111111110',
        },
        account_view: {
          account_balance: 1209334,
          date_last_activity: paymentData.paymentDate,
          is_good_standing: true,
          past_due_days: 0,
        },
      },
    };

    try {
      setSendPaymentLoading(true);
      const response = await fetch(
        '/api/evaluations/create?workflowToken=' + workflowToken,
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'alloy-external-entity-id': companyContext.entityToken || '',
          },
        }
      );

      const responseJson = await response.json();
      const outcome = responseJson?.summary?.outcome;
      setApiCalls([
        ...apiCalls,
        {
          request: JSON.stringify(
            {
              method: 'POST',
              url: path.join(apiBaseUrl, 'evaluations'),
              headers: {
                alloy_external_entity_id: companyContext.entityToken || '',
              },
              body: payload,
            },
            null,
            2
          ),
          response: JSON.stringify(responseJson, null, 2),
        },
      ]);

      if (outcome === 'High Risk Alert' || outcome === 'Compliance Alert') {
        setPendingPaymentData(paymentData);
        setShowPaymentPendingModal(true);
      }
    } catch (error) {
      toastProps.title = `Failed to send payment ${
        !!paymentData.recipient && `to ${paymentData.recipient.split('/')[0]}`
      }`;
      toastProps.duration = 2000;
      toastProps.type = 'danger';
      handleToast();
    }
    setSendPaymentLoading(false);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  if (showPaymentPendingModal) {
    setIsOpen(false);
    return (
      <PaymentPendingModal
        isOpen={showPaymentPendingModal}
        setIsOpen={setShowPaymentPendingModal}
        formValues={pendingPaymentData}
      />
    );
  }

  return (
    <div>
      <SendPaymentModalDialog
        open={isOpen}
        sendPaymentLoading={sendPaymentLoading}
        handleModalClose={handleModalClose}
        sendPayment={sendPayment}
        recipients={recipients}
      />
      {toast && (
        <SnackBarToast
          open={toast}
          setOpen={handleToast}
          duration={toastProps.duration}
          title={toastProps.title}
          type={toastProps.type}
        />
      )}
    </div>
  );
};

export default SendPaymentModal;
