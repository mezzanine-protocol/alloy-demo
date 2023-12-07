import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon, Cross1Icon } from '@radix-ui/react-icons';
import { Input } from '../styles';
import Button from '../button/Button';
import { ButtonVariant } from '../button/type';
import Spinner from '../spinner/Spinner';
import styles from './modal.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ISendPaymentFields } from '../../types/formFields';
import { BoxFlex, StyledSelect } from '../styles';

interface Props {
  open: boolean;
  sendPaymentLoading?: boolean;
  handleModalClose: () => void;
  sendPayment: (paymentData: ISendPaymentFields) => void;
  recipients?: Array<{
    nameFirst: string;
    nameLast: string;
    accountNumber: string;
  }>;
}

const SendPaymentModalDialog: React.FC<Props> = ({
  open,
  sendPaymentLoading,
  handleModalClose,
  sendPayment,
  recipients,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ISendPaymentFields>({ mode: 'all' });
  const onSubmit: SubmitHandler<ISendPaymentFields> = (data) =>
    sendPayment(data);
  const paymentTypes = ['ACH', 'Wire', 'Check', 'Cash', 'P2P'];

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <form
          className={styles.ModalContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Dialog.Content
            className={styles.DialogContent}
            onEscapeKeyDown={handleModalClose}
          >
            <Dialog.Title className={styles.DialogTitle}>
              Send Payment
            </Dialog.Title>
            <Dialog.Description
              className={styles.DialogDescription}
            ></Dialog.Description>
            <div className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="selectAccount">
                <p className={styles.LabelText}>Recipient</p>
              </label>
              <BoxFlex
                css={{
                  position: 'relative',
                }}
              >
                <StyledSelect {...register('recipient', { required: true })}>
                  <option disabled selected>
                    Select account...
                  </option>
                  {recipients?.map((recipient) => (
                    <option
                      key={recipient.accountNumber}
                      value={`${recipient.nameFirst} ${recipient.nameLast}/${recipient.accountNumber}`}
                    >
                      {`${recipient.nameFirst} ${
                        recipient.nameLast
                      } (...${recipient.accountNumber.substring(4)})`}
                    </option>
                  ))}
                </StyledSelect>
                <BoxFlex css={{ position: 'absolute', right: 12, top: 16 }}>
                  {' '}
                  <CaretDownIcon />
                </BoxFlex>
              </BoxFlex>
              <p className={styles.InputDescription}>
                {"Don't see your Recipient on the list?"}
                <a href="#" style={{ fontSize: '12px' }}>
                  {' '}
                  Add a recipient to your list
                </a>
              </p>
              <label className={styles.Label} htmlFor="selectPaymentType">
                <p className={styles.LabelText}>Payment Type</p>
              </label>
              <BoxFlex
                css={{
                  position: 'relative',
                }}
              >
                <StyledSelect {...register('paymentType', { required: true })}>
                  <option disabled selected>
                    Select Payment Type...
                  </option>
                  {paymentTypes.map((paymentType) => (
                    <option key={paymentType} value={paymentType}>
                      {paymentType}
                    </option>
                  ))}
                </StyledSelect>
                <BoxFlex css={{ position: 'absolute', right: 12, top: 16 }}>
                  {' '}
                  <CaretDownIcon />
                </BoxFlex>
              </BoxFlex>
            </div>
            <div className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="amount">
                <p className={styles.LabelText}>Amount</p>
              </label>
              <Input
                className={styles.InputField}
                type="number"
                id="amount"
                defaultValue="$788.09"
                placeholder="1000.00"
                step="0.01"
                {...register('amount', { required: true })}
              />
            </div>
            <div className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="date">
                <p className={styles.LabelText}>Payment Date</p>
              </label>
              <Input
                className={styles.InputField}
                type="date"
                id="date"
                defaultValue="2022-04-04"
                placeholder="YYYY-MM-DD"
                {...register('paymentDate', { required: true })}
              />
            </div>
            <div className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="memo">
                <p className={styles.LabelText}>
                  Memo <span className={styles.ItalicText}>Optional</span>
                </p>
              </label>
              <Input
                className={styles.InputField}
                id="memo"
                defaultValue=""
                {...register('memo', { required: false })}
              />
              <p className={styles.InputDescription}>
                Use letters and numbers only (up to 32 characters)
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
                >
                  Cancel
                </button>
                <Button
                  className={styles.ContinueButton}
                  variant={ButtonVariant.primary}
                  type="submit"
                  disabled={!isValid}
                >
                  {sendPaymentLoading && <Spinner />}
                  Send Payment
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
        </form>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SendPaymentModalDialog;
