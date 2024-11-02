import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
export default function Uploadbook() {
    const bookCategory = [
        "Fiction",
        "Non-fiction",
        "Children's",
        "Biography",
        "History",
        "Cookbook",
        "Mystery",
        "Family",
        "Technology",
        "Science Fiction",
        "Romance",
        "Thriller",
        "Crime",
        "Business",
        "Research",
        "programming",
        "Adventure",
        "Poetry",
        "Religion",
        "Sports",
        "Art",
        "sci-fi",
    ]

    const [selectedBookCategory, setSelectBookCategory] = useState(bookCategory[0])

    const handleCategoryChange = (e) => {
        console.log(e.target.value)
        setSelectBookCategory(e.target.value)
    }

    const handleBookSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const bookTitle = form.bookTitle.value
        // console.log(bookTitle)
        const authorName = form.authorName.value
        const description = form.description.value
        const bookPdfUrl = form.bookPdfUrl.value
        const category = form.categoryName.value
        const imageUrl = form.imageUrl.value
        const price = form.price.value

        const bookObjt = {
            authorName,
            bookTitle,
            category,
            description,
            bookPdfUrl,
            imageUrl,
            price
        }
        console.log(bookObjt)

        fetch('http://localhost:5001/upload-book', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookObjt)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(data => {
                alert('book uploaded succesfully')
                // form.reset()

            })
            .catch(err => console.log(err))

    }


    return (
        <div className='px-4 my-12'>
            <h1 className='mb-8 text-3xl font-bold text-blue-950'> Upload a New Book</h1>
            {/* Form goes here */}
            <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="" value="BookTitle" />
                        </div>
                        <TextInput id="imageUrl" type="text" name='bookTitle' placeholder='Image Url' required shadow />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="AuthorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder="Author Name" required shadow />
                    </div>
                </div>
                {/* second row */}

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value='imageUrl' />
                        </div>
                        <TextInput
                            id="imageUrl"
                            type="text"
                            name='imageUrl'
                            placeholder='Book image url'
                            required shadow />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book category" />
                        </div>
                        <Select onChange={handleCategoryChange} name="categoryName"
                            id="inputState" className='w-full rounded' value={selectedBookCategory} required shadow>
                            <option>Select Category</option>
                            {
                                bookCategory.map((category, index) => (
                                    <option key={index} value={category}> {category}</option>
                                ))
                            }
                        </Select>
                    </div>
                </div>

                {/* third row */}
                <div className=''>
                    <div className='lg:w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value='book description' />
                        </div>
                        <Textarea id="description"
                            type="text" name='description'
                            placeholder='Write your book descriptions here'
                            required shadow row={5} />
                    </div>
                </div>
                {/* fourth row */}

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPdfUrl" value='image pdf Url' />
                        </div>
                        <TextInput
                            id="bookPdfUrl"
                            type="text"
                            name='BookPdfUrl'
                            placeholder='Book pdf url'
                            required shadow row={5} />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value='price' />
                        </div>
                        <TextInput
                            id="price"
                            type="price"
                            name='price'
                            placeholder='price'
                            required shadow row={5} />
                    </div>

                    {/* fofth */}
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
