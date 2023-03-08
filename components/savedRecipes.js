import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './modal';

function SavedRecipes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState(null);
  const keys = Object.keys(localStorage);
  
  const savedRecipes = keys
    .filter((key) => key.startsWith("hit_"))
    .map((key) => JSON.parse(localStorage.getItem(key)));
    
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
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} hit={selectedHit} />
      )}
      {isModalOpen && <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="fixed inset-0 bg-black opacity-60 w-full h-full"></div>
      </div>}
    </>
  );
}

export default SavedRecipes;





