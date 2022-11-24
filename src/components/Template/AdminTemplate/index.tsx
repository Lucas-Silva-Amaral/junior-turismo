import React from 'react'

import { SimpleGrid } from '@chakra-ui/react'
import Box from 'src/components/atoms/Box'
import { HeaderAdmin } from 'src/components/organisms/HeaderAdmin'
import { Sidebar } from 'src/components/organisms/Sidebar'

type AdminTemplateProps = {
  children: React.ReactNode
}

export const AdminTemplate: React.FC<AdminTemplateProps> = ({
  children,
}) => {
  return (
    <Box
      bgColor={'gray.900'}
      h={'100vh'}
      display="flex"
      flexDir={'column'}
    >
      <HeaderAdmin />
      <Box
        display={'flex'}
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            {children}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
