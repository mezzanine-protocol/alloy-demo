import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Text from '../text/Text';
import styles from './dropdownMenu.module.css';

const SettingsDropdownMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.IconButton} aria-label="Customise options">
          <Text
            style={{
              fontSize: 'var(--cl-font-size-2)',
              fontWeight: 'var(--cl-font-weight-regular)',
              lineHeight: 'var(--cl-font-size-2)',
            }}
          >
            Limelight Checking {`(...6452)`}
          </Text>
          <ChevronDownIcon className={styles.caretDownIcon} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.DropdownMenuContent}
          sideOffset={5}
        >
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            Limelight Savings {`(...7563)`}
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            Account 2
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            Account 3
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            Account 4
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SettingsDropdownMenu;
