import Image from "next/image";

export default function Home() {
  const data=[
    { id: 1, title: "Pencuci Piring ", description: "Pencuci piring terbaik di dunia", image: "/Produk1.png" },
    { id: 2, title: "Karbol Wangi ", description: "Karbol wangi paling wangi di dunia", image: "/Produk2.png" },
    { id: 3, title: "Pencuci Tangan ", description: "Pencuci Tangan paling bersih sedunia", image: "/Produk3.png" },
  ];
  return (
    <div className="p-[30px] flex flex-col gap-7">  
      <div className="w-[600px]">
        <h2 className="text-5xl font-bold">HIGHLIGHT PRODUCT HANODA</h2>
      </div>
      <div>
        <div className="flex flex-row gap-3 justify-between" >
          {data.map((card) => (
            <div key={card.id} className="mb-4 ">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={300}
                className="rounded-lg mt-2 "
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
