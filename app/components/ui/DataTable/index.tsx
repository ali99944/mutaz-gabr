'use client'

import { useState, useMemo, useEffect } from 'react'
import { TableSearch } from './TableSearch'
import { Pagination } from './Pagination'
import { LoadingOverlay } from './LoadingOverlay'
import { DataTableProps } from './types'
import { getNestedValue } from './utils'

export function DataTable<T>({
  columns,
  data,
  hoverable = true,
  paginated = false,
  pageSize = 10,
  searchable = false,
  showSearch = true,
  className = '',
  emptyMessage = 'لا توجد بيانات',
  loading = false,
  actions,
  itemsName = 'عنصر',
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const paginatedData = useMemo(() => {
    if (!paginated) return filteredData
    const start = (currentPage - 1) * pageSize
    return filteredData.slice(start, start + pageSize)
  }, [filteredData, currentPage, pageSize, paginated])

  const totalPages = Math.ceil(filteredData.length / pageSize)
  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(startItem + pageSize - 1, filteredData.length)

  return (
    <div className="relative">
      {searchable && (
        <TableSearch
          data={data}
          columns={columns}
          onSearch={setFilteredData}
          visible={showSearch}
        />
      )}

      <div className={`relative overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
        {loading && <LoadingOverlay />}
        <table className="w-full text-right">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key || column.dataIndex?.toString()}
                  className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}
                >
                  {column.title}
                </th>
              ))}
              {actions && (
                <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`bg-white ${
                    hoverable ? 'hover:bg-gray-50 transition-colors' : ''
                  }`}
                >
                  {columns.map((column) => {
                    const value = getNestedValue(row as any, column?.dataIndex as string)
                    return (
                      <td
                        key={`${rowIndex}-${column.key || column?.dataIndex?.toString()}`}
                        className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap"
                      >
                        {column.render ? column.render(value as any, row) : value}
                      </td>
                    )
                  })}
                  {actions && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className="px-6 py-8 text-center text-gray-500 text-sm"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {paginated && totalPages > 0 && (
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>
            عرض {startItem} إلى {endItem} من {filteredData.length} {itemsName}
          </span>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  )
}

