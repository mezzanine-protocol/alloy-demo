import React from 'react';
import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant, ButtonSize, IconName } from './type';
import StyledButton from './Button.style';
import styles from './button.module.css';
import * as buttonIcons from './buttonIcons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  style?: React.CSSProperties;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  onClick,
  size,
  icon,
  style,
  variant,
  ...rest
}: Props) => {
  if (icon) {
    const iconToRender = buttonIcons[icon];
    return (
      <button {...rest} className={styles.iconButton}>
        {children}
        <Image src={iconToRender} alt={iconToRender.toString()} />
      </button>
    );
  } else {
    return (
      <StyledButton
        {...rest}
        className={styles.styledButton}
        size={size}
        variant={variant}
        onClick={onClick}
        style={style}
      >
        {children}
      </StyledButton>
    );
  }
};

export default Button;
