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

// import Image from 'next/image';
// import React, { useState } from 'react';
// import Modal from './modal';

// function Thumbnail({ results }) {
//   console.log(results);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedResult, setSelectedResult] = useState(null);

//   function handleOpenModal(result) {
//     setSelectedResult(result);
//     setIsModalOpen(true);
//   }

//   function handleCloseModal() {
//     setSelectedResult(null);
//     setIsModalOpen(false);
//   }

//   return (
//     <>
//       {results.hits.map((hit) => (
//         <div className='w-full'>
//         <div className='bg-slate-50 w-96 rounded-3xl' key={hit.recipe.uri}>
//           <div className='flex justify-center rounded-3xl pt-6'>
//             <Image
//               className='rounded-3xl'
//               src={hit.recipe.image}
//               width={300}
//               height={300}
//               alt='/'
//             />
//           </div>
//           <h1 className='flex justify-center'>{hit.recipe.label}</h1>
//           <div className='flex justify-center'>
//             <button onClick={() => handleOpenModal(hit.recipe)}>Click Here for Recipe</button>
//           </div>
//         </div>
//         </div>
//       ))}
//       {selectedResult && (
//         <Modal isOpen={isModalOpen} onClose={handleCloseModal} result={selectedResult} />
//       )}
//     </>
//   );
// }

// export default Thumbnail;


// import Image from 'next/image';
// import React, { useState } from 'react';
// import Modal from './modal';

// function Thumbnail({ results }) {
//   console.log(results);

//   const [selectedResult, setSelectedResult] = useState(null);

//   function handleOpenModal(result) {
//     setSelectedResult(result);
//   }

//   function handleCloseModal() {
//     setSelectedResult(null);
//   }

//   return (
//     <>
//       {results.hits.map((hit) => (
//         <div className='w-full' key={hit.recipe.uri}>
//           <div className='bg-slate-50 w-96 rounded-3xl'>
//             <div className='flex justify-center rounded-3xl pt-6'>
//               <Image
//                 className='rounded-3xl'
//                 src={hit.recipe.image}
//                 width={300}
//                 height={300}
//                 alt='/'
//               />
//             </div>
//             <h1 className='flex justify-center'>{hit.recipe.label}</h1>
//             <div className='flex justify-center'>
//               <button onClick={() => handleOpenModal(hit)}>Click Here for Recipe</button>
//             </div>
//           </div>
//         </div>
//       ))}
//       {selectedResult && (
//         <Modal result={selectedResult} onClose={handleCloseModal} />
//       )}
//     </>
//   );
// }

// export default Thumbnail;



// import Image from 'next/image';
// import React, { useState } from 'react';
// import Modal from './modal';

// function Thumbnail({ results }) {
//   console.log(results);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function handleOpenModal() {
//     setIsModalOpen(true);
//   }

//   function handleCloseModal() {
//     setIsModalOpen(false);
//   }

//   return (
//     <>
//       {results.hits.map((hit) => (
//         <div className='w-full'>
//         <div className='bg-slate-50 w-96 rounded-3xl' key={hit.recipe.uri}>
//           <div className='flex justify-center rounded-3xl pt-6'>
//             <Image
//               className='rounded-3xl'
//               src={hit.recipe.image}
//               width={300}
//               height={300}
//               alt='/'
//             />
//           </div>
//           <h1 className='flex justify-center'>{hit.recipe.label}</h1>
//           <div className='flex justify-center'>
//             <button onClick={handleOpenModal}>Click Here for Recipe</button>
//             <Modal isOpen={isModalOpen} onClose={handleCloseModal} key={hit.recipe.uri} results={results} />
//           </div>
//         </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Thumbnail;





// import Image from 'next/image'
// import React, {useState} from 'react'
// import Modal from './modal';

// function thumbnail({results}) {
//   console.log(results)
  
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function handleOpenModal() {
//     setIsModalOpen(true);
//   }

//   function handleCloseModal() {
//     setIsModalOpen(false);
//   }
//   return (
//     <div className='bg-slate-50 w-fit rounded-3xl'>
//       <div>
//       <Image 
//       className='rounded-3xl p-4'
//       src={results.hits[0].recipe.image}
//      width={300}
//      height={300}
//      alt='/'
//       />
//       </div>
//       <h1 className='flex justify-center'>
//         {results.hits[0].recipe.label}
//       </h1>
//       <div className='flex justify-center'>
//       <button onClick={handleOpenModal}>Click Here for Recipe</button>
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal} results={results}/>
//       </div>
//       </div>
//   )
// }

// export default thumbnail