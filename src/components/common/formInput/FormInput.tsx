import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled, { css } from "styled-components";

interface FormInputProps {
  className?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegisterReturn<string>;
  isError?: boolean;
  name?: string;
}

const FormInput = ({
  className,
  id,
  isError,
  placeholder,
  register,
  name,
}: FormInputProps) => {
  return (
    <Root className={className}>
      <Label htmlFor={id}>{name}</Label>
      <Input
        id={id}
        isError={isError}
        placeholder={placeholder}
        {...register}
      />
    </Root>
  );
};

export default FormInput;

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: 5px;
    font: ${theme.font.regular_12};
  `}
`;

const Input = styled.input<{ isError?: boolean }>`
  ${({ theme, isError }) => css`
    width: 100%;
    height: 40px;
    border: 1px solid ${isError ? theme.color.red_02 : theme.color.gray_01};
    border-radius: 2px;
    margin-bottom: 25px;
  `}
`;
