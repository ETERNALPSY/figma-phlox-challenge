import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../services/getProducts'
import Loader
   from '../../components/loader/loader'
import './detailProduct.scss'


const DetailProduct = () => {
   const params = useParams()
   const [product, setProduct] = useState({})
   const [isLoading, setIsLoading] = useState(false)

   const getDataProduct = async () => {
      const response = await getProductById(params.id)
      response && setIsLoading(false)
      setProduct(response)
   }

   useEffect(() => {
      setIsLoading(true)
      getDataProduct()
   }, [])

   return (
      <article id='product__main'>
         {
            isLoading
               ? <Loader />
               : (

                  <div className='product__wrapper'>
                     <div className='product__header'>
                        <h2 className='product__header__title'>{product.title}</h2>
                        <span className='close__button'><Link className='x' to="/">X</Link></span> 
                     </div>
                     <img className='product__wrapper__img' src={product.image} alt={product.title} />
                     <div className='product__body'>
                        <p className='product__body__price'>${product.price}</p>
                        <p className='product__body__desc'>{product.description}</p>
                     </div>

                  </div>

               )
         }
      </article>
   )
}

export default DetailProduct