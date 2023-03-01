import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './modal';


function Thumbnail({ results }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState(null);

  function handleOpenModal(hit) {
    setSelectedHit(hit);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedHit(null);
    setIsModalOpen(false);
  }

  return (
    <>
      {results.hits.map((hit) => (
        <div className='w-full pt-12' key={hit.recipe.uri}>
          <div className='bg-slate-50 w-96 rounded-3xl'>
            <div className='flex justify-center rounded-3xl pt-6'>
              <Image
                className='rounded-3xl'
                src={hit.recipe.image}
                width={300}
                height={300}
                alt='/'
              />
            </div>
            <h1 className='flex justify-center p-2'>{hit.recipe.label}</h1>
            <div className='flex justify-center'>
              <button onClick={() => handleOpenModal(hit)}>Click Here for Recipe</button>
            </div>
          </div>
        </div>
      ))}
      {selectedHit && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} hit={selectedHit} />
      )}
    </>
  );
}
export default Thumbnail;

