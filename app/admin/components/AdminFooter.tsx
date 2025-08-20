import React from 'react'

const AdminFooter = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © 2025 Hanoda Store Admin Panel. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <span className="text-gray-300">
              Version 1.0.0
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">
              Last updated: {new Date().toLocaleDateString('id-ID')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AdminFooter
