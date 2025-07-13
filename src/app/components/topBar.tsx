'use client';
import { FaArrowLeft, FaShoppingBag } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className='bg-gray-700 rounded-full p-1'>
         <FaArrowLeft size={15} color='white' />
        </div>
      <p className="font-bold text-sm text-gray-800 ">
        R. Itapaiuna, <span className="font-semibold">2434</span> <span className="text-green-400">▼</span>
      </p>
      <FaShoppingBag color='black'/>
    </div>
  );
};

export default TopBar;
