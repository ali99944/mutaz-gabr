// import { ChangeEvent } from 'react'
// import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

// interface ContactSectionProps {
//   config: any
//   setConfig: (config: any) => void
// }

// export default function ContactSection({ config, setConfig }: ContactSectionProps) {
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     if (name.startsWith('whatsapp.')) {
//       const whatsappField = name.split('.')[1]
//       setConfig({
//         ...config,
//         contacts: {
//           ...config.contacts,
//           whatsapp: {
//             ...config.contacts.whatsapp,
//             [whatsappField]: value
//           }
//         }
//       })
//     } else {
//       setConfig({
//         ...config,
//         contacts: {
//           ...config.contacts,
//           [name]: value
//         }
//       })
//     }
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">معلومات الاتصال</h2>
//       <div className="space-y-4">
//         <div className="flex items-center">
//           <Mail className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="email"
//             name="email"
//             value={config.contacts.email}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="البريد الإلكتروني"
//           />
//         </div>
//         <div className="flex items-center">
//           <Phone className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="tel"
//             name="phone"
//             value={config.contacts.phone}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="رقم الهاتف"
//           />
//         </div>
//         <div className="flex items-start">
//           <MapPin className="w-6 h-6 text-gray-400 ml-2 mt-2" />
//           <textarea
//             name="address"
//             value={config.contacts.address}
//             onChange={handleChange}
//             rows={3}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="العنوان"
//           ></textarea>
//         </div>
//         <div className="flex items-center">
//           <MessageCircle className="w-6 h-6 text-gray-400 ml-2" />
//           <input
//             type="tel"
//             name="whatsapp.number"
//             value={config.contacts.whatsapp.number}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="رقم WhatsApp"
//           />
//         </div>
//         <div className="flex items-center">
//           <MessageCircle className="w-6 h-6 text-gray-400 ml-2 opacity-0" />
//           <input
//             type="text"
//             name="whatsapp.message"
//             value={config.contacts.whatsapp.message}
//             onChange={handleChange}
//             className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="رسالة WhatsApp الافتراضية"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

