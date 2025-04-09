import "./App.css";
import EditorPicks from "./components/EditorPicks";
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

  const editorPicks = [
    {
      id: 1,
      title: "Stuffed sticky rice ball",
      image: "/dishimage.png",
      time: "34 minutes",
      author: {
        name: "Jennifer King",
        avatar: "/Avatar.png",
      },
      description:
        "Stuffed sticky rice ball: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling.",
    },
    {
      id: 2,
      title: "Strawberry smoothie",
      image: "/dishimage.png",
      time: "40 minutes",
      author: {
        name: "Matthew Martinez",
        avatar: "/Avatar.png",
      },
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    },
    {
      id: 3,
      title: "Latte Art",
      image: "/dishimage.png",
      time: "45 minutes",
      author: {
        name: "Sarah Hill",
        avatar: "/Avatar.png",
      },
      description:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    },
    {
      id: 4,
      title: "Butter fried noodles",
      image: "/dishimage.png",
      time: "35 minutes",
      author: {
        name: "Julia Lopez",
        avatar: "/Avatar.png",
      },
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
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

      <EditorPicks
        title="Editor's pick"
        subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
        picks={editorPicks}
      />
    </div>
  );
}

export default App;
