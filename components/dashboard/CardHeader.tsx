import React from 'react';
import Button from '../button/Button';
import { ButtonSize, ButtonVariant, IconName } from '../button/type';
import Text from '../text/Text';
import { FontSize } from '../text/type';

const CardHeader = ({ title }: { title: string }) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Text size={FontSize.heading} weight={600}>
      {title}
    </Text>
    <Button
      icon={IconName.More}
      size={ButtonSize.small}
      variant={ButtonVariant.tertiary}
    />
  </div>
);

export default CardHeader;
