import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormFields } from '../../types/formFields';
import { IField } from '../../types/formFields/field';
import { Input, StyledLabel, ErrorLabel } from '../styles';

interface InputFieldProps {
  errors: FieldErrors<IFormFields>;
  field: IField;
  register: UseFormRegister<IFormFields>;
}

const InputField = ({ errors, field, register }: InputFieldProps) => {
  return (
    <>
      <StyledLabel htmlFor={field.id}>{field.styledLabel.content}</StyledLabel>
      <Input
        error={!!errors[field.input.register]}
        type={field.input.type}
        placeholder={field.input.placeholder}
        id={field.id}
        {...register(field.input.register, {
          required: field.input.required,
          ...(field.input.pattern && {
            pattern: {
              value: field.input.pattern.value,
              message: field.input.pattern.message,
            },
          }),
          ...(field.input.maxLength && {
            maxLength: field.input.maxLength,
          }),
          ...(field.input.minLength && {
            minLength: {
              value: field.input.minLength.value,
              message: field.input.minLength.message,
            },
          }),
        })}
      />
      {errors[field.input.register] && (
        <ErrorLabel htmlFor={field.id}>
          {errors[field.input.register]?.message}
        </ErrorLabel>
      )}
    </>
  );
};

export default InputField;
