function getSavedRecipesFromLocalStorage() {
    const savedRecipes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("recipe_")) {
        const value = localStorage.getItem(key);
        savedRecipes.push(JSON.parse(value));
      }
    }
    return savedRecipes;
  }