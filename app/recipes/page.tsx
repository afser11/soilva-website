import type { Metadata } from "next";
import Header from "../../components/Header";
import RecipesContent from "../../components/recipes/RecipesContent";

export const metadata: Metadata = {
  title: "Indian Recipes with Soilva Spices | Soilva",
  description: "Explore practical Indian recipe ideas and cooking inspiration featuring Soilva spices."
};

export default function RecipesPage(){
  return <div className="site-shell"><Header/><main className="recipes-page"><RecipesContent/></main></div>;
}
