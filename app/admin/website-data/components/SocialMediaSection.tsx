// import { ChangeEvent } from 'react'
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

// interface SocialMediaSectionProps {
//   config: any
//   setConfig: (config: any) => void
// }

// export default function SocialMediaSection({ config, setConfig }: SocialMediaSectionProps) {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setConfig({
//       ...config,
//       social_media: {
//         ...config.social_media,
//         [e.target.name]: e.target.value
//       }
//     })
//   }

//   const socialIcons = {
//     facebook: Facebook,
//     twitter: Twitter,
//     instagram: Instagram,
//     linkedin: Linkedin,
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">وسائل التواصل الاجتماعي</h2>
//       <div className="space-y-4">
//         {Object.entries(config.social_media).map(([platform, url]) => {
//           const Icon = socialIcons[platform as keyof typeof socialIcons]
//           return (
//             <div key={platform} className="flex items-center">
//               <Icon className="w-6 h-6 text-gray-400 ml-2" />
//               <input
//                 type="text"
//                 name={platform}
//                 value={url as string}
//                 onChange={handleChange}
//                 className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder={`رابط ${platform}`}
//               />
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

