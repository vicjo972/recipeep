const Recipe = require("../../models/recipe")

module.exports = {
  recipes: async () => {
    try {
      const recipesFetched = await Recipe.find()
      return recipesFetched.map(recipe => {
        return {
          ...recipe._doc,
          _id: recipe.id,
          createdAt: new Date(recipe._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  createRecipe: async args => {
    try {
      const { title, body } = args.recipe
      const recipe = new Recipe({
        title,
        body,
      })
      const newRecipe = await recipe.save()
      return { ...newRecipe._doc, _id: newRecipe.id }
    } catch (error) {
      throw error
    }
  },
}