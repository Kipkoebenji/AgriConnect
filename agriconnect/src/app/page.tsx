"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section with Glassmorphism */}
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 mx-2 my-2 sm:mx-4 sm:my-4 lg:mx-10 lg:my-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl">
        <Image
          src="/images/landing.jpeg"
          alt="Landing page Image"
          fill
          className="object-cover opacity-80 mix-blend-overlay"
          priority
        />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-8 w-48 h-48 bg-emerald-300/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Main content with glassmorphism overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 shadow-2xl max-w-4xl animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent animate-gradient">
              Connecting Farmers to Buyers — Even Offline
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 text-emerald-50 opacity-90 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Revolutionizing agriculture with smart connections, real-time insights, and seamless trading experiences.
            </p>
                      
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link href="/login">
                <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 backdrop-blur-sm border border-white/20">
                  Login
                </button>
              </Link>
              
              <Link href="/farmer">
                <button className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-emerald-700 font-semibold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 border border-white/30">
                  Join as Farmer
                </button>
              </Link>
              
              <Link href="/buyer">
                <button className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-emerald-700 font-semibold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 border border-white/30">
                  Join as Buyer
                </button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section with Modern Cards */}
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text animate-fade-in-up">
            Why Use AgriConnect?
          </h2>
          
          <p className="text-center text-slate-600 mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Empowering agriculture through innovative technology and seamless connections
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-emerald-100 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center transform transition-transform group-hover:rotate-12">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors">
                Sell Produce Easily
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                List your farm products and reach buyers quickly with minimal effort through our intuitive platform.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-emerald-100 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center transform transition-transform group-hover:rotate-12">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors">
                Connect with Buyers
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Find reliable local and national buyers for your fresh produce through our smart matching system.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-emerald-100 animate-fade-in-up md:col-span-1 md:mx-auto md:max-w-sm lg:col-span-1 lg:max-w-none lg:mx-0" style={{animationDelay: '0.8s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center transform transition-transform group-hover:rotate-12">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors">
                Smart Insights & Updates
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stay informed with real-time weather alerts and market prices — accessible even offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}