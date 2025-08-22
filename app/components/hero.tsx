
export const Hero = ({ 
  bgColor = "bg-gradient-to-r from-sky-400 via-blue-600 to-blue-900", 
  titleSize = "text-5xl", 
  descSize = "text-lg" 
}) => {
  return (
    <div className={`relative ${bgColor} text-white py-24 px-6 text-center`}>
      <h1 className={`${titleSize} font-extrabold mb-4`}>HANODA STORE</h1>
      <p className={`${descSize} max-w-2xl mx-auto mb-6`}>
        Temukan berbagai produk berkualitas dengan harga terbaik hanya di Hanoda Store.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
        Belanja Sekarang
      </button>
    </div>
  )
}

export default Hero
