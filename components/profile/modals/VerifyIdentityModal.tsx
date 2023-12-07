import React, { useState, useEffect } from 'react';
import VerifyIdentityModalDialog from '../../modalDialog/VerifyIdentityModalDialog';
import { openAlloy } from '../../../lib/alloy';

const VerifyIdentityModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [isProveLoading, setIsProveLoading] = useState(false);

  useEffect(() => {
    listenForProveModal();
  }, []);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const openProveModal = () => {
    setIsProveLoading(true);

    const callback = () => {
      handleModalClose();
      setIsProveLoading(false);
    };

    openAlloy(callback, 'alloy-overlay-root');
  };

  const listenForProveModal = () => {
    const observer = new MutationObserver(() => {
      const proveModalWrapper = Array.from(
        document.getElementsByClassName(
          'alloy-container'
        ) as HTMLCollectionOf<HTMLElement>
      )[0];
      if (proveModalWrapper) {
        proveModalWrapper.style.zIndex = '3000';
      }
    });
    observer.observe(document, { subtree: true, childList: true });
  };

  // const ContinueButton = (
  //   <Button
  //     onClick={openProveModal}
  //     variant={ButtonVariant.primary}
  //     loading={isProveLoading}
  //   >
  //     Continue
  //   </Button>
  // );
  // const CancelButton = <Button onClick={handleModalClose}>Cancel</Button>;

  return (
    <VerifyIdentityModalDialog
      open={isOpen}
      handleModalClose={handleModalClose}
      isProveLoading={isProveLoading}
      openProveModal={openProveModal}
    />
  );
};

export default VerifyIdentityModal;
