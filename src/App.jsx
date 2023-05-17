import { Routes, Route, Link } from 'react-router-dom'
import CategoryCards from './components/categoryCards/categoryCards'
import BestProducts from './components/bestProducts/bestProducts'
import './App.css'
import DetailProduct from './pages/detailProduct/detailProduct'
import Tags from './components/tags/tags'


function App() {

   return (
      <>
         <CategoryCards />
         <Routes>
            <Route path='/' element={
               <>
                  <Tags />
                  <BestProducts />
               </>
            }>

               <Route path='/product/:id' element={<DetailProduct />} />
            </Route>

            <Route path='*' element={<Link className='' to="/">Volver</Link>} /> //default

         </Routes>

      </>
   )
}
export default App
