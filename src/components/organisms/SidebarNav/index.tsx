import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiPlaneFill } from 'react-icons/ri'
import { NavLink } from 'src/components/molecules/NavLink'
import { NavSection } from 'src/components/molecules/NavSection'

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/users" icon={RiContactsLine}>
          Clientes
        </NavLink>
        <NavLink href="/travels" icon={RiPlaneFill}>
          Viagens
        </NavLink>
      </NavSection>
    </Stack>
  )
}
