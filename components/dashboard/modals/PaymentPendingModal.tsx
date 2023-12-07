import React from 'react';
import PaymentPendingModalDialog from '../../modalDialog/PaymentPendingModalDialog';
import { ISendPaymentFields } from '../../../types/formFields';

const SendPaymentModal = ({
  isOpen,
  setIsOpen,
  formValues,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  formValues: ISendPaymentFields | undefined;
}) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleAmount = (amount: string | undefined) => {
    const dollars = amount?.split('.')[0];
    const cents = amount?.split('.')[1];
    return '$' + dollars + '.' + (cents || '00');
  };

  return (
    <PaymentPendingModalDialog
      open={isOpen}
      handleModalClose={handleModalClose}
      formValues={{
        paymentFrom: 'Limelight Checking (...6452)',
        paymentTo: formValues?.recipient.split('/')[0],
        amount: handleAmount(formValues?.amount),
        paymentDate: formValues?.paymentDate,
        memo: formValues?.memo,
      }}
    />
  );
};

export default SendPaymentModal;
