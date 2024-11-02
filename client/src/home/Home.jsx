import React from 'react'
import Banner from '../components/banner'
import BestSellingBooks from './BestSellingBooks'
import FavouriteBooks from './FavouriteBooks'
import PromoBanner from './PromoBanner'
import Otherbooks from './Otherbooks'
import Review from './Review'


export default function Home() {
  return (
    <div>
      <Banner/>
      <BestSellingBooks/>
      <FavouriteBooks/>
      <PromoBanner/>
      <Otherbooks/>
      <Review/>
    </div>
  )
}
