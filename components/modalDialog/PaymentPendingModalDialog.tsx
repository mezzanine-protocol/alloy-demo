import * as Dialog from '@radix-ui/react-dialog';
import { ExclamationTriangleIcon, Cross1Icon } from '@radix-ui/react-icons';
import Button from '../button/Button';
import { ButtonVariant } from '../button/type';
import styles from './modal.module.css';

interface Props {
  open: boolean;
  handleModalClose: () => void;
  formValues: {
    paymentFrom?: string;
    paymentTo?: string;
    amount?: string;
    paymentDate?: string;
    paymentStatus?: string;
    memo?: string;
  };
}

const PaymentPendingModalDialog: React.FC<Props> = ({
  open,
  handleModalClose,
  formValues: {
    paymentFrom,
    paymentTo,
    amount,
    paymentDate,
    paymentStatus,
    memo,
  },
}) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <div className={styles.ModalContainer}>
          <Dialog.Content
            className={styles.DialogContent}
            onEscapeKeyDown={handleModalClose}
          >
            <Dialog.Title className={styles.DialogTitle}>
              <div className={styles.ModalTitleContainer}>
                <ExclamationTriangleIcon className={styles.TriangleIcon} />
                Payment Pending Review
              </div>
            </Dialog.Title>
            <Dialog.Description
              className={styles.DialogDescription}
            ></Dialog.Description>
            <div className={styles.BoxContainer}>
              <div className={styles.ItemContainer}>
                <div className={styles.Item}>
                  <p className={styles.ItemTitle}>Payment From</p>
                  <p className={styles.ItemText}>
                    {paymentFrom ? paymentFrom : 'Limelight Checking (...6452)'}
                  </p>
                </div>
              </div>
              <div className={styles.ItemContainer}>
                <div className={styles.Item}>
                  <p className={styles.ItemTitle}>Payment To</p>
                  <p className={styles.ItemText}>
                    {paymentTo ? paymentTo : 'Arlo Hill (...1682)'}
                  </p>
                </div>
              </div>
              <div className={styles.ItemContainer}>
                <div className={styles.Item}>
                  <p className={styles.ItemTitle}>Amount</p>
                  <p className={styles.ItemText}>
                    {amount ? amount : '$6000.00'}
                  </p>
                </div>
              </div>
              <div className={styles.ItemContainer}>
                <div className={styles.Item}>
                  <p className={styles.ItemTitle}>Payment Date</p>
                  <p className={styles.ItemText}>
                    {paymentDate ? paymentDate : '2023-02-03'}
                  </p>
                </div>
              </div>
              <div className={styles.ItemContainer}>
                <div className={styles.Item}>
                  <p className={styles.ItemTitle}>Payment Status</p>
                  <p className={styles.ItemText}>
                    {paymentStatus ? paymentStatus : 'Pending Review'}
                  </p>
                </div>
              </div>
              <div className={styles.ItemContainer}>
                <div className={styles.Item}>
                  <p className={styles.ItemTitle}>Memo</p>
                  <p className={styles.ItemText}>{memo ? memo : 'None'}</p>
                </div>
              </div>
            </div>
            <div>
              <p className={styles.TransactionMessage}>
                This transaction is under review by a member of our team. Please
                allow 24-48 hours for us to review and update the status of this
                payment.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 25,
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant={ButtonVariant.primary}
                onClick={handleModalClose}
              >
                Close
              </Button>
            </div>
            <Dialog.Close asChild>
              <button
                className={styles.CrossIconButton}
                aria-label="Close"
                onClick={handleModalClose}
              >
                <Cross1Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PaymentPendingModalDialog;
