import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Register from './register';
import Home from './home';
import Products from './components/Products';
import CarForm from './components/carForm.component.jsx';
import './index.css'


let browserRouter=createBrowserRouter([
  {
    path:'login',
    element:<Login/>,
  },
  {
    path:'register',
    element: <Register/>
  },
  {
    path:'home',
    element:  <Home/>
  },
  {
    path:'products',
    element:  <Products/>
  },
  {
    path: 'dashboard',
    element: <CarForm/>
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>,
)
