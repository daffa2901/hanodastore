import React from 'react'
import Link from 'next/link'

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Admin Hanoda Store</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Produk</h3>
          <p className="text-2xl font-bold text-gray-900">24</p>
          <p className="text-xs text-gray-400 mt-1">Produk aktif</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Produk Terbaru</h3>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-xs text-gray-400 mt-1">Ditambahkan minggu ini</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-gray-500 text-sm font-medium">Link Tokopedia</h3>
          <p className="text-2xl font-bold text-gray-900">20</p>
          <p className="text-xs text-gray-400 mt-1">Produk dengan link aktif</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Kelola Produk</h2>
          <div className="space-y-3">
            <Link href="/admin/products" className="block w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📦</span>
                <div>
                  <div className="font-medium">Tambah Produk Baru</div>
                  <div className="text-sm text-gray-500">Upload foto, deskripsi, dan link Tokopedia</div>
                </div>
              </div>
            </Link>
            
            <Link href="/admin/products" className="block w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-3">✏️</span>
                <div>
                  <div className="font-medium">Edit Produk</div>
                  <div className="text-sm text-gray-500">Update informasi produk yang sudah ada</div>
                </div>
              </div>
            </Link>
            
            <Link href="/admin/products" className="block w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-3">�</span>
                <div>
                  <div className="font-medium">Kelola Link Tokopedia</div>
                  <div className="text-sm text-gray-500">Update link produk di Tokopedia</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Produk Terbaru</h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3"></div>
              <div className="flex-1">
                <div className="font-medium text-sm">Produk Elektronik Terbaru</div>
                <div className="text-xs text-gray-500">Ditambahkan 2 hari yang lalu</div>
              </div>
              <div className="text-xs text-green-600">✅ Link aktif</div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3"></div>
              <div className="flex-1">
                <div className="font-medium text-sm">Fashion Item</div>
                <div className="text-xs text-gray-500">Ditambahkan 5 hari yang lalu</div>
              </div>
              <div className="text-xs text-yellow-600">⚠️ Perlu link</div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3"></div>
              <div className="flex-1">
                <div className="font-medium text-sm">Aksesoris Rumah</div>
                <div className="text-xs text-gray-500">Ditambahkan 1 minggu yang lalu</div>
              </div>
              <div className="text-xs text-green-600">✅ Link aktif</div>
            </div>
          </div>
          
          <Link href="/admin/products" className="block mt-4 text-center text-blue-600 hover:text-blue-800 text-sm font-medium">
            Lihat Semua Produk →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard