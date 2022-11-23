import React from 'react'

import {
  Box as CKBox,
  BoxProps as CKBoxProps,
} from '@chakra-ui/react'

type CustomProps = {
  component?: React.ElementType
}

export type BoxProps = CKBoxProps & CustomProps

const Box: React.FC<BoxProps> = (props) => {
  return <CKBox {...props} />
}
export default React.memo(Box)
