import Image from 'next/image';

export  function DontMiss() {
  return (
    <section className="dont-miss w-full">
      {/* Header Section */}
      <div className="w-full px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-black">
          Don’t Miss
        </h1>
      </div>

      {/* Full-Screen Image Centered */}
      <div className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center">
        <Image
          src="/leftright.jpg" // Replace with your actual image path
          alt="Don't Miss Out"
          width={1200}
          height={1000}
          objectFit="cover"
          className="rounded-none"
        />
      </div>

      {/* Centered Content Below the Image */}
      <div className="text-center py-10 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          FLIGHT ESSENTIALS
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
          Shop Now
        </button>
      </div>
    </section>
  );
}
export default  DontMiss;