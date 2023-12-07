import React from 'react';
import Button from '../button/Button';
import { ButtonVariant } from '../button/type';
import Text from '../text/Text';
import CardHeader from './CardHeader';
import StyledCard from './styled/StyledCard';
import { useRouter } from 'next/router';

const ExternalAccountsCard = () => {
  const router = useRouter();

  return (
    <StyledCard header={<CardHeader title="External Accounts" />}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--cl-space-8)',
          padding: 'var(--cl-space-6) var(--cl-space-7)',
        }}
      >
        <Text
          style={{
            fontSize: '14px',
            lineHeight: 'var(--cl-font-size-3)',
          }}
        >
          Link your external accounts to better organize your money, budget and
          plan for the future.
        </Text>
        <Button
          variant={ButtonVariant.primary}
          onClick={() => {
            router.push('/accountLinking');
          }}
        >
          Link an Account
        </Button>
      </div>
    </StyledCard>
  );
};

export default ExternalAccountsCard;
