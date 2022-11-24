import React from 'react'

import { ClientsTable } from 'src/components/organisms/ClientsTable'
import { AdminTemplate } from 'src/components/Template/AdminTemplate'

const Admin = () => {
  return (
    <AdminTemplate>
      <ClientsTable />
    </AdminTemplate>
  )
}

export default Admin
