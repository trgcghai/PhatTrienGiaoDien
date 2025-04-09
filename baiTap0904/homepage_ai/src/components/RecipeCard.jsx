import { Heart } from "lucide-react";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="h-48 relative">
        <img
          src={recipe.image || "/dishimage.png"}
          alt={recipe.title}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{recipe.title}</h3>
          <button className="text-pink-500">
            <Heart size={20} />
          </button>
        </div>
        <div className="text-pink-500 bg-pink-500/20 inline-block rounded-full p-2 text-sm mt-4">
          {recipe.time}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
