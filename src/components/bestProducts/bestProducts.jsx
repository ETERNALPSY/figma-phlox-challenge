import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./bestProducts.scss"
import { getProducts } from '../../services/getProducts'
import Loader from '../loader/loader'

const BestProducts = () => {

   const [products, setProducts] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   const getData = async () => {
      const response = await getProducts()
      response && setIsLoading(false)
      setProducts(response)
   }

   useEffect(() => {
      setIsLoading(true)
      getData()
   }, [])

   return (
      <section id='best__seller'>
         <h2 className='best__seller__title'>Best Seller Products</h2>
         <h5 className='best__seller__subtitle'>Aquí dice algo</h5>
         <div className='products__wrapper'>
            {
               isLoading
                  ? <Loader />
                  : (
                     products.map((product) => {
                        const { id, title, image, price } = product
                        return (
                           <Link to={`/product/${id}`} className='card__body' key={id}>
                              <div className='card__body__img-wrapper'>
                                 <img className='card__body__img-wrapper__img' src={image} alt={title} />
                              </div>
                              <div className='card__body__tx-wrapper'>
                                 <h5 className='card__body__tx-wrapper__name'>{title}</h5>
                                 <strong className='card__body__tx-wrapper__price'>${price}</strong>
                              </div>
                           </Link>
                        )
                     })
                  )
            }
         </div>
         <Outlet />
      </section>
   )
}

export default BestProducts