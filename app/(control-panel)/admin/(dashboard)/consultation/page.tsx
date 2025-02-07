'use client'

import Table, { Column } from "../../components/ui/table"
import Consultant from "@/src/types/consultant"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getConsultations } from "@/src/actions/consultation"

export default function ConsultationsPage() {
  const columns: Column<Consultant>[] = [
    { header: 'ID', accessor: 'id'},
    { header: 'Name', accessor: 'name'},
    { header: 'Phone', accessor: 'phone'},
    { header: 'Email', accessor: 'email'},
    { header: 'Message', accessor: 'message'},
    { header: 'Sent At', accessor: 'sent_at'},
  ]

  const { data: consultations, isLoading } = useGetServerData(getConsultations, [])

  return (
    <div className="container mx-auto p-4">

      <Table 
        data={consultations}
        columns={columns}
        loading={isLoading}
      />
    </div>
  )
}

