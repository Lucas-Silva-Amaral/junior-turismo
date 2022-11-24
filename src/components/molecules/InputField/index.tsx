import React from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps as CKInputProps,
} from '@chakra-ui/react'
import { useController } from 'react-hook-form'
import Input from 'src/components/atoms/Input'

type CustomProps = {
  name: string
  component?: React.ElementType
  label?: string
}

export type InputFieldProps = CustomProps & CKInputProps

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  ...rest
}) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({
    name,
  })

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default React.memo(InputField)
