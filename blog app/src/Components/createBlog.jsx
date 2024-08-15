/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from 'react'

// const CreateBlog = () => {
//   return (
//     <div>
//     <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-basic-modal" data-hs-overlay="#hs-basic-modal">
//   Open modal
// </button>

// <div id="hs-basic-modal" className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-basic-modal-label">
//   <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
//     <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
//       <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
//         <h3 id="hs-basic-modal-label" className="font-bold text-gray-800 dark:text-white">
//           Modal title
//         </h3>
//         <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-basic-modal">
//           <span className="sr-only">Close</span>
//           <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//             <path d="M18 6 6 18"></path>
//             <path d="m6 6 12 12"></path>
//           </svg>
//         </button>
//       </div>
//       <div className="p-4 overflow-y-auto">
//         <p className="mt-1 text-gray-800 dark:text-neutral-400">
//           This is a wider card with supporting text below as a natural lead-in to additional content.
//         </p>
//       </div>
//       <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
//         <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-basic-modal">
//           Close
//         </button>
//         <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
//           Save changes
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

// export default CreateBlog;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {register,handleSubmit}  = useForm();
  const clickSubmit =async (data) => {
    try {
        console.log(data);
        const blog = await axiosInstance.post('/blog/create',data);
        
        console.log(blog);
    } catch (error) {
        alert(error);


    }
  };

  return (
    <form onSubmit={handleSubmit(clickSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
         {...register('BlogName',{required:true})}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          {...register('content',{required:true})}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post Blog
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
