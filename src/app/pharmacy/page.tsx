'use client';

import { FaMagnifyingGlass } from "react-icons/fa6";
import MealCard from "../components/mealCard";
import TopBar from "../components/topBar";
import { pharmacy } from '../meals/pharmacy';

const Pharmacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
        <TopBar />
        <div className="absolute top-22 left-16">
          <input type="text" placeholder="What do you want today?" className="w-52 h-7 text-gray-900 rounded-2xl px-2 text-[10px] m-2 border-2 border-cyan-400 focus:outline-none"/>
        </div>
        <div className="absolute top-26 right-20 text-black text-sm">
          <FaMagnifyingGlass/>
        </div>
        <div className="absolute top-40">
          {pharmacy.map((item, index) => (
            <MealCard
              key={index}
              name={item.name}
              rating={item.rating}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800 rounded-b-3xl flex items-center justify-center">
          <p className="text-white text-sm">Powered by YourApp</p>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
