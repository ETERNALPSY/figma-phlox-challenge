import { Routes, Route, Link } from 'react-router-dom'
import CategoryCards from './components/categoryCards/categoryCards'
import BestProducts from './components/bestProducts/bestProducts'
import './App.css'
import DetailProduct from './pages/detailProduct/detailProduct'
import Login from './pages/Login/Login'


function App() {

   return (
      <>
        
         <Routes>
            <Route path='/' element={<>
               <CategoryCards />
               <BestProducts />
            </>
            } > 
               <Route path='/product/:id' element={<DetailProduct />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path='*' element={<Link className='' to="/">Volver</Link>} /> //default

         </Routes> 
      </>
   )
}
export default App
