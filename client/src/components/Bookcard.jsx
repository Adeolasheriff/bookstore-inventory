import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination,Autoplay} from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';

export default function Bookcard({headline,books}) {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h1 className='text-5xl text-blue-950 text-center my-5'>{headline}</h1>
        <div>
        <Swiper
        autoplay ={{
            delay: 2500,
            disableOnInteraction:false
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {books.map((book)=> (
            <SwiperSlide key ={book._id}>
                 <Link to={`/book/${book._id}`}>
                    <div className='relative'>
                        <img src={book.imageUrl} alt= {book.bookTitle} />
                        <div className='absolute top-3 right-3 bg-blue-600 hover:bg-blue-950 p-2 rounded'>
                             <FaCartShopping/>
                        </div>
                         </div>

                    <div>
                          <h1>{book.bookTitle}</h1>
                        <h2>{book.authorName}</h2>
                    </div>
                 </Link>
            </SwiperSlide>
              
        ))}
    
      </Swiper>
        </div>
    </div>
  )
}
