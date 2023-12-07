import React from 'react';
import { TopHalfCircle, BottomHalfCircle, Circle, Box } from './styles';

const Loading = () => {
  return (
    <Box css={{ display: 'flex' }}>
      <TopHalfCircle css={{ transform: 'rotate(-40deg)' }}>
        <Circle />
        <div />
      </TopHalfCircle>

      <BottomHalfCircle css={{ transform: 'rotate(320deg)' }}>
        <div />
        <Circle />
      </BottomHalfCircle>
    </Box>
  );
};

export default Loading;
