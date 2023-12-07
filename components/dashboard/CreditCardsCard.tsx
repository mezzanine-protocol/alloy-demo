import React from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import { ButtonSize, ButtonVariant } from '../button/type';
import Text from '../text/Text';
import { FontSize } from '../text/type';
import CardHeader from './CardHeader';
import StyledCard from './styled/StyledCard';
import cardTiny from '../../public/cardTiny.jpg';

const CreditCardsCard = () => (
  <StyledCard header={<CardHeader title="Credit Cards" />}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <a href="#" style={{ fontSize: 'var(--cl-font-size-2)' }}>
        Limelight Credit Card {`(...6452)`}
      </a>
      <Button size={ButtonSize.small} variant={ButtonVariant.outline}>
        Pay Card
      </Button>
    </div>
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
          $802.42
        </Text>
        <Text size={FontSize.body}>Current Balance</Text>
        <a href="#" style={{ fontSize: 'var(--cl-font-size-1)' }}>
          Details
        </a>
      </div>
      <Image src={cardTiny} alt="Credit Card" />
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 'var(--cl-space-8)',
      }}
    >
      <div>
        <Text size={FontSize.subtitle} weight={600}>
          Feb 1, 2023
        </Text>
        <Text style={{ color: 'var(--cl-gray-600)', fontSize: '10px' }}>
          Next payment due
        </Text>
      </div>
      <div>
        <Text size={FontSize.subtitle} weight={600}>
          $40.00
        </Text>
        <Text style={{ color: 'var(--cl-gray-600)', fontSize: '10px' }}>
          Minimum payment due
        </Text>
      </div>
      <div>
        <Text size={FontSize.subtitle} weight={600}>
          $826.15
        </Text>
        <Text style={{ color: 'var(--cl-gray-600)', fontSize: '10px' }}>
          Last statement balance
        </Text>
      </div>
      <div>
        <Text size={FontSize.subtitle} weight={600}>
          $15,197.64
        </Text>
        <Text style={{ color: 'var(--cl-gray-600)', fontSize: '10px' }}>
          Available Credit
        </Text>
      </div>
    </div>
  </StyledCard>
);

export default CreditCardsCard;
