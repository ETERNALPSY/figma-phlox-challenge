import React, { useEffect, useState } from 'react'
import Loader from '../loader/loader'
import { Link } from 'react-router-dom'
import './categoryCards.scss'



const CategoryCards = () => {
   const categories = [
      "electronics",
      "jewelry",
      "men's clothing",
      "women's clothing"
   ]

   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      setIsLoading(true)
      setIsLoading(false)
   }, [])

   return (
      <div className='categories__main'>
         {
            isLoading
               ? <Loader />
               : (
                  categories.map((category, idx) => {
                     return (
                        <div className='category__card'  id={category.trim()} key={idx}>
                           <div className='category__card__body'>
                              <h4 className='category__card__body__title'>category</h4>
                              <h3 className='category__card__body__name'>{category}</h3>
                              <Link to={`/categories/${category}`} className='category__card__body__button'> Ver más </Link>
                           </div>
                           <div className='category__card__wrapper'>
                              <img className='category__card__wrapper__img' src="https://static.stereogum.com/uploads/2020/09/HEALTH-DISCO4_PT1_Layered_RGB-1600299253-scaled.jpg" alt={category} />
                           </div>
                        </div>
                     )
                  })
               ) 
         }
      </div>
   )
}

export default CategoryCards