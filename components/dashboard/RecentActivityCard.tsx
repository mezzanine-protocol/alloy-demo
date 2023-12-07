import React from 'react';
import Text from '../text/Text';
import SettingsDropdownMenu from '../dropdownMenu/SettingsDropdownMenu';
import Table from '../table/Table';
import CardHeader from './CardHeader';
import StyledCard from './styled/StyledCard';

const RecentActivityCard = () => {
  return (
    <StyledCard header={<CardHeader title="Recent Activity" />}>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--cl-space-3)',
          }}
        >
          <Text
            style={{
              fontSize: '14px',
              color: '#191919',
              fontWeight: 'var(--cl-font-weight-regular)',
            }}
          >
            Accounts
          </Text>
          <SettingsDropdownMenu />
        </div>
        <RecentActivityTable />
      </div>
    </StyledCard>
  );
};

const RecentActivityTable = () => {
  return <Table />;
};

export default RecentActivityCard;
