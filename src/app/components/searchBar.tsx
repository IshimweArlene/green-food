'use client';
import { FaSearch } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const categories = ['Desserts', 'Barbecue', 'BreakFast', 'Japanese', 'Healthy'];

const SearchNav = () => {
  return (
    <div className="px-4 mb-4">
        <div>
            <input type="text" placeholder="What do you want to eat?" className="block w-52 h-7 text-gray-900 rounded-2xl px-2 text-[10px] my-4 mx-auto border-2 border-cyan-400 focus:outline-none"/>
        </div>
        <div className="absolute top-17 right-20 text-black text-sm">
         <FaMagnifyingGlass/>
        </div>

      <div className="flex gap-4 overflow-x-auto text-sm">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`pb-1 text-[11px] cursor-pointer ${
              i === 0 ? 'text-green-400 border-b border-green-400' : 'text-gray-600'
            }`}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchNav;
