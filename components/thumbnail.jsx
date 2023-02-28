import Image from 'next/image'
import React, {useState} from 'react'
import Modal from './modal';

function thumbnail({results}) {
  console.log(results)
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <div className='bg-slate-50 w-fit rounded-3xl'>
      <div>
      <Image 
      className='rounded-3xl p-4'
      src={results.hits[0].recipe.image}
     width={300}
     height={300}
     alt='/'
      />
      </div>
      <h1 className='flex justify-center'>
        {results.hits[0].recipe.label}
      </h1>
      <div className='flex justify-center'>
      <button onClick={handleOpenModal}>Click Here for Recipe</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} results={results}/>
      </div>
      </div>
  )
}

export default thumbnail