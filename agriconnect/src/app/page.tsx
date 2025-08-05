import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <div className="relative w-full h-screen overflow-hidden rounded-4xl bg-amber-300 m-10 p-2">
      <Image
        src="/images/landing.jpeg"
        alt="Landing page Image"
        fill
        className="object-cover"
        priority
      />
       {/* Overlay with content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Connecting Farmers to Buyers — Even Offline
        </h1>

        
        <div className="space-x-4">
          <Link href="/login" >
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg">
            Login
          </button>
        </Link>
          

          <Link href="/farmer">
          <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200">
            Join as Farmer
          </button>
          </Link>

          <Link href="/buyer">
          <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200">
            Join as Buyer
          </button>
          </Link>

        </div>
      </div>
    </div>

    {/* Benefits Section */}
  <section className="bg-white py-16 px-6 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">
    Why Use AgriConnect?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-green-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-800 mb-2">Sell Produce Easily</h3>
      <p className="text-gray-700">List your farm products and reach buyers quickly with minimal effort.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-green-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-800 mb-2">Connect with Buyers</h3>
      <p className="text-gray-700">Find reliable local and national buyers for your fresh produce.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-green-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-800 mb-2">Get Weather & Price Updates</h3>
      <p className="text-gray-700">Stay informed with real-time weather alerts and market prices — even offline.</p>
    </div>

  </div>
  </section>


    
    </>
   
  );
}
