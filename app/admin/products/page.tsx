import React from 'react'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Kelola Produk Hanoda Store</h1>
        <Link 
          href="/admin/products/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          + Tambah Produk Baru
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Semua Kategori</option>
            <option>Elektronik</option>
            <option>Fashion</option>
            <option>Rumah Tangga</option>
            <option>Aksesoris</option>
          </select>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Semua Status</option>
            <option>Ada Link Tokopedia</option>
            <option>Belum Ada Link</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Produk
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Harga Estimasi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link Tokopedia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample Data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">P1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Smartphone Android Terbaru</div>
                    <div className="text-sm text-gray-500">Deskripsi: HP dengan spesifikasi tinggi dan kamera canggih</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Elektronik
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Rp 3,500,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a 
                  href="https://tokopedia.com/hanoda/smartphone-android" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-xs"
                >
                  ✅ Link Aktif
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Aktif
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                <button className="text-red-600 hover:text-red-900">Hapus</button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold">P2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Fashion Wanita Trendy</div>
                    <div className="text-sm text-gray-500">Deskripsi: Baju fashion wanita dengan model terkini</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                  Fashion
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Rp 150,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-yellow-600 text-xs">
                  ⚠️ Belum Ada Link
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Perlu Link
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                <button className="text-red-600 hover:text-red-900">Hapus</button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold">P3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Peralatan Rumah Tangga</div>
                    <div className="text-sm text-gray-500">Deskripsi: Set peralatan dapur yang praktis dan modern</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Rumah Tangga
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Rp 275,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a 
                  href="https://tokopedia.com/hanoda/peralatan-rumah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-xs"
                >
                  ✅ Link Aktif
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Aktif
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                <button className="text-red-600 hover:text-red-900">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-800 mb-2">💡 Tips Mengelola Produk</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Upload foto produk yang berkualitas tinggi</li>
          <li>• Berikan deskripsi yang jelas dan menarik</li>
          <li>• Pastikan link Tokopedia selalu aktif dan mengarah ke produk yang tepat</li>
          <li>• Update harga estimasi secara berkala</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductsPage
