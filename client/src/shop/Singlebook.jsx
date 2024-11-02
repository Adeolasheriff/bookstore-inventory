import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Singlebook() {
  const { _id, bookTitle, imageUrl, description, authorName, category, bookpdfUrl, price } = useLoaderData();
  return (
    <div className=' bg-teal-200 pt-10 pb-64'>
      <div className='mt-28 mx-4 lg:mx-24 grid grid-cols-10 bg-white p-4 rounded'>
      <div className='lg:col-span-4 md:col-span-10 col-span-10 md:order-last lg:order-first'>
        <img className='h-96' src={imageUrl} alt={bookTitle} />
      </div>
      <div className='lg:col-span-6 md:col-span-10 col-span-10 mb-8'>
        <h1 className='text-4xl font-bold mt-8'>{bookTitle}</h1>
        <h2 className='text-2xl font-bold'>{authorName}</h2>
        <h6 className='text-xl font-bold text-teal-500'>{category}</h6>
        <p className='font-bold'>{description}</p>
        <a href={bookpdfUrl} className='text-blue-700 underline'>Download Pdf</a>
        <p className='text-2xl font-bold mt-6 bg-lime-500 rounded-lg p-1 w-32'> price: ${price} </p>
      </div>
     </div>
    </div>
  )
}
