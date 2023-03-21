import clientPromise from '../../../lib/connect'


export default async function handler(req, res) {
    const client = await clientPromise
    const collection = client.db('Foodies').collection('Recipes')
        const { userId } = req.query;
        const recipes = await collection.find({userId}).toArray()
        res.json(recipes)
       
}