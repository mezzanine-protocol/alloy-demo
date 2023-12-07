import { useContext, useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './switch.module.css';
import { DevModeContext } from '../../pages/_app';

interface Props {
  style?: React.CSSProperties;
}

const DevModeSwitch = ({ style }: Props) => {
  const { isDevMode, setIsDevMode } = useContext(DevModeContext);
  const [isChecked, setIsChecked] = useState(isDevMode);

  const handleCheckedChange = () => {
    setIsChecked(!isChecked);
    if (setIsDevMode) {
      setIsDevMode(!isDevMode);
    }
  };

  return (
    <div style={style} className={styles.ButtonSwitch}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Switch.Root
          className={`${styles.SwitchRoot} ${styles.ButtonSwitch}`}
          id="dev-mode"
          onCheckedChange={handleCheckedChange}
          checked={isChecked}
        >
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
        <label
          className={styles.Label}
          htmlFor="dev-mode"
          style={{ paddingLeft: 15 }}
        >
          Developer Mode
        </label>
      </div>
    </div>
  );
};

export default DevModeSwitch;
