import { Column } from "./types";

export const getNestedValue = (obj: undefined, path: string) => {
    return path?.split('.').reduce((acc, part) => {
      if (acc === null || acc === undefined) return '';
      return acc[part];
    }, obj);
  };
  
  export const searchInObject = <T>(item: T, searchTerm: string, columns: Column<T>[]): boolean => {
    return columns.some(column => {
      if (!column.searchable) return false;
      
      const value = getNestedValue(item, column.dataIndex as string);
      if (!value) return false;
      
      return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
  };
  

  