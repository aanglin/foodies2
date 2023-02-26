const API_KEY = process.env.API_KEY;

export default {
    fetchBeef: {
        title: 'Beef',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchChicken: {
        title: 'Chicken',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchSteak: {
        title: 'Steak',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchLamb: {
        title: 'Lamb',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchPork: {
        title: 'Pork',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchSeafood: {
        title: 'Seafood',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchSide: {
        title: 'Side',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchStarter: {
        title: 'Starter',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchVegan: {
        title: 'Vegan',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchDesserts: {
        title: 'Desserts',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchMiscellaneous: {
        title: 'Miscellaneous',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    fetchVegetarian: {
        title: 'Vegetarian',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    fetchBreakfast: {
        title: 'Breakfast',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    fetchGoat: {
        title: 'Goat',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
}