import { ReactNode } from 'react'

import { Stack } from '@chakra-ui/react'
import Box from 'src/components/atoms/Box'
import Typography from 'src/components/atoms/Typography'

interface NavSectionProps {
  title: string
  children: ReactNode
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Typography fontWeight="bold" color="gray.400" fontSize="sm">
        {title}
      </Typography>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
