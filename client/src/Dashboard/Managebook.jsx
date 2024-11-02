import React, { useEffect, useState } from 'react'
import { Checkbox, Table } from "flowbite-react";
import {Link, useParams} from "react-router-dom"

export default function Managebook() {
  const [Books, setBooks] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetch('http://localhost:5001/all-books')
      .then(res => res.json())
      .then(data => setBooks(data))
      // .then(data => console.log(data))
      .catch(err => console.error(err))

  }, [])

  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5001/book/${id}` ,{
      method: 'DELETE',
    })
    .then (res => res.json())
    .then(data => {
      alert("book deleted successfully")
      window.location.reload()
   })
    .catch(err => console.error(err))

  }
  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold text-blue-900'>Manage your book</h1>
      {/* table */}
      <div>
        <Table hoverable className='lg:w-[1100px]'>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Book Title</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell> Edit or manage </Table.HeadCell>
          </Table.Head>
          {/* map  */}
          {Books.map((book, index) => (
            <Table.Body>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>${book.price}</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/edit/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </Link>
                  <button  onClick={() => handleDelete(book._id)} className='bg-red-600 px-2 py-1 ml-3 font-semiload text-white rounded-md hover:bg-green-900'>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}


          {/* <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit  
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body> */}
        </Table>
      </div>

    </div>
  )
}
