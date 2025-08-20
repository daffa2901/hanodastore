import React from 'react'
import ProductForm from '../../components/ProductForm'

const AddProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tambah Produk Baru</h1>
          <p className="text-gray-600">Upload produk dengan foto, deskripsi, dan link Tokopedia</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <ProductForm />
        </div>
      </div>
    </div>
  )
}

export default AddProductPage
