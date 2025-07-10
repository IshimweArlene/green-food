'use client';
import Image from 'next/image';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/login')
    }

    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
          <div className="mb-10 mt-16">
            <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
          </div>
          <div className="w-full mb-4">
            <label className="flex items-center gap-2 text-white">
              <FaUser />
              <input type="text" placeholder="USERNAME" className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none"/>
            </label>
          </div>
          <div className="w-full mb-6">
            <label className="flex items-center gap-2 text-white">
              <FaEnvelope />
              <input type="password" placeholder="EMAIL" className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none" />
            </label>
          </div>

          <div className="w-full mb-6">
            <label className="flex items-center gap-2 text-white">
              <FaLock />
              <input type="password" placeholder="PASSWORD" className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none" />
            </label>
          </div>

          <button className="w-full bg-white text-black py-2 rounded-full font-bold hover:bg-gray-200 transition-all">Signup</button>

          <p className="text-sm text-white mt-4 cursor-pointer">forgot your password ?</p>
          <button className="text-white mt-16 text-sm hover:text-blue-200" onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
    );
}
 
export default Signup;