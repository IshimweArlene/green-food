'use client';
import TopBar from "../components/topBar";
import SearchNav from "../components/searchBar";
import MealCard from "../components/mealCard";
import { meals } from "../meals/data";
const BreakFast = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
              <TopBar />      
              <SearchNav />
               <div className="px-4 py-2 overflow-y-auto h-[480px]">
                {meals.map((meal, i) => (
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
 
export default BreakFast;