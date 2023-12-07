import React, { useState, ReactElement, useEffect, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Text from '../../components/text/Text';
import styles from './approved.module.css';
import { TopNav } from '../../components/TopNav';
import DepositAccountsCard from '../../components/dashboard/DepositAccountsCard';
import CreditCardsCard from '../../components/dashboard/CreditCardsCard';
import ExternalAccountsCard from '../../components/dashboard/ExternalAccountsCard';
import RecentActivityCard from '../../components/dashboard/RecentActivityCard';
import HelpSupportCard from '../../components/dashboard/HelpSupportCard';
import SendPaymentModal from '../../components/dashboard/modals/SendPaymentModal';
import { User } from '../../types/user';
import { Business } from '../../types/business';
import Loading from '../../components/Loading';
import { LoadingScreen } from '../../styles/dashboard';
import { DevModeContext } from '../_app';
import ResponseRecord from '../../components/responseRecord/ResponseRecord';
import DevModeSwitch from '../../components/switch/DevModeSwitch';
import { ResponseContainer } from '../../styles/pages';

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1.5fr',
  height: '100%',
  width: '100%',
};

const Approved = () => {
  const [user, setUser] = useState<User | Business>();
  const [loading, setLoading] = useState(true);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { isDevMode } = useContext(DevModeContext);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const business = localStorage.getItem('business');
    if (user) setUser(JSON.parse(user));
    else if (business) setUser(JSON.parse(business));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderLoader = () => (
    <LoadingScreen
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Loading />
    </LoadingScreen>
  );

  const header = (user: User | Business) => {
    if ('firstName' in user) {
      return `Good Morning, ${user.firstName}!`;
    } else if ('businessName' in user) {
      return `Good Morning, ${user.businessName}!`;
    }
    return 'Good Morning, Lorem Ipsum!';
  };

  return (
    <AnimatePresence>
      {loading ? (
        renderLoader()
      ) : (
        <div style={isDevMode ? gridStyles : {}}>
          <div>
            <TopNav user={user as User} />
            <div style={{ margin: 'var(--cl-space-7' }}>
              <Text
                className={styles.TextHead}
                style={{
                  fontSize: 'var(--cl-font-size-6)',
                  fontWeight: '500',
                  marginBottom: 'var(--cl-space-7',
                }}
              >
                {header(user as User | Business)}
              </Text>
              <div className={styles.CardsContainer}>
                <div className={styles.Card}>
                  <DepositAccountsCard
                    setIsPaymentModalOpen={setIsPaymentModalOpen}
                  />
                </div>
                <div className={styles.Card}>
                  <CreditCardsCard />
                </div>
                <div className={styles.Card}>
                  <ExternalAccountsCard />
                </div>
                <div className={`${styles.Card} ${styles.TableCard}`}>
                  <RecentActivityCard />
                </div>
                <div className={styles.Card}>
                  <HelpSupportCard />
                </div>
              </div>
            </div>
            <SendPaymentModal
              isOpen={isPaymentModalOpen}
              setIsOpen={setIsPaymentModalOpen}
            />
            <DevModeSwitch
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 'var(--cl-space-6)',
                margin: '20px',
              }}
            />
          </div>
          {isDevMode && (
            <div>
              <ResponseContainer>
                <ResponseRecord />
              </ResponseContainer>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

Approved.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default Approved;
