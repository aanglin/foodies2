import Image from 'next/image';
import React, { useState } from 'react';
import SavedModal from './savedModal';
import { useLocalStorage } from 'react-use-storage';
import Thumbnail from './thumbnail';


function retrieveFromLocalStorage(url) {
  const key = `hit_${url}`;
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
}

function SavedRecipes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState(null);
  const [savedRecipes, setSavedRecipes] = useLocalStorage('savedRecipes', []);

  const filteredSavedRecipes = savedRecipes
  .filter((hit) => hit.recipe.url.startsWith("http"))
  .map((hit) => retrieveFromLocalStorage(hit.recipe.url));

  {filteredSavedRecipes.map((hit) => (
    <Thumbnail
      key={hit}
      hit={hit}
    />
  ))}
  
  function handleOpenModal(recipe) {
    setSelectedHit(recipe);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedHit(null);
    setIsModalOpen(false);
  }

  function Overlay() {
    return (
      <div className="fixed inset-0 bg-black opacity-0 z-10"></div>
    );
  }
  return (
    <>
      {savedRecipes.map((recipe) => (
        <div className='w-full pt-12' key={recipe.recipe.uri}>
          <div className='bg-slate-50 w-[32rem] rounded-3xl'>
            <div className='flex justify-center rounded-3xl pt-6'>
              <Image
                className='rounded-3xl'
                src={recipe.recipe.image}
                width={300}
                height={300}
                alt='/'
              />
            </div>
            <h1 className='flex justify-center p-2'>{recipe.recipe.label}</h1>
            <div className='flex justify-center'>
              <button onClick={() => handleOpenModal(recipe)}>Click Here for Recipe</button>
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && <Overlay />}
      {selectedHit && (
        <SavedModal isOpen={isModalOpen} onClose={handleCloseModal} hit={selectedHit} />
      )}
      {isModalOpen && <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="fixed inset-0 bg-black opacity-60 w-full h-full"></div>
      </div>}
    </>
  );
}

export default SavedRecipes;





