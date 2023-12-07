import React from 'react';
import Button from '../button/Button';
import { ButtonSize, ButtonVariant } from '../button/type';
import Text from '../text/Text';
import { FontSize } from '../text/type';
import CardHeader from './CardHeader';
import StyledCard from './styled/StyledCard';
import { ConfigContext } from '../../pages/_app';

const DepositAccountsCard = ({
  setIsPaymentModalOpen,
}: {
  setIsPaymentModalOpen: (isOpen: boolean) => void;
}) => {
  const { ...configContext } = React.useContext(ConfigContext);

  return (
    <StyledCard header={<CardHeader title="Deposit Accounts" />}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ fontSize: 'var(--cl-font-size-2)' }}>
          Limelight Checking {`(...6452)`}
        </a>
        <div style={{ display: 'flex', gap: 'var(--cl-space-4)' }}>
          <Button
            size={ButtonSize.small}
            variant={ButtonVariant.outline}
            onClick={() => {
              setIsPaymentModalOpen(true);
            }}
            style={{
              padding: '0 var(--cl-space-3)',
              height: 'var(--cl-line-height-4)',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'fit-content',
              whiteSpace: 'nowrap',
              lineHeight: 'var(--cl-line-height-1)',
            }}
            disabled={!configContext.isTransactionWorkflowActive}
          >
            Send Payment
          </Button>
          <Button
            size={ButtonSize.small}
            variant={ButtonVariant.outline}
            style={{
              padding: '0 var(--cl-space-3)',
              height: 'var(--cl-line-height-4)',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'fit-content',
              whiteSpace: 'nowrap',
              lineHeight: 'var(--cl-line-height-1)',
            }}
          >
            Transfer Funds
          </Button>
        </div>
      </div>
      {!configContext.isTransactionWorkflowActive && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              marginBottom: 'var(--cl-space-1)',
              marginTop: 'var(--cl-space-2)',
              fontSize: 'var(--cl-font-size-1)',
              lineHeight: 'var(--cl-font-size-4)',
              maxWidth: '900px',
              color: '#E00',
            }}
          >
            (Transaction Verification journey is not selected, please select the
            journey in the settings modal and try again)
          </Text>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--cl-space-5)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--cl-space-1)',
          }}
        >
          <Text size={FontSize.title} weight={500}>
            $21,641.00
          </Text>
          <Text size={FontSize.body}>Available Balance</Text>
        </div>
        <div style={{ display: 'flex', gap: 'var(--cl-space-5)' }}>
          <div>
            <Text
              size={FontSize.subtitle}
              weight={600}
              style={{ marginBottom: 'var(--cl-space-1)' }}
            >
              +$0.00
            </Text>
            <Text style={{ color: 'var(--cl-gray-600)', fontSize: '10px' }}>
              Deposits this month
            </Text>
          </div>
          <div>
            <Text
              size={FontSize.subtitle}
              weight={600}
              style={{ marginBottom: 'var(--cl-space-1)' }}
            >
              -$13,208.98
            </Text>
            <Text style={{ color: 'var(--cl-gray-600)', fontSize: '10px' }}>
              Withdrawals this month
            </Text>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default DepositAccountsCard;
