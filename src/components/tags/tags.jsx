import shipp from '../../assets/shipp.svg'
import pay from '../../assets/payment.svg'
import support from '../../assets/support.svg'
import warranty from '../../assets/warranty.svg'
import React from 'react'
import './tags.scss' 

const Tags = () => {
   return (
      <div id='tags__wrapper'>
         <div className='tag__wrapper'>
            <img className='tag__wrapper__img' src={shipp} alt="Shipping" />
            <h5 className='tag__wrapper__text'>Envió gratis</h5>
         </div>
         <div className='tag__wrapper'>
            <img className='tag__wrapper__img' src={warranty} alt="Garantía" />
            <h5 className='tag__wrapper__text'>Garantía</h5>
         </div>
         <div className='tag__wrapper'>
            <img className='tag__wrapper__img' src={support} alt="Soporte en linea" />
            <h5 className='tag__wrapper__text'>Soporte en linea</h5>
         </div>
         <div className='tag__wrapper'>
            <img className='tag__wrapper__img' src={pay} alt="Pago seguro" />
            <h5 className='tag__wrapper__text'>Pago seguro</h5>
         </div>
      </div>
   )
}

export default Tags