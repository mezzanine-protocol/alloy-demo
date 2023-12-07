import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import Text from '../text/Text';
import { FontSize } from '../text/type';
import StyledHelpSupportCard from './styled/StyledHelpSupportCard';
import styles from './dashboard.module.css';

const HelpSupportCard = () => (
  <StyledHelpSupportCard>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--cl-space-5)',
        }}
      >
        <Text size={FontSize.heading} weight={600}>
          Help & Support
        </Text>
        <Text
          style={{
            fontSize: 'var(--cl-font-size-2)',
            lineHeight: 'var(--cl-font-size-3)',
          }}
        >
          Get help replacing cards, reporting fraud, ordering checks, exploring
          payment assistance, contacting us and more
        </Text>
      </div>
      <ChevronRightIcon className={styles.chevronRightIcon} />
    </div>
  </StyledHelpSupportCard>
);

export default HelpSupportCard;
