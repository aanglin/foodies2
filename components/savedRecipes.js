import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SavedModal from './savedModal';
import axios from 'axios';
import Cookies from 'js-cookie'

function setUserId(userId) {
  Cookies.set('userId', userId)
}

function getUserId() {
  return Cookies.get('userId')
}


function SavedRecipes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);
  
  useEffect(() => {
    const userId = getUserId();
    axios.get('/api/saved', {params: { userId }})
    .then(response => {
      setSavedRecipes(response.data);
      console.log(response.data);
      console.log(savedRecipes);
      
    })
    .catch(error => {
      console.error('Error retrieving saved recipes:', error);
    });
    
  }, []);

  function handleOpenModal(recipe) {
    const recipeData = savedRecipes.find(savedRecipe => savedRecipe._id === recipe._id);
    setSelectedHit(recipeData);
    setIsModalOpen(true);
  }
  
  
  // function handleOpenModal(recipe) {
  //   setSelectedHit(recipe);
  //   setIsModalOpen(true);
  // }

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
      {Array.from(savedRecipes).map((recipe) => (
        <div className='pt-12' key={recipe._id}>
          <div className='bg-slate-50 w-[32rem] rounded-3xl'>
            <div className='flex justify-center rounded-3xl pt-6'>
              <Image
                className='rounded-3xl'
                src={recipe.hit.recipe.image}
                width={300}
                height={300}
                alt='/'
              />
            </div>
            <h1 className='flex justify-center p-2'>{recipe.hit.recipe.label}</h1>
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





