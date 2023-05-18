import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../services/getProducts'
import { CartContext } from '../../context/cartContext'
import Loader from '../../components/loader/loader'
import './detailProduct.scss'


const DetailProduct = () => {
   const { addToCart } = useContext(CartContext)
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
         <span className='close__button'><Link className='x' to="/">X</Link></span>
         {
            isLoading
               ? <Loader />
               : (

                  <div className='product__wrapper'>
                     <img className='product__wrapper__img' src={product.image} alt={product.title} />
                     <div className='product__header'>
                        <h2 className='product__header__title'>{product.title}</h2>
                        <p className='product__header__price'>$ {product.price}</p> 
                        <p className='product__header__desc'>{product.description}</p>
                        <p className='product__header__rating'>⭐⭐⭐⭐  120 Opiniones</p>
                        <div className='product__header__button-wrapper'>
                           <button className='button__add' onClick={()=> {addToCart(product)} }>Agregar al carrito</button>
                           <Link className='button__buy'>Comprar</Link>
                        </div>
                     </div>                     
                  </div>

               )
         }
      </article>
   )
}

export default DetailProduct