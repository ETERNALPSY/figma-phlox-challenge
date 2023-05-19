import { Routes, Route, Link } from 'react-router-dom'
import CategoryCards from './components/categoryCards/categoryCards'
import BestProducts from './components/bestProducts/bestProducts'
import './App.css'
import DetailProduct from './pages/detailProduct/detailProduct'
import Tags from './components/tags/tags'
import Navbar from './components/nav/nav'
import Main from './components/main/main'
import Login from './pages/Login/Login'
import Cart from './pages/cart/cart'

function App() {

   return (
      <>
         <Navbar />
         <Routes>
            <Route path='/' element={
               <>
                  <Main />
                  <CategoryCards />
                  <Tags />
                  <BestProducts />
               </>
            }>

               <Route path='/product/:id' element={<DetailProduct />} />
            </Route>
            <Route path='/shopping' element={<Cart/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Link className='' to="/">Volver</Link>} />

         </Routes> 
      </>
   )
}

export default App
