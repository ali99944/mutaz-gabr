'use client'

import {  useEffect, useState } from 'react'
import { Plus, Search, Edit, Trash2, Shapes } from 'lucide-react'
import { Breadcrumb } from '@/app/components/ui/Breadcrumb'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/Input'
import { DataTable } from '@/app/components/ui/DataTable'
import Category from '@/lib/types/Category'
import { Modal } from '@/app/components/ui/Modal'
import { DangerModal } from '@/app/components/ui/DangerModal'
import { createCategory, deleteCategory } from '../lib/category_service'
import { toast } from 'react-toastify'
import { Column } from '@/app/components/ui/DataTable/types'


export default function Page({ initialCategories }: { initialCategories: Category[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState<Category[]>(initialCategories)

  const getCategories = async () => {
    try {
        const res = await fetch('/api/categories')
        const xx = await res.json()
        
        setCategories(xx)
        console.log(categories);
      console.log(xx);
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    console.log("Categories updated:", categories);
  }, [categories]);

  const columns:Column<Category>[] = [
    { title: 'اسم الفئة', dataIndex: 'name' },
    {
      title: 'الإجراءات',
      render: (_, record: Category) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" icon={Edit} onClick={() => openEditCategoryModal(record)}>
            تعديل
          </Button>
          <Button onClick={() => openDeleteCategoryModal(record)} variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700 hover:bg-red-50">
            حذف
          </Button>
        </div>
      ),
    },
  ]

//   const filteredCategories = useMemo(() => 
//     categories.filter(category =>
//       category.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ), 
//     [categories, searchTerm]
//   );

  const [isAddingCategory, setIsAddingCategory] = useState(false)
  const [isEditingCategory, setIsEditingCategory] = useState(false)
  const [isDeletingCategory, setIsDeletingCategory] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)

  const openDeleteCategoryModal = (category: Category) => {
    setCurrentCategory(category)
    setIsDeletingCategory(true)
  }

  const openEditCategoryModal = (category: Category) => {
    setCurrentCategory(category)
    setIsEditingCategory(true)
  }

  const [newCategoryName, setNewCategoryName] = useState('')

  const handleCategoryCreation = async () => {
    try{
        const category = await createCategory(newCategoryName)
        console.log(category);

        toast.success('تم اضافة الفئة بنجاح')
        setCategories([...categories, category as Category])

        console.log(categories);
        
        setIsAddingCategory(false)
        
    } catch (error) {
        console.log(error);
        
        toast.error('حدث خطأ اثناء اضافة الفئة')
    }
  }

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Closes the edit category modal
 */
/******  3e46dda7-8cb8-4e7d-b9fe-ad464049492e  *******/  const handleCategoryUpdate = () => {
    setIsEditingCategory(false)
  }

  const handleCategoryDeletion = async () => {
    try{
        await deleteCategory(currentCategory?.id as number)
        toast.success('تم حذف الفئة بنجاح')
        setCategories(categories.filter(category => category.id !== currentCategory?.id))

        setIsDeletingCategory(false)
    } catch (error) {
        console.log(error);
        
        toast.error('حدث خطأ اثناء حذف الفئة')
    }
  }

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'الفئات', href: '/admin/categories' },
        ]}
      />
      <div className="flex items-center justify-between mb-6">
        <h1 className="admin-heading-xl">فئات الخدمات</h1>
        <Button icon={Plus} onClick={() => setIsAddingCategory(true)}>
            إضافة فئة جديدة
          </Button>
      </div>

      <div className="mb-6">
        <Input
          icon={Search}
          placeholder="البحث عن الفئات..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <DataTable<Category>
        columns={columns}
        data={categories}
        hoverable
        searchable={false}
        emptyMessage="لا توجد فئات"
      />

      <Modal
        isOpen={isAddingCategory}
        onClose={() => setIsAddingCategory(false)}
        title="اضافة فئة جديدة"
      >
        <Input
            placeholder="اسم الفئة" 
            icon={Shapes}
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
        />

        <div className="flex justify-end space-x-2 space-x-reverse mt-4">
          <Button variant="outline" onClick={() => setIsAddingCategory(false)}>اغلاق</Button>
          <Button onClick={handleCategoryCreation}>انشاء</Button>
        </div>
      </Modal>

      <Modal
        isOpen={isEditingCategory}
        onClose={() => setIsEditingCategory(false)}
        title={`تعديل ${currentCategory?.name}`}
      >
        <Input 
            placeholder="اسم الفئة" 
            icon={Shapes} 
            value={currentCategory?.name} 
            onChange={(e) => {
                setCurrentCategory({ ...currentCategory, name: e.target.value } as Category)
            }}
        />

        <div className="flex justify-end space-x-2 space-x-reverse mt-4">
          <Button onClick={() => setIsEditingCategory(false)} variant="outline">اغلاق</Button>
          <Button onClick={handleCategoryUpdate}>حفظ</Button>
        </div>
      </Modal>

      <DangerModal
        isOpen={isDeletingCategory}
        onClose={() => setIsDeletingCategory(false)}
        onAccept={handleCategoryDeletion}
        title={`حذف ${currentCategory?.name}`}
        message="هل تريد حذف هذه الفئة؟"
      />
    </div>
  )
}

