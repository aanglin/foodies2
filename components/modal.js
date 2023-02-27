import React from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Import Tailwind classes for the modal
const overlayClasses = 'fixed inset-0 bg-black bg-opacity-50';
const modalClasses = 'fixed inset-0 z-10 overflow-y-auto';
const contentClasses = 'relative p-8 mx-auto my-4 w-full max-w-md';

function Modal({ isOpen, onClose, results }) {
    return (
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={onClose}
          className={modalClasses}
          overlayClassName={overlayClasses}
        >
            <div className='flex justify-center pt-48 pl-32'>
          <div className=' bg-slate-50 text-gray-600 w-1/4 p-5'>
            {/* Content of the modal */}
            <h2 className="flex justify-center text-xl font-bold mb-4">{results.meals[0].strMeal}</h2>
            <p className="flex justify-center mb-4">Modal content goes here</p>
            <div className='flex justify-center'>
            <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
              Close
            </button>
            </div>
          </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
  export default Modal;