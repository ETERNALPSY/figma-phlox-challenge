import { Link } from 'react-router-dom'
import electronics from '../../assets/electronics.svg'
import jewelry from '../../assets/jewelry.svg'
import men from '../../assets/men.svg'
import women from '../../assets/women.svg'
import './categoryCards.scss'



const CategoryCards = () => {
   const categories = [
      {
         title: 'electronics',
         img: electronics,
         color: 'electronics'
      },
      {
         title: 'jewelry',
         img: jewelry,
         color: 'jewelry'
      },
      {
         title: "men's clothing",
         img: men,
         color: 'men'
      },
      {
         title: "women's clothing",
         img: women,
         color: 'women'
      }
   ]

   return (
      <div className='categories__main'>
         {
            categories.map((category, idx) => {
               return (
                  <div className='category__card' id={category.color} key={idx}>
                     <div className='category__card__body'>
                        <h4 className='category__card__body__title'>category</h4>
                        <h3 className='category__card__body__name'>{category.title}</h3>
                        <Link to={`/categories/${category}`} className='category__card__body__button'>Ver más</Link>
                     </div>
                     <div className='category__card__wrapper'>
                        <img className='category__card__wrapper__img' src={category.img} alt={category} />
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}

export default CategoryCards