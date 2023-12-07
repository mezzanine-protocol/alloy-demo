import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import styles from './select.module.css';

interface Props {
  handlePaymentType: (value: string) => void;
}
interface SelectItemProps {
  children?: React.ReactNode;
  value: string;
  className?: string;
}

const paymentTypes = ['ACH', 'Wire', 'Check', 'Cash', 'P2P'];

const PaymentTypeSelect: React.FC<Props> = ({ handlePaymentType }) => {
  const [value, setValue] = useState('Select Payment Type...');

  const handleValueChange = (value: string) => {
    setValue(value);
    handlePaymentType(value);
  };

  return (
    <Select.Root value={value} onValueChange={handleValueChange}>
      <Select.Trigger className={styles.SelectTrigger}>
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon className={styles.SelectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.SelectContent}>
          <Select.ScrollUpButton className={styles.SelectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={styles.SelectViewport}>
            <Select.Group>
              {paymentTypes.map((paymentType) => (
                <SelectItem key={paymentType} value={paymentType}>
                  {paymentType}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.SelectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }: SelectItemProps, forwardedRef) => {
    return (
      <Select.Item className={styles.SelectItem} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.SelectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

PaymentTypeSelect.displayName = 'PaymentTypeSelect';
SelectItem.displayName = 'SelectItem';

export default PaymentTypeSelect;
