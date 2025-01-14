// import { ChangeEvent } from 'react'
// import { FileText, Hash } from 'lucide-react'

// interface CompanyMetadataSectionProps {
//   config: any
//   setConfig: (config: any) => void
// }

// export default function CompanyMetadataSection({ config, setConfig }: CompanyMetadataSectionProps) {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setConfig({
//       ...config,
//       moataz_meta: {
//         ...config.moataz_meta,
//         [e.target.name]: e.target.value
//       }
//     })
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">بيانات الشركة</h2>
//       <div className="space-y-4">
//         <div className="flex items-center">
//           <FileText className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="text"
//             name="commercial_register"
//             value={config.moataz_meta.commercial_register}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="السجل التجاري"
//           />
//         </div>
//         <div className="flex items-center">
//           <Hash className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="text"
//             name="tax_number"
//             value={config.moataz_meta.tax_number}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="الرقم الضريبي"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

