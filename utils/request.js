const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_ID = process.env.NEXT_PUBLIC_API_ID;


export default {
    fetchStarter: {
        title: 'Starter',
        url: `api/recipes/v2?type=public&q=starter&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchBreakfast: {
        title: 'Breakfast',
        url: `api/recipes/v2?type=public&q=breakfast&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchBeef: {
        title: 'Beef',
        url: `api/recipes/v2?type=public&q=beef&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchChicken: {
        title: 'Chicken',
        url: `api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchSteak: {
        title: 'Steak',
        url: `api/recipes/v2?type=public&q=steak&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchLamb: {
        title: 'Lamb',
        url: `api/recipes/v2?type=public&q=lamb&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchPork: {
        title: 'Pork',
        url: `api/recipes/v2?type=public&q=pork&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchSeafood: {
        title: 'Seafood',
        url: `api/recipes/v2?type=public&q=seafood&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchGoat: {
        title: 'Goat',
        url: `api/recipes/v2?type=public&q=goat&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchVegan: {
        title: 'Vegan',
        url: `api/recipes/v2?type=public&q=vegan&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchVegetarian: {
        title: 'Vegetarian',
        url: `api/recipes/v2?type=public&q=vegetarian&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchSide: {
        title: 'Side',
        url: `api/recipes/v2?type=public&q=side&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchDesserts: {
        title: 'Desserts',
        url: `api/recipes/v2?type=public&q=dessert&app_id=${API_ID}&app_key=${API_KEY}`,
    },
    fetchMiscellaneous: {
        title: 'Miscellaneous',
        url: `api/recipes/v2?type=public&q=miscellaneous&app_id=${API_ID}&app_key=${API_KEY}`,
    },
}