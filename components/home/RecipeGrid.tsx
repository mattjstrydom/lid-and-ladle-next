const recipes = [
  {
    name: 'Citrus & Spice Mocktail',
    description:
      'Fill your Citrus & Spice bottle three-quarters with apple juice, top up with soda water, add ice, and garnish each glass with half a slice of fresh orange.',
  },
  {
    name: 'Berry & Bloom Iced Tea',
    description:
      'Fill your Berry & Bloom bottle with cooled rooibos tea, ice, and a touch of honey. Add fresh berries or mint to each glass for extra colour and freshness.',
  },
  {
    name: 'Petal & Zest Gin & Tonic',
    description:
      "Fill your Petal & Zest bottle with tonic and let it steep for at least 10 minutes. Add a shot of gin to each glass and garnish with fresh lemon or cucumber. Don't forget the ice!",
  },
  {
    name: 'Citrus & Spice Glühwein',
    description:
      "Heat a bottle of red wine in a pot (don't boil), then add the Citrus & Spice mix (refill pack). Let it infuse for a few minutes and sweeten to taste with sugar or honey. Add a splash of brandy if you like, and serve warm with a fresh orange slice.",
  },
  {
    name: 'Berry & Bloom Mocktail',
    description:
      'Fill your Berry & Bloom bottle with half sparkling water and half cranberry or pomegranate juice, then serve with a slice of fresh lemon. A handy tip: Add ice to your bottle first to keep the ingredients from floating to the top.',
  },
  {
    name: 'Petal & Zest Cooler',
    description:
      'Fill your bottle with still or sparkling water and a few fresh cucumber ribbons, then refrigerate for 10–15 minutes. Serve over ice for a refreshing, floral spa-style drink, and add fresh mint leaves for an extra burst of freshness.',
  },
]

export default function RecipeGrid() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-2xl font-normal text-center mb-10">Recipe Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <article key={recipe.name} className="bg-brand-card rounded-lg p-6">
              <h3 className="font-semibold mb-3">{recipe.name}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{recipe.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
