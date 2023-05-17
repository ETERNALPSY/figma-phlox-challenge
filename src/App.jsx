import { Routes, Route, Link } from 'react-router-dom'
import CategoryCards from './components/categoryCards/categoryCards'
import BestProducts from './components/bestProducts/bestProducts'
import './App.css'
import DetailProduct from './pages/detailProduct/detailProduct'
import Navbar from './components/nav/nav'
import Main from './components/main/main'


function App() {

   return (
      <>
         <Navbar/>
         <Main/>
         <CategoryCards />
         <Routes>
            <Route path='/' element={<BestProducts />} > 
               <Route path='/product/:id' element={<DetailProduct />} />
            </Route>

            <Route path='*' element={<Link className='' to="/">Volver</Link>} /> //default

         </Routes>

      </>
   )
}
export default App
