'use client';
import Footer from "../components/Footer"; 
import Image from "next/image";
import {useRouter} from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Home = () => {
 const Router = useRouter();
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
        <div className="relative">
          <Image src={'/2.png'} alt="logo" width={80} height={70} className="absolute top-2 right-0 "/>
        </div>
        <div className="absolute top-32 left-16">
          <input type="text" placeholder="What do you want today?" className="w-52 h-7 text-gray-900 rounded-2xl px-2 text-[10px] m-2 border-2 border-cyan-400 focus:outline-none"/>
        </div>
        <div className="absolute top-36 right-20 text-black text-sm">
        <FaMagnifyingGlass/>
        </div>
        <div>
          <Image src={'/3.png'} alt="logo" width={190} height={150} className="absolute top-48 right-20"/>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Footer />
        </div>
        <div className="grid grid-rows-2 absolute bottom-20 left-10 gap-4 ">
            <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center cursor-pointer " onClick={() => Router.push('/restaurant')}>
                    <Image src={'/4.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Restaurant</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/market')}>
                    <Image src={'/5.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Market</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/pharmacy')}>
                    <Image src={'/6.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Pharmacy</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/pet')}>
                    <Image src={'/7.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Pet</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/store')}>
                    <Image src={'/8.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Stores</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/liquor')}>
                    <Image src={'/9.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Liquor</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/coins')}>
                    <Image src={'/10.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Coins</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => Router.push('/travel')}>
                    <Image src={'/11.png'} alt="pic" width={30} height={20} />
                    <p className="text-[10px] text-gray-950 text-center">Travel</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
