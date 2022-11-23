import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'

export const theme = extendTheme({
  colors: {
    ...colors,
  },
  fonts,
  config: {
    initialColorMode: 'light',
  },
})
