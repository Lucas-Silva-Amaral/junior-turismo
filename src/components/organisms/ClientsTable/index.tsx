import React from 'react'

import {
  Checkbox,
  Heading,
  Icon,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Box from 'src/components/atoms/Box'
import Button from 'src/components/atoms/Button'

export const ClientsTable = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Box
        mb="8"
        justifyContent={'space-between'}
        alignItems="center"
        display={'flex'}
      >
        <Heading size="lg" fontWeight={'normal'}>
          Clientes
        </Heading>
        <NextLink href="/users/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme={'pink'}
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            Criar novo
          </Button>
        </NextLink>
      </Box>

      <>
        <Table colorScheme={'whiteAlpha'}>
          <Thead>
            <Tr>
              <Th px={['4', '4', '6']} color="gray.300" w="8">
                <Checkbox colorScheme={'pink'} />
              </Th>
              <Th>Usuários</Th>
              {isWideVersion && <Th>Data de cadastro</Th>}
              {isWideVersion && <Th width="8"></Th>}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={['4', '4', '6']}>
                <Checkbox colorScheme={'pink'} />
              </Td>
              <Td>
                <Box>
                  <Link color="purple.400">
                    <Text fontWeight="bold">user.name</Text>
                  </Link>
                  <Text fontSize={'sm'} color="gray.300">
                    user.email
                  </Text>
                </Box>
              </Td>
              {isWideVersion && <Td>user.createdAt</Td>}
              {isWideVersion && (
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme={'purple'}
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize="16" />
                    }
                  >
                    Editar
                  </Button>
                </Td>
              )}
            </Tr>
          </Tbody>
        </Table>
        {/* <Pagination
          totalCountOfRegisters={data?.totalCount}
          currentPage={page}
          onPageChange={setPage}
        /> */}
      </>
    </Box>
  )
}
