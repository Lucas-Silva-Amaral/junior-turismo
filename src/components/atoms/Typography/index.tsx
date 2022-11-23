import React from 'react'

import { Text, TextProps } from '@chakra-ui/react'

type CustomProps = {
  component?: React.ElementType
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'overline'
    | 'button'
}

export type TypographyProps = CustomProps & TextProps

const Typography: React.FC<TypographyProps> = (props) => (
  <Text variant={props.variant} {...props} />
)

export default React.memo(Typography)
