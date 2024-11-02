import React, { useEffect, useState } from 'react'
import bookgirl from "../assets/bookimages/bookgirl.jpeg"

export default function Dashboard() {
  const [book,setBooks] = useState([])
   
  useEffect(( ) => {
    fetch('http://localhost:5001/all-books')
     .then(res => res.json)
     .then(data => setBooks(data.slice(0,8)))
     .catch(error => console.error(error))

  },[])
  return (
    <div className='bg-teal-50 h-screen'>
      <div className='grid grid-cols-12 gap-8 m-10'>
        <div className='col-span-6'>
          <h1 className='font-bold text-violet-900 text-3xl mb-3'>Welcome to Bookstore Dashboard</h1>
          <p className='font-semibold '>Manage your books,authors and order here</p>
        </div>
        <div className='col-span-4'>
          <form class="max-w-md mx-auto">
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>

        </div>
      </div>
      {/* your dashboard content */}
      <div className='grid grid-cols-12 gap-8 m-10 bg-white p-10 '>
        <div className='col-span-6'>
          <h2 className='text-2xl font-semibold mb-2'>Upload your book to increase your sales</h2>
          <p>Engage your shop book with this dashboard and make sales everyday to your shop</p>
          <button className='bg-blue-800 text-white mt-2 p-3 rounded-full'> + Add New Book</button>
        </div>
        <div className='col-span-6' >
          <img src={bookgirl} alt="bookgirl" className='h-56 w-3/4' />
        </div>
      </div>

        <h1>Popular Books 🔥</h1>
      <div className='grid grid-cols-12'>

        { 
          book.map(book => (
            <div key={book._id} className='col-span-3'>
              <img src={book.imageUrl} alt="" className='w-52 h-52 rounded-md' />
              <div>
                <h3 className='text-sm font-semibold'>{book.bookTitle}</h3>
                <p className='text-xs'>{book.authorName}</p>
              </div>
                 </div>
            
          ))
        }
      </div>

    </div>
  )
}
