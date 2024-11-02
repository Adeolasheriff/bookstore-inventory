import React, { useEffect, useState } from 'react'
import Bookcard from '../components/Bookcard'

export default function BestSellingBooks() {
    const [books,SetBooks] = useState([])

     useEffect(()=> {
       fetch('http://localhost:5001/all-books')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => SetBooks(data))
        .catch(err => console.log(err))
     },[])
  return (
    <div>
    <Bookcard books={books} headline='Best Selling Books'/>
    </div>
  )
}

