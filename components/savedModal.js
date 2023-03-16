import React from "react";
 import { Fragment } from "react";
 import { Dialog, Transition } from "@headlessui/react";
 import Image from "next/image";
import Link from "next/link";

 const overlayClasses = "fixed inset-0 bg-black bg-opacity-50";
 const modalClasses = "fixed inset-0 z-10 overflow-y-auto";
 const contentClasses = "relative p-8 mx-auto my-4 w-full max-w-md";

function Modal({ isOpen, onClose, hit }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        className={modalClasses}
        overlayClassName={overlayClasses}
      >
        <div className="flex justify-center pt-48 pl-32">
          <div className="w-fit bg-slate-50 text-gray-600 p-5 rounded-3xl md:w-fit text-2xl">
            {/* Content of the modal */}
            <div className="flex justify-center">
              <Image
                className="rounded-3xl p-4"
                src={hit.recipe.image}
                width={300}
                height={300}
                alt="/"
              />
            </div>
            <h2 className="flex justify-center text-xl font-bold mb-4">
              {hit.recipe.label}
            </h2>
            <p className="flex justify-center mb-4 tracking-wide text-gray-500">
              Ingredients
            </p>
            <div className="flex justify-center flex-wrap text-gray-500 tracking-wider">
              <ul>
                {hit.recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index} className="text-center">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center pt-4 ">
              <button
                onClick={onClose}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
              >
                Close
              </button>
              <div className="flex pl-5">
              <Link
                href={hit.recipe.url}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
              >
                Instructions
              </Link>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
 }

 export default Modal

