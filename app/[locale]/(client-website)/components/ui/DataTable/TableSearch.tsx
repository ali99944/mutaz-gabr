'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '../Input'
import { TableSearchProps } from './types'
import { searchInObject } from './utils'

export function TableSearch<T>({ data, columns, onSearch, visible = true }: TableSearchProps<T>) {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = searchTerm
      ? data.filter(item => searchInObject(item, searchTerm, columns))
      : data;
    onSearch(filteredData);
  }, [searchTerm, data, columns]);

  if (!visible) return null;

  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="relative flex-1 max-w-sm">
        <Input
          icon={Search}
          placeholder="بحث..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-9 pr-9"
        />
      </div>
    </div>
  );
}

