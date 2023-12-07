import styled from 'styled-components';
import { ButtonSize, ButtonVariant } from './type';
/**
 * Define styles for the primary variant and large size
 */

const StyledButton = styled.button<{
  size?: ButtonSize;
  variant?: ButtonVariant;
}>`
  box-sizing: border-box;
  background-color: var(--cl-background-secondary);
  color: var(--cl-text-default);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: var(--cl-space-7);
  width: fit-content;
  white-space: nowrap;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  border-radius: var(--cl-radius-3);
  padding: var(--cl-space-2) var(--cl-space-4);
  gap: var(--cl-space-2);
  font-weight: var(--cl-font-weight-bold);
  font-size: var(--cl-font-size-2);
  font-family: inherit;
  line-height: var(--cl-line-height-2);
  transition: all var(--cl-duration-200) var(--cl-motion-ease-in-out);
  will-change: opacity background-color;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: var(--cl-background-secondary-hovered);
  }

  ${(props) => {
    switch (props.size) {
      case ButtonSize.small:
        return `
                    font-size: 12px;
                    font-weight: 600;
                    height: 22px;
                    width: 52.688;
                `;
      case ButtonSize.large:
        return `
                    font-size: 16px;
                    font-weight: 700;
                    height: 26px;
                    width: 56.688;
                `;
      default:
        return ``;
    }
  }}
  ${(props) => {
    switch (props.variant) {
      case ButtonVariant.outline:
        return `
                    background-color: var(--cl-background-default);
                    border: 1px solid var(--cl-border-accent);
                    &:hover:not(:disabled) {
                      background-color: var(--cl-background-tertiary-hovered);
                    }
                `;
      case ButtonVariant.primary:
        return `
                    background-color: var(--cl-background-accent);
                    color: var(--cl-text-accent);
                    
                    &:hover:not(:disabled) {
                      background-color: var(--cl-background-accent-hovered);
                    }

                `;
      case ButtonVariant.tertiary:
        return `
                background-color: transparent;
                border: 0;
                &:hover:not(:disabled) {
                  background-color: var(--cl-background-tertiary-hovered);
                }
                `;
      default:
        break;
    }
  }}
`;

export default StyledButton;
