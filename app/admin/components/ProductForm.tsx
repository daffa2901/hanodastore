'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    estimatedPrice: '',
    tokopediaLink: '',
    image: null as File | null
  });
  const [previewImage, setPreviewImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulasi upload - dalam production connect ke API
      console.log('Product data:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Produk berhasil ditambahkan!');
      router.push('/admin/products');
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menambahkan produk');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Product Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nama Produk *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Masukkan nama produk"
        />
      </div>

      {/* Product Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
          Foto Produk *
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {previewImage ? (
            <div className="space-y-4">
              <img
                src={previewImage}
                alt="Preview"
                className="mx-auto h-32 w-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setPreviewImage('');
                  setFormData(prev => ({ ...prev, image: null }));
                }}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Hapus Foto
              </button>
            </div>
          ) : (
            <div>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
              <label
                htmlFor="image"
                className="cursor-pointer inline-flex flex-col items-center"
              >
                <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Upload foto produk
                </span>
                <span className="text-sm text-gray-500">PNG, JPG hingga 10MB</span>
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Kategori *
        </label>
        <select
          id="category"
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Pilih kategori</option>
          <option value="elektronik">Elektronik</option>
          <option value="fashion">Fashion</option>
          <option value="rumah-tangga">Rumah Tangga</option>
          <option value="aksesoris">Aksesoris</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Deskripsi Produk *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tuliskan deskripsi produk yang menarik..."
        />
      </div>

      {/* Estimated Price */}
      <div>
        <label htmlFor="estimatedPrice" className="block text-sm font-medium text-gray-700 mb-2">
          Harga Estimasi
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500">Rp</span>
          <input
            id="estimatedPrice"
            name="estimatedPrice"
            type="text"
            value={formData.estimatedPrice}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">Opsional - untuk memberikan gambaran harga kepada pengunjung</p>
      </div>

      {/* Tokopedia Link */}
      <div>
        <label htmlFor="tokopediaLink" className="block text-sm font-medium text-gray-700 mb-2">
          Link Tokopedia
        </label>
        <input
          id="tokopediaLink"
          name="tokopediaLink"
          type="url"
          value={formData.tokopediaLink}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://tokopedia.com/hanoda/nama-produk"
        />
        <p className="text-sm text-gray-500 mt-1">Link ke produk di Tokopedia untuk pembelian</p>
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-4 pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {isLoading ? 'Menyimpan...' : 'Simpan Produk'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
