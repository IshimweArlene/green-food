 'use client'
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Reser = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/login')
    }
    const onClick = () =>{
      router.push('/confirm')
    }
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl">
         <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
              <div className="absolute top-36">
                <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
              </div>
              <div className="w-full mb-8 mt-24">
                <label className="flex items-center gap-2 text-white mt-32">
                    <FaUser />
                    <input type="text" placeholder="USERNAME" className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none"/>
                </label>
              </div>
              <button className="text-white text-sm border-3 rounded-2xl px-8 py-1 font-black border-white hover:text-blue-200" onClick={onClick}> SEND</button>
              <button className="text-white mt-16 text-md hover:text-blue-200" onClick={handleClick}>Login</button>
            </div>     
        </div>
      </div>
    );
}
 
export default Reser;