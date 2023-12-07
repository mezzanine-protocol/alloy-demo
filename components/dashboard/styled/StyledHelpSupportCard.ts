import styled from 'styled-components';
import Card from '../../card/Card';

const StyledHelpSupportCard = styled(Card)`
  && {
    box-shadow: 0 2px 10px var(--cl-gray-300);
    border-radius: 10px;

    > div:nth-child(1) {
      display: none;
    }

    > div:nth-child(2) {
      padding-top: 0;
    }
  }
`;

export default StyledHelpSupportCard;
