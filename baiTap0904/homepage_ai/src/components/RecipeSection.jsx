import RecipeCard from "./RecipeCard";

function RecipeSection({ title, subtitle, recipes, bgColor = "white" }) {
  return (
    <section className={`py-16 bg-${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-1">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-10">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeSection;
