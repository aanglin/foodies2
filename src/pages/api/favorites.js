import clientPromise from '../../../lib/connect'

export default async function handler(req, res) {
  const client = await clientPromise
  const collection = client.db('Foodies').collection('Recipes')

  switch (req.method) {
    case 'POST':
      const newRecipe = req.body // assuming the request body contains the recipe data
      const result = await collection.insertOne(newRecipe)
      res.json(result)
      break
    
      case 'GET':
        const recipes = await collection.find({}).toArray()
        res.json(recipes)
        break
      
        case 'DELETE':
          const recipe = await collection.deleteOne({})
          res.json(recipe)
          break
        
    default:
      res.status(405).end() // method not allowed
      break
  }
}
