import Link from "next/link";

const recipeCards = [
  {
    title: "Homestyle Rajma Masala",
    category: "Slow Sunday",
    time: "45 min",
    spice: "Garam Masala",
    className: "editorial-recipe-card recipe-feature-large recipe-rajma",
  },
  {
    title: "Jeera Aloo",
    category: "Weeknight",
    time: "25 min",
    spice: "Cumin Powder",
    className: "editorial-recipe-card recipe-jeera",
  },
  {
    title: "Turmeric Vegetable Khichdi",
    category: "One Pot",
    time: "35 min",
    spice: "Turmeric Powder",
    className: "editorial-recipe-card recipe-khichdi",
  },
  {
    title: "Dhaba-Style Paneer",
    category: "Weekend",
    time: "40 min",
    spice: "Kitchen King Masala",
    className: "editorial-recipe-card recipe-feature-wide recipe-paneer",
  },
  {
    title: "Coriander Chutney",
    category: "Fresh Side",
    time: "10 min",
    spice: "Coriander Powder",
    className: "editorial-recipe-card recipe-chutney",
  },
] as const;

export default function RecipesContent() {
  return (
    <>
      <section className="editorial-recipes-hero">
        <div className="editorial-recipes-index" aria-hidden="true">
          <span>01</span>
          <i></i>
          <small>Soilva Kitchen Journal</small>
        </div>

        <div className="editorial-recipes-copy">
          <span className="about-kicker">Cook with Soilva</span>
          <h1>
            Recipes for the way
            <em>India cooks every day.</em>
          </h1>
          <p>
            A growing journal of practical meals, family favourites and
            spice-led ideas—written for real kitchens rather than perfect
            photographs.
          </p>
          <a href="#recipe-journal">Open the journal</a>
        </div>

        <aside className="editorial-recipes-note">
          <span>Today’s thought</span>
          <blockquote>
            A good masala does not overpower a dish. It helps every ingredient
            find its place.
          </blockquote>
        </aside>
      </section>

      <section className="editorial-recipe-strip">
        <div><span>01</span><strong>Everyday Meals</strong></div>
        <div><span>02</span><strong>Quick Recipes</strong></div>
        <div><span>03</span><strong>Weekend Specials</strong></div>
        <div><span>04</span><strong>Chutneys & Sides</strong></div>
      </section>

      <section className="recipe-journal" id="recipe-journal">
        <header>
          <div>
            <span className="about-kicker">The recipe journal</span>
            <h2>Start with what is already in your kitchen.</h2>
          </div>
          <p>
            These are preview stories for the Soilva recipe library. Full
            ingredient lists, steps and serving guidance can be added recipe by
            recipe.
          </p>
        </header>

        <div className="editorial-recipe-grid">
          {recipeCards.map((recipe) => (
            <article className={recipe.className} key={recipe.title}>
              <div className="editorial-recipe-image">
                <span>{recipe.category}</span>
              </div>
              <div className="editorial-recipe-copy">
                <small>{recipe.time} · Best with {recipe.spice}</small>
                <h3>{recipe.title}</h3>
                <p>
                  A practical, familiar recipe designed around balanced spice
                  use and everyday ingredients.
                </p>
                <Link href="/contact">Request the full recipe <b>↗</b></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="recipe-editor-note">
        <div>
          <span>From the editor</span>
          <h2>Recipes should be useful before they are beautiful.</h2>
        </div>
        <p>
          Soilva’s recipe content will focus on clear quantities, realistic
          cooking times, substitutions and repeatable results for home cooks.
        </p>
      </section>

      <section className="recipe-request-band">
        <span className="about-kicker">Help shape the journal</span>
        <h2>Which recipe should Soilva publish next?</h2>
        <Link href="/contact">Send your recipe request</Link>
      </section>
    </>
  );
}
