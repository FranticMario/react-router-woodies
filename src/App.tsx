import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './RootLayout/RootLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import ProductSingle from './pages/productSingle/ProductSingle'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout />}>

        <Route index element={<Home  />} />
        
        <Route path='about' element={<About />} />

        <Route path='products' element={<Products />} />

        <Route path='products/:name' element={<ProductSingle />} />


        {/* <Route path='*' element={<NotFound />} /> */}


    </Route>

    )
  )


  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
