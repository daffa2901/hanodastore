import React from "react";
import { Katalog } from "../Interface/Katalog";
import Image from "next/image";

const dataKatalog: Katalog[] = [
  { id: 1, name: "Pencuci Piring", imageSrc: "Produk1.png" },
  { id: 2, name: "Karbol", imageSrc: "Produk2.png" },
  { id: 3, name: "Pencuci Tangan", imageSrc: "Produk3.png" },
  { id: 4, name: "Anti Jamur", imageSrc: "Produk4.png" },
];

const KatalogComponent = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {dataKatalog.map((product) => (
            <div key={product.id} className="group">
              <img
                alt={product.name}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KatalogComponent;
