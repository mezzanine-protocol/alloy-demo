import styled from 'styled-components';
import Card from '../../card/Card';

const StyledCard = styled(Card)`
  && {
    min-height: 290px;
    padding: var(--cl-space-5);
    padding-top: var(--cl-space-4);
    border-radius: 10px;
    box-shadow: 0 2px 10px var(--cl-gray-300);

    > div:nth-child(1) {
      padding-bottom: var(--cl-space-2);
      font-weight: var(--cl-font-weight-bold);
    }

    > div:nth-child(2) {
      padding-top: var(--cl-space-4);
    }
  }
`;

export default StyledCard;
