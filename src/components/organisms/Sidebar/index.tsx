import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useSidebarDrawer } from 'src/common/contexts/SidebarDrawerContext'
import Box from 'src/components/atoms/Box'
import { SidebarNav } from 'src/components/organisms/SidebarNav'

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer()

  const idDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (idDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
