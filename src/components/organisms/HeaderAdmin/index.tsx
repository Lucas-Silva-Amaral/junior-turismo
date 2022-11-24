import logoJunior from '@assets/logoJunior.png'
import {
  Avatar,
  Icon,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from 'src/common/contexts/SidebarDrawerContext'
import Box from 'src/components/atoms/Box'
import Typography from 'src/components/atoms/Typography'

export function HeaderAdmin() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box
      display={'flex'}
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems={'center'}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} fontSize="24" />}
          onClick={onOpen}
          variant="unstyled"
          mr="2"
        />
      )}
      <Image src={logoJunior.src} alt="logo Junior Turismo" />
      <Box alignItems="center" ml="auto" display={'flex'}>
        <Box display="flex" alignItems="center">
          <Box mr="4" textAlign={'right'}>
            <Typography color="white">Arthur Ropke</Typography>
            <Typography color="gray.300" fontSize="sm">
              arthurropke@hotmail.com
            </Typography>
          </Box>
          <Avatar
            size="md"
            name="Arthur Ropke"
            src="https://github.com/arthury10.png"
          />
        </Box>
      </Box>
    </Box>
  )
}
