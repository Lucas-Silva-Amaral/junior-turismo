import React from 'react'

import {
  Input as CKInput,
  InputProps as CKInputProps,
} from '@chakra-ui/react'

type CustomProps = {
  component?: React.ElementType
}

export type InputProps = CustomProps & CKInputProps

const Input: React.FC<InputProps> = (props) => <CKInput {...props} />

export default React.memo(Input)
