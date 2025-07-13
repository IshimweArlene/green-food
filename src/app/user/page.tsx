import Image from "next/image";
const User = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
             <div className="relative">
               <Image src={'/2.png'} alt="logo" width={80} height={70} className="absolute top-2 right-0 "/>
             </div>
        </div>
        </div>



    );
}
 
export default User;