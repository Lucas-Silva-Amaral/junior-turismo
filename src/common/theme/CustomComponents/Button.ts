import { pixelToRem } from 'src/helpers/pixelToRem'

export const Button = {
  variants: {
    primary: {
      borderRadius: pixelToRem(10),
      bgColor: 'primary.main',
      color: 'white',
      fontSize: pixelToRem(12),
    },
    secondary: {
      borderRadius: pixelToRem(10),
      bgColor: 'secundary.main',
      color: 'primary.main',
      fontSize: pixelToRem(16),
    },
    miniPrimary: {
      borderRadius: pixelToRem(21),
      bgColor: 'primary.main',
      color: 'white',
    },
    miniSecondary: {
      borderRadius: pixelToRem(21),
      bgColor: 'secundary.main',
      color: 'primary.main',
    },
    other: {
      borderRadius: pixelToRem(17),
      bgColor: 'white',
      color: 'primary.main',
      boxShadow: '3px 4px 11px 2px rgba(0, 0, 0, 0.25)',
      fontSize: pixelToRem(16),
    },
  },
}
