'use client';

import React from 'react'
import Link from 'next/link'
import { useAuth } from './AuthContext'

const AdminHeader = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-xl font-bold">
              Hanoda Admin
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/admin" className="hover:text-gray-300 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/products" className="hover:text-gray-300 transition-colors">
              Kelola Produk
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-sm text-gray-300">
                Welcome, {user.name}
              </span>
            )}
            <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
              Lihat Toko
            </Link>
            <button 
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
