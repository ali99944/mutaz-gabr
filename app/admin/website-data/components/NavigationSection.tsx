// import { useState, ChangeEvent } from 'react'
// import { Plus, Trash2 } from 'lucide-react'

// interface NavigationSectionProps {
//   config: any
//   setConfig: (config: any) => void
// }

// export default function NavigationSection({ config, setConfig }: NavigationSectionProps) {
//   const [newLink, setNewLink] = useState({ name: '', href: '' })

//   const handleLinkChange = (index: number, field: string, value: string) => {
//     const updatedLinks = [...config.navigation.links]
//     updatedLinks[index][field] = value
//     setConfig({
//       ...config,
//       navigation: {
//         ...config.navigation,
//         links: updatedLinks
//       }
//     })
//   }

//   const handleAddLink = () => {
//     if (newLink.name && newLink.href) {
//       setConfig({
//         ...config,
//         navigation: {
//           ...config.navigation,
//           links: [...config.navigation.links, newLink]
//         }
//       })
//       setNewLink({ name: '', href: '' })
//     }
//   }

//   const handleRemoveLink = (index: number) => {
//     const updatedLinks = config.navigation.links.filter((_: any, i: number) => i !== index)
//     setConfig({
//       ...config,
//       navigation: {
//         ...config.navigation,
//         links: updatedLinks
//       }
//     })
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">روابط التنقل</h2>
//       <div className="space-y-4">
//         {config.navigation.links.map((link: any, index: number) => (
//           <div key={index} className="flex items-center space-x-4 space-x-reverse">
//             <input
//               type="text"
//               value={link.name}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleLinkChange(index, 'name', e.target.value)}
//               className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="اسم الرابط"
//             />
//             <input
//               type="text"
//               value={link.href}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleLinkChange(index, 'href', e.target.value)}
//               className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="عنوان الرابط"
//             />
//             <button
//               onClick={() => handleRemoveLink(index)}
//               className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition duration-300"
//             >
//               <Trash2 className="w-5 h-5" />
//             </button>
//           </div>
//         ))}
//         <div className="flex items-center space-x-4 space-x-reverse">
//           <input
//             type="text"
//             value={newLink.name}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLink({ ...newLink, name: e.target.value })}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="اسم الرابط الجديد"
//           />
//           <input
//             type="text"
//             value={newLink.href}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLink({ ...newLink, href: e.target.value })}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="عنوان الرابط الجديد"
//           />
//           <button
//             onClick={handleAddLink}
//             className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition duration-300"
//           >
//             <Plus className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

