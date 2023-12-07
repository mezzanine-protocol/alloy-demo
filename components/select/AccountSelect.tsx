import React from 'react';
import * as Select from '@radix-ui/react-select';
// import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import styles from './select.module.css';

// type BaseProps = React.ComponentPropsWithoutRef<'select'>;

interface Props {
  recipients?: Array<{
    nameFirst: string;
    nameLast: string;
    accountNumber: string;
  }>;
}

interface SelectItemProps {
  children?: React.ReactNode;
  value: string;
  className?: string;
}

const AccountSelect: React.FC<Props> = ({ recipients }) => {
  return (
    <Select.Root>
      <Select.Trigger className={styles.SelectTrigger} aria-label="Food">
        <Select.Value placeholder="Select account..." />
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
              {recipients?.map((recipient) => (
                <SelectItem
                  key={recipient.accountNumber}
                  value={recipient.accountNumber}
                >
                  {`${recipient.nameFirst} ${
                    recipient.nameLast
                  } (...${recipient.accountNumber.substring(4)})`}
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

AccountSelect.displayName = 'AccountSelect';
SelectItem.displayName = 'SelectItem';

export default AccountSelect;
