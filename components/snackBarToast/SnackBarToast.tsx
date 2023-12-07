import React from 'react';
import * as Toast from '@radix-ui/react-toast';
import styles from './toast.module.css';

interface Props {
  open: boolean;
  setOpen: () => void;
  duration: number;
  title: string;
  type: string;
}

const SnackBarToast: React.FC<Props> = ({
  open,
  setOpen,
  duration,
  title,
  type,
}) => {
  return (
    <Toast.Provider swipeDirection="up" duration={duration}>
      <Toast.Root
        className={styles.ToastRoot}
        open={open}
        onOpenChange={setOpen}
      >
        {type === 'danger' ? (
          <Toast.Title className={styles.ToastTitle} style={{ color: 'red' }}>
            {title}
          </Toast.Title>
        ) : (
          <Toast.Title className={styles.ToastTitle} style={{ color: 'green' }}>
            {title}
          </Toast.Title>
        )}
        <Toast.Action
          className={styles.ToastAction}
          asChild
          altText="undo"
        ></Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles.ToastViewport} />
    </Toast.Provider>
  );
};

export default SnackBarToast;
