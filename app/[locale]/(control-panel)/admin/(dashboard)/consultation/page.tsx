'use client'

import { Button } from "@/components/ui/button"
import { Filter, SortAsc } from "lucide-react"
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
    { header: 'Message', accessor: 'message'}
  ]

  const { data: consultations, isLoading } = useGetServerData(getConsultations, [])

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-2 rtl:space-x-reverse">
          <Button size="sm">
            <Filter className="ml-2 h-4 w-4" />
            تصفية
          </Button>
          <Button  size="sm">
            <SortAsc className="ml-2 h-4 w-4" />
            ترتيب
          </Button>
        </div>
      </div>

      <Table 
        data={consultations}
        columns={columns}
        loading={isLoading}
      />
    </div>
  )
}

