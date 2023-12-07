import { styled } from '../stitches.config';
import {
  CardStackPlusIcon,
  BarChartIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';
import styledComponents from 'styled-components';
import { motion } from 'framer-motion';

export const Box = styled('div', {});

export const FramerBox = styled(motion.div, {});

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid $border-secondary',
  boxShadow: '0px 0px 4px $colors$shadow-default',
  padding: '$4',
  borderRadius: '$5',
  gap: '$4',
  maxWidth: '500px',
  backgroundColor: '$background-primary-neutral',
});

export const CardTitle = styled('h3', {
  margin: 0,
  fontSize: '$4',
  fontWeight: '500',
  padding: 0,
});

export const CardBody = styled('p', {
  color: '$text-secondary',
  fontSize: '$4',
  margin: 0,
});

export const StyledCardIcon = styled(CardStackPlusIcon, {
  size: '$4',
});
export const StyledSketchIcon = styled(SketchLogoIcon, {
  size: '$4',
});
export const StyledChart = styled(BarChartIcon, {
  size: '$4',
});

export const Title = styled('h1', {
  fontSize: '$8',
  lineHeight: '44px',
});

export const LoadingScreen = styledComponents(motion.div)`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: $background-secondary-neutral;
`;
