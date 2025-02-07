import React from 'react'

const BoxesLoader = () => {
  return (
    <div className="min-h-screen text-white">
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg animate-pulse h-64"></div>
              <div className="bg-gray-800 rounded-lg animate-pulse h-64"></div>
              <div className="bg-gray-800 rounded-lg animate-pulse h-64"></div>
            </div>
          </div>
        </main>

      </div>
  )
}

export default BoxesLoader