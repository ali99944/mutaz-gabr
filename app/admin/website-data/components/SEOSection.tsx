// import { ChangeEvent } from 'react'

// interface SEOSectionProps {
//   config
//   setConfig: (config) => void
// }

// export default function SEOSection({ config, setConfig }: SEOSectionProps) {
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setConfig({
//       ...config,
//       seo: {
//         ...config.seo,
//         [e.target.name]: e.target.value
//       }
//     })
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">SEO</h2>
//       <div className="space-y-4">
//         <div>
//           <label htmlFor="seo_title" className="block text-sm font-medium text-gray-700 mb-1">
//             عنوان الموقع
//           </label>
//           <input
//             type="text"
//             id="seo_title"
//             name="title"
//             value={config.seo.title}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label htmlFor="seo_description" className="block text-sm font-medium text-gray-700 mb-1">
//             وصف الموقع
//           </label>
//           <textarea
//             id="seo_description"
//             name="description"
//             value={config.seo.description}
//             onChange={handleChange}
//             rows={3}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>
//       </div>
//     </div>
//   )
// }

