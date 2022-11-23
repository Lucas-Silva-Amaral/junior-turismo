import React from 'react'

import {
  Button as CKButton,
  ButtonProps as CKButtonProps,
} from '@chakra-ui/react'

type CustomProps = {
  component?: React.ElementType
  variant?:
    | 'primary'
    | 'secondary'
    | 'miniPrimary'
    | 'miniSecondary'
    | 'other'
    | 'ghost'
    | 'link'
    | 'outline'
    | 'solid'
    | 'unstyled'
}

export type ButtonProps = CKButtonProps & CustomProps

const Button: React.FC<ButtonProps> = (props) => {
  return <CKButton {...props} />
}
export default React.memo(Button)
