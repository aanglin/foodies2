import React, {useState} from 'react'
import { HiSearch } from "react-icons/hi";
import SearchRecipes from "./searchRecipes"


function SearchBar() {
  const [query, setQuery] = useState('')
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_ID = process.env.NEXT_PUBLIC_API_ID;

      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
   
      const getRecipe = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          })
          .then(data => {
            setRecipe(data);
            setQuery("");
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
          });
      };
  return (
    <>
    <div className="p-4 justify-center">
    <div className="relative flex items-center justify-center max-w-[500px] w-full m-auto pt-4 text-white z-10 ">
      <form
        onSubmit={getRecipe}
        className="flex justify-between items-center w-full m-auto p-3 bg-transparent border-2 border-gray-400 text-gray-400  rounded-2xl"
      >
        <div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none text-gray-400 focus:outline-none text-2xl placeholder:text-white/15"
            type="text"
            placeholder="Search for a recipe"
             value={query}
          />
        </div>
        <button onClick={getRecipe}>
          <HiSearch size={25} />
        </button>
      </form>
    </div>
    </div>
    <SearchRecipes results={recipe} />
    </>
  )
}

export default SearchBar;
