const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Recipe {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }


  input RecipeInput {
    title: String!
    body: String!
  }

  type Query {
    recipes:[Recipe!]
  }

  type Mutation {
    createRecipe(recipe:RecipeInput): Recipe
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)