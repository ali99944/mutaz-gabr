import { Loader } from "lucide-react"

type NestedAccessor = string | string[]

export interface Column<T> {
  header: string
  accessor: NestedAccessor
  pinned?: boolean
  render?: (value: string, row: T) => React.ReactNode
}

interface TableProps<T> {
  loading: boolean
  data: T[]
  columns: Column<T>[]
  actions?: (row: T) => React.ReactNode
  emptyMessage?: string
}

const getNestedValue = (obj, accessor: NestedAccessor) => {
  if (typeof accessor === "string") {
    return obj[accessor]
  }
  return accessor.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

const Table = <T extends object>({
  data,
  loading = false,
  columns,
  actions = null,
  emptyMessage = "لا توجد بيانات متاحة",
}: TableProps<T>) => {
  const pinnedColumns = columns.filter((col) => col.pinned)
  const unpinnedColumns = columns.filter((col) => !col.pinned)
  const allColumns = [...pinnedColumns, ...unpinnedColumns]

  return (
    <div className="overflow-x-auto relative rounded-lg border border-gray-700">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            {allColumns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 text-right text-xs font-medium text-[#9c8a5a] uppercase tracking-wider ${
                  column.pinned ? "sticky right-0 z-10 bg-gray-800" : ""
                }`}
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">إجراءات</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {loading && (
            <tr>
              <td
                colSpan={allColumns.length + (actions ? 1 : 0)}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"
              >
                <div className="w-full flex justify-center items-center">
                  <Loader size={24} className="animate-spin text-[#9c8a5a]" />
                </div>
              </td>
            </tr>
          )}
          {!loading && data.length === 0 ? (
            <tr>
              <td
                colSpan={allColumns.length + (actions ? 1 : 0)}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-center"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-800 transition-colors">
                {allColumns.map((column, colIndex) => {
                  const cellValue = getNestedValue(row, column.accessor)
                  return (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-300 ${
                        column.pinned ? "sticky right-0 z-10 bg-gray-900" : ""
                      }`}
                    >
                      {column.render ? column.render(cellValue, row) : cellValue}
                    </td>
                  )
                })}
                {actions && (
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">{actions(row)}</td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table

