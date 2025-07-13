'use client';
import { useRouter, usePathname } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const categories = [
  { name: 'Desserts', route: '/restaurant' },
  { name: 'Barbecue', route: '/barbecue' },
  { name: 'BreakFast', route: '/breakfast' },
  { name: 'Japanese', route: '/japanese' },
  { name: 'Healthy', route: '/healthy' },
];

const SearchNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="px-4 mb-4 relative">
     <div className="relative w-full">
        <input type="text" placeholder="What do you want to eat?" className="block w-52 h-7 text-gray-900 rounded-2xl px-2 text-[10px] my-4 mx-auto border-2 border-cyan-400 focus:outline-none"/>
        <div className="absolute right-[90px] top-[23px] text-black text-sm">
          <FaMagnifyingGlass />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto text-sm scrollbar-hide">
        {categories.map((cat) => {
          const isActive = pathname === cat.route;

          return (
            <div
              key={cat.route}
              onClick={() => router.push(cat.route)}
              className={`pb-1 text-[11px] cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'text-green-400 border-b border-green-400'
                  : 'text-gray-600'
              }`}
            >
              {cat.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchNav;
