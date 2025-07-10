'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
const Confirm = () => {
    const router = useRouter();
    const handleClick = () => {
     router.push('/login')
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute w-full h-55 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
                    <div className="absolute top-32">
                    <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
                    </div>
                    <div className="mt-40 text-center">
                    <h1 className="text-sm text-white font-black">EMAIL SENT!</h1>
                    <p className="text-sm">Password reset instructions have been sent to</p>
                    <p className="text-sm mt-4">If you can't find it in your inbox check  spam, junk, and more.</p>
                    <p className="text-sm mt-12">Did not work?Doubts?</p>
                    <p className="text-sm text-blue-600 mt-2 cursor-pointer">Click here</p>
                    </div>
                    <button className="text-white text-sm border-3 rounded-2xl px-8 py-1 font-black border-white hover:text-blue-200" onClick={handleClick}>LOGIN</button>
                </div>     
            </div>
        </div>
    );
}
 
export default Confirm;