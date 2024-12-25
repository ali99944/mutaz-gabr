'use client'

import { ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { PaginationProps } from './types'

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  const visiblePages = pages.filter(page => {
    if (totalPages <= 7) return true
    if (page === 1 || page === totalPages) return true
    if (Math.abs(page - currentPage) <= 1) return true
    return false
  })

  return (
    <div className="flex items-center justify-center gap-2 mt-4 select-none">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronsRight className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="flex gap-1">
        {visiblePages.map((page, index) => {
          const prevPage = visiblePages[index - 1]
          if (prevPage && page - prevPage > 1) {
            return (
              <div key={`ellipsis-${page}`} className="flex items-center">
                <span className="px-2">...</span>
                <button
                  onClick={() => onPageChange(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
                    currentPage === page
                      ? 'bg-[#004851] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              </div>
            )
          }
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
                currentPage === page
                  ? 'bg-[#004851] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronsLeft className="h-4 w-4" />
      </button>
    </div>
  )
}

