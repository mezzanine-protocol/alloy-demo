import styled from 'styled-components';

export const StyledSideNavButton = styled.button<{
  isCurrentPathName: boolean;
}>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--cl-space-2);
  font-weight: var(--cl-font-weight-light);
  height: var(--cl-space-8);
  width: 100%;
  color: var(--cl-gray-1100);
  background-color: transparent;
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border-radius: var(--cl-radius-3);
  padding: var(--cl-space-2) var(--cl-space-4);
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
    background-color: var(--cl-background-tertiary-hovered);
  }
  ${({ isCurrentPathName }) =>
    isCurrentPathName &&
    `background-color: var(--cl-background-tertiary-hovered);`}
`;
