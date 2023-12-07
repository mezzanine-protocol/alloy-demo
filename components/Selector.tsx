import React from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Box, StyledSelect } from './styles';
import { ISelectorProps } from '../types/formFields/selector';

const Selector = ({
  id,
  defaultValue,
  register,
  required,
  data,
  value,
}: ISelectorProps) => {
  return (
    <Box
      css={{
        position: 'relative',
      }}
    >
      <StyledSelect
        defaultValue={defaultValue}
        id={id}
        {...register(value, { required: required })}
      >
        {data?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.content}
            </option>
          );
        })}
      </StyledSelect>
      <Box css={{ position: 'absolute', right: 12, top: 16 }}>
        {' '}
        <CaretDownIcon />
      </Box>
    </Box>
  );
};

export default Selector;
