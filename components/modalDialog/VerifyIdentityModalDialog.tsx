import * as Dialog from '@radix-ui/react-dialog';
import { ExclamationTriangleIcon, Cross1Icon } from '@radix-ui/react-icons';
import Button from '../button/Button';
import { ButtonVariant } from '../button/type';
import Spinner from '../spinner/Spinner';
import styles from './modal.module.css';

interface Props {
  open: boolean;
  handleModalClose: () => void;
  isProveLoading: boolean;
  openProveModal: () => void;
}

const VerifyIdentityModalDialog: React.FC<Props> = ({
  open,
  handleModalClose,
  isProveLoading,
  openProveModal,
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
                Verify Your Identity
              </div>
            </Dialog.Title>
            <Dialog.Description
              className={styles.DialogDescription}
            ></Dialog.Description>
            <div>
              <p className={styles.TransactionMessage}>
                In order to make this change you will need to verify your
                identity. This process helps us ensure that we are meeting the
                compliance standards and provide the best experience tailored to
                you.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 25,
                justifyContent: 'flex-end',
              }}
            >
              <div className={styles.ButtonsContainer}>
                <button
                  className={styles.CancelButton}
                  onClick={handleModalClose}
                  disabled={isProveLoading}
                >
                  Cancel
                </button>
                <Button
                  variant={ButtonVariant.primary}
                  onClick={openProveModal}
                  disabled={isProveLoading}
                  style={isProveLoading ? { opacity: '0.5' } : {}}
                >
                  <div className={styles.ContinueButton}>
                    {isProveLoading && <Spinner />}
                    Continue
                  </div>
                </Button>
              </div>
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

export default VerifyIdentityModalDialog;
