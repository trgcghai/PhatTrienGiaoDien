import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipeSection from "./components/RecipeSection";

function App() {
  const summerRecipes = [
    {
      id: 1,
      title: "Italian-style tomato",
      image: "/dishimage.png",
      time: "20 minutes",
    },
    {
      id: 2,
      title: "Spaghetti with vegetables",
      image: "/dishimage.png",
      time: "30 minutes",
    },
    {
      id: 3,
      title: "Lotus delight salad",
      image: "/dishimage.png",
      time: "15 minutes",
    },
    {
      id: 4,
      title: "Snack cakes",
      image: "/dishimage.png",
      time: "25 minutes",
    },
  ];

  const videoRecipes = [
    {
      id: 1,
      title: "Salad with cabbage and shrimp",
      image: "/dishimage.png",
      time: "20 minutes",
    },
    {
      id: 2,
      title: "Salad of cave beans, shrimp and potatoes",
      image: "/dishimage.png",
      time: "25 minutes",
    },
    {
      id: 3,
      title: "Sunny-side up fried egg",
      image: "/dishimage.png",
      time: "10 minutes",
    },
    {
      id: 4,
      title: "Lotus delight salad",
      image: "/dishimage.png",
      time: "20 minutes",
    },
  ];

  return (
    <div className="">
      <Header />
      <Hero />

      <RecipeSection
        title="This Summer Recipes"
        subtitle="We have all your Independence Day sweets covered."
        recipes={summerRecipes}
        bgColor="white"
      />

      <RecipeSection
        title="Recipes With Videos"
        subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
        recipes={videoRecipes}
        bgColor="gray-50"
      />
    </div>
  );
}

export default App;
