// import { ChangeEvent } from 'react'
// import { Calendar, User } from 'lucide-react'

// interface CopyrightSectionProps {
//   config: any
//   setConfig: (config: any) => void
// }

// export default function CopyrightSection({ config, setConfig }: CopyrightSectionProps) {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setConfig({
//       ...config,
//       copyright: {
//         ...config.copyright,
//         [e.target.name]: e.target.value
//       }
//     })
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">حقوق النشر</h2>
//       <div className="space-y-4">
//         <div className="flex items-center">
//           <Calendar className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="number"
//             name="year"
//             value={config.copyright.year}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="السنة"
//           />
//         </div>
//         <div className="flex items-center">
//           <User className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="text"
//             name="name"
//             value={config.copyright.name}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="الاسم"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

