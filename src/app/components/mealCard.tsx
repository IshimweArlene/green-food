import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {
  name: string;
  rating: number;
  description: string;
  image: string;
};

const MealCard = ({ name, rating, description, image }: Props) => {
  return (
    <div className="flex gap-3 mb-4 border rounded-lg p-2 shadow-sm">
      <Image
        src={image}
        alt={name}
        width={90}
        height={90}
        className="rounded-md object-cover"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-semibold text-sm">
          {name} <FaCircleCheck  />
        </div>
        <div className="flex items-center text-yellow-500 text-xs mb-1">
          <FaStar /> <span className="ml-1">{rating}</span>
        </div>
        <p className="text-[10px] text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default MealCard;
