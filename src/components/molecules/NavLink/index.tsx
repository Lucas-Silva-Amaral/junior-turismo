import { ElementType } from 'react'

import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { ActiveLink } from 'src/components/atoms/ActiveLink'
import Typography from 'src/components/atoms/Typography'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string
}

export const NavLink = ({ children, icon, href }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Typography ml="4" fontWeight="medium">
          {children}
        </Typography>
      </ChakraLink>
    </ActiveLink>
  )
}
