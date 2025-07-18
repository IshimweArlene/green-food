import { FaMagnifyingGlass } from "react-icons/fa6";
import MealCard from "../components/mealCard";
import TopBar from "../components/topBar";
import {pet} from '../meals/pet'
const Pet = () => {
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
                {pet.map((meal, i) =>(
                    <MealCard
                    key={i}
                    name={meal.name}
                    rating={meal.rating}
                    description={meal.description}
                    image={meal.image}
                    />
                ))}
            </div>

          </div>
        </div>
    );
}
 
export default Pet;