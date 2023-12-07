import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid var(--cl-border-default);
  border-radius: var(--cl-radius-3);
  padding: var(--cl-space-5);
`;

export const StyledCardHeader = styled.div`
  display: flex;
  gap: var(--cl-space-3);
  align-items: center;
  padding-bottom: var(--cl-space-5);
  border-bottom: 1px solid var(--cl-border-default);
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--cl-space-5);
`;
