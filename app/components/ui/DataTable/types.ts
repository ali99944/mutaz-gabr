import { ReactNode } from 'react'

export type NestedKeyOf<T> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`
}[keyof T & (string | number)]

export interface Column<T> {
  title: string
  dataIndex?: NestedKeyOf<T>
  key?: string
  width?: number | string
  render?: (value: any, record: T) => React.ReactNode
  sortable?: boolean
  searchable?: boolean
}

export interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  hoverable?: boolean
  paginated?: boolean
  pageSize?: number
  searchable?: boolean
  showSearch?: boolean
  className?: string
  emptyMessage?: string
  loading?: boolean
  actions?: (record: T) => ReactNode
  itemsName?: string
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface TableSearchProps<T> {
  data: T[]
  columns: Column<T>[]
  onSearch: (filteredData: T[]) => void
  visible?: boolean
}

