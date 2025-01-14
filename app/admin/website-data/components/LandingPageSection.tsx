// import { ChangeEvent } from 'react'

// interface LandingPageSectionProps {
//   config: any
//   setConfig: (config: any) => void
// }

// export default function LandingPageSection({ config, setConfig }: LandingPageSectionProps) {
//   const handleChange = (section: string, field: string, value: string) => {
//     setConfig({
//       ...config,
//       landing_page: {
//         ...config.landing_page,
//         [section]: {
//           ...config.landing_page[section],
//           [field]: value
//         }
//       }
//     })
//   }

//   const handleBenefitChange = (index: number, field: string, value: string) => {
//     const updatedBenefits = [...config.landing_page.who_are_we.benefits]
//     updatedBenefits[index][field] = value
//     // handleChange('who_are_we', 'benefits', updatedBenefits)
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">الصفحة الرئيسية</h2>
      
//       <div className="space-y-6">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">القسم الرئيسي</h3>
//           <div className="space-y-4">
//             <input
//               type="text"
//               value={config.landing_page.hero.section_name}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('hero', 'section_name', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="عنوان القسم"
//             />
//             <textarea
//               value={config.landing_page.hero.section_description}
//               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('hero', 'section_description', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="وصف القسم"
//               rows={3}
//             ></textarea>
//             <input
//               type="text"
//               value={config.landing_page.hero.consultation_button_text}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('hero', 'consultation_button_text', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="نص زر الاستشارة"
//             />
//             <input
//               type="text"
//               value={config.landing_page.hero.explore_projects_button_text}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('hero', 'explore_projects_button_text', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="نص زر استكشاف المشاريع"
//             />
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">قسم من نحن</h3>
//           <div className="space-y-4">
//             <input
//               type="text"
//               value={config.landing_page.who_are_we.section_title}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('who_are_we', 'section_title', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="عنوان القسم"
//             />
//             <textarea
//               value={config.landing_page.who_are_we.section_description}
//               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('who_are_we', 'section_description', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="وصف القسم"
//               rows={3}
//             ></textarea>
//             <input
//               type="text"
//               value={config.landing_page.who_are_we.content_title}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('who_are_we', 'content_title', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="عنوان المحتوى"
//             />
//             <textarea
//               value={config.landing_page.who_are_we.content_description}
//               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('who_are_we', 'content_description', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="وصف المحتوى"
//               rows={3}
//             ></textarea>
//             <input
//               type="text"
//               value={config.landing_page.who_are_we.contact_us_button_text}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('who_are_we', 'contact_us_button_text', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="نص زر التواصل"
//             />
            
//             <h4 className="text-lg font-semibold text-gray-700 mb-2">الفوائد</h4>
//             {config.landing_page.who_are_we.benefits.map((benefit: any, index: number) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   value={benefit.title}
//                   onChange={(e: ChangeEvent<HTMLInputElement>) => handleBenefitChange(index, 'title', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder={`عنوان الفائدة ${index + 1}`}
//                 />
//                 <textarea
//                   value={benefit.description}
//                   onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleBenefitChange(index, 'description', e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder={`وصف الفائدة ${index + 1}`}
//                   rows={2}
//                 ></textarea>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">قسم المشاريع</h3>
//           <div className="space-y-4">
//             <input
//               type="text"
//               value={config.landing_page.projects.section_title}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('projects', 'section_title', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="عنوان القسم"
//             />
//             <textarea
//               value={config.landing_page.projects.section_description}
//               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('projects', 'section_description', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="وصف القسم"
//               rows={3}
//             ></textarea>
//             <input
//               type="text"
//               value={config.landing_page.projects.show_all_projects_button_text}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('projects', 'show_all_projects_button_text', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="نص زر عرض جميع المشاريع"
//             />
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">قسم الخدمات</h3>
//           <div className="space-y-4">
//             <input
//               type="text"
//               value={config.landing_page.services.section_title}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('services', 'section_title', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="عنوان القسم"
//             />
//             <textarea
//               value={config.landing_page.services.section_description}
//               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('services', 'section_description', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="وصف القسم"
//               rows={3}
//             ></textarea>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

