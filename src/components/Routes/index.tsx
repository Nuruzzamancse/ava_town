import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../features/Home'
import Product from '../../features/Product'
import Layout from '../layout'

const Routes = createBrowserRouter([{
    path:'/',
    element: <Layout></Layout>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/avatars/:id',
            element: <Product></Product>
        }
    ]
}])

export default Routes