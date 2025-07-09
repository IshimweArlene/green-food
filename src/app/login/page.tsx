'use client';
import Image from 'next/image';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>

        <div className="relative z-10 ,t-24 flex flex-col items-center justify-center h-full px-6">
          <div className="mb-10 mt-6">
            <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
          </div>
          <div className="w-full mb-4">
            <label className="flex items-center gap-2 text-white">
              <FaUser />
              <input type="text" placeholder="USERNAME" className="w-full bg-transparent border-b border-white placeholder-white text-white px-2 py-2 outline-none"/>
            </label>
          </div>

          <div className="w-full mb-6">
            <label className="flex items-center gap-2 text-white">
              <FaLock />
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full bg-transparent border-b border-white placeholder-white text-white px-2 py-2 outline-none"
              />
            </label>
          </div>

          <button className="w-full bg-white text-black py-2 rounded-full font-bold hover:bg-gray-200 transition-all">
            LOGIN
          </button>

          <p className="text-sm text-white mt-4 underline cursor-pointer">
            forgot your password ?
          </p>

          <button className="text-white mt-6 underline text-sm hover:text-blue-200">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
